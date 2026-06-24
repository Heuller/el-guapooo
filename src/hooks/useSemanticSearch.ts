import { useEffect, useRef } from 'react';
import { useSearchStore } from '../store/useSearchStore';
import { recipes } from '../data/recipes';
import { extractTextForRecipe } from '../lib/recipeTextExtractor';

export const useSemanticSearch = () => {
  const workerRef = useRef<Worker | null>(null);
  const { 
    isReady,
    isFallback, 
    query, 
    setFallback, 
    setResults
  } = useSearchStore();

  const debounceTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (!window.Worker) {
      useSearchStore.getState().setFallback(true);
      return;
    }

    try {
      const worker = new Worker(new URL('../workers/semantic.worker.ts', import.meta.url), {
        type: 'module'
      });
      workerRef.current = worker;

      worker.onmessage = (e) => {
        const { type, payload } = e.data;
        const store = useSearchStore.getState();
        switch (type) {
          case 'PROGRESS':
            store.setProgress(payload);
            break;
          case 'READY':
            store.setReady(true);
            store.setProgress(100);
            worker.postMessage({ type: 'INDEX', payload: recipes });
            store.setIndexing(true);
            break;
          case 'INDEXING_PROGRESS':
            break;
          case 'INDEX_COMPLETE':
            store.setIndexing(false);
            if (store.query) {
              worker.postMessage({ type: 'SEARCH', payload: useSearchStore.getState().query });
            }
            break;
          case 'SEARCH_RESULTS': {
            const currentQuery = useSearchStore.getState().query.toLowerCase();
            const textMatches = recipes
              .filter(r => extractTextForRecipe(r).includes(currentQuery))
              .map(r => ({ id: r.id, score: 1.0 }));
            
            const semanticIds = new Set(payload.map((r: any) => r.id));
            const merged = [...payload];
            
            textMatches.forEach(tm => {
              if (!semanticIds.has(tm.id)) {
                merged.push(tm);
              } else {
                const existing = merged.find(m => m.id === tm.id);
                if (existing) existing.score += 0.5; 
              }
            });
            
            setResults(merged.sort((a, b) => b.score - a.score));
            break;
          }
          case 'ERROR':
            console.error("Worker error:", payload);
            setFallback(true);
            break;
        }
      };

      worker.postMessage({ type: 'INIT' });

      return () => {
        worker.terminate();
      };
    } catch (e) {
      console.error("Worker initialization error:", e);
      useSearchStore.getState().setFallback(true);
    }
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    if (debounceTimeout.current) window.clearTimeout(debounceTimeout.current);

    debounceTimeout.current = window.setTimeout(() => {
      if (isFallback) {
        const q = query.toLowerCase();
        const fallbackResults = recipes
          .filter(r => extractTextForRecipe(r).includes(q))
          .map(r => ({ id: r.id, score: 1 }));
        setResults(fallbackResults);
      } else if (isReady) {
        workerRef.current?.postMessage({ type: 'SEARCH', payload: query });
      }
    }, 300);

    return () => {
      if (debounceTimeout.current) window.clearTimeout(debounceTimeout.current);
    };
  }, [query, isFallback, isReady]);
};
