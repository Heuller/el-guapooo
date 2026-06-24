import { useEffect, useRef } from 'react';
import { useSearchStore } from '../store/useSearchStore';
import { recipes } from '../data/recipes';

const extractTextForRecipe = (recipe: any) => {
  const parts = [recipe.title];
  recipe.chips?.forEach((c: any) => parts.push(c.label));
  recipe.meta?.forEach((m: any) => parts.push(`${m.label}: ${m.value}`));
  recipe.ingredients?.forEach((g: any) => {
    parts.push(g.name);
    g.items.forEach((item: any) => parts.push(item.name));
  });
  recipe.method?.forEach((m: any) => parts.push(m.text));
  recipe.notes?.forEach((n: any) => {
    parts.push(n.title);
    parts.push(n.content);
  });
  return parts.join(' ').toLowerCase();
};

export const useSemanticSearch = () => {
  const workerRef = useRef<Worker | null>(null);
  const { 
    isReady, 
    isFallback, 
    query, 
    setReady, 
    setProgress, 
    setFallback, 
    setResults,
    setIndexing
  } = useSearchStore();

  const debounceTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (!window.Worker) {
      setFallback(true);
      return;
    }

    try {
      const worker = new Worker(new URL('../workers/semantic.worker.ts', import.meta.url), {
        type: 'module'
      });
      workerRef.current = worker;

      worker.onmessage = (e) => {
        const { type, payload } = e.data;
        switch (type) {
          case 'PROGRESS':
            setProgress(payload);
            break;
          case 'READY':
            setReady(true);
            setProgress(100);
            worker.postMessage({ type: 'INDEX', payload: recipes });
            setIndexing(true);
            break;
          case 'INDEXING_PROGRESS':
            break;
          case 'INDEX_COMPLETE':
            setIndexing(false);
            if (useSearchStore.getState().query) {
              worker.postMessage({ type: 'SEARCH', payload: useSearchStore.getState().query });
            }
            break;
          case 'SEARCH_RESULTS':
            setResults(payload);
            break;
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
      setFallback(true);
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
