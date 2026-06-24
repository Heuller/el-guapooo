// @ts-ignore
import { pipeline, env } from '@xenova/transformers';
import { getEmbedding, saveEmbedding, getAllEmbeddings } from '../utils/idb';

env.allowLocalModels = false; 

let featureExtractionPipeline: any = null;
let isReady = false;

const init = async () => {
  if (featureExtractionPipeline) return;
  
  try {
    featureExtractionPipeline = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
      progress_callback: (info: any) => {
        if (info.status === 'progress' && info.progress !== undefined) {
          self.postMessage({ type: 'PROGRESS', payload: info.progress });
        }
      }
    });
    isReady = true;
    self.postMessage({ type: 'READY' });
  } catch (error: any) {
    self.postMessage({ type: 'ERROR', payload: error.message });
  }
};

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

const indexRecipes = async (recipes: any[]) => {
  if (!isReady) return;
  try {
    let indexedCount = 0;
    for (const recipe of recipes) {
      const existing = await getEmbedding(recipe.id);
      if (!existing) {
        const text = extractTextForRecipe(recipe);
        const output = await featureExtractionPipeline(text, { pooling: 'mean', normalize: true });
        const embedding = Array.from(output.data) as number[];
        await saveEmbedding({ id: recipe.id, embedding });
      }
      indexedCount++;
      self.postMessage({ type: 'INDEXING_PROGRESS', payload: (indexedCount / recipes.length) * 100 });
    }
    self.postMessage({ type: 'INDEX_COMPLETE' });
  } catch (error: any) {
    self.postMessage({ type: 'ERROR', payload: error.message });
  }
};

const search = async (query: string) => {
  if (!isReady) return;
  try {
    const output = await featureExtractionPipeline(query, { pooling: 'mean', normalize: true });
    const queryEmbedding = Array.from(output.data) as number[];
    
    const allEmbeddings = await getAllEmbeddings();
    
    const results = allEmbeddings.map(item => {
      let score = 0;
      for (let i = 0; i < queryEmbedding.length; i++) {
        score += queryEmbedding[i] * item.embedding[i];
      }
      return { id: item.id, score };
    });
    
    results.sort((a, b) => b.score - a.score);
    const topResults = results.filter(r => r.score > 0.1).slice(0, 10);
    
    self.postMessage({ type: 'SEARCH_RESULTS', payload: topResults });
  } catch (error: any) {
    self.postMessage({ type: 'ERROR', payload: error.message });
  }
};

self.addEventListener('message', async (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'INIT':
      await init();
      break;
    case 'INDEX':
      await indexRecipes(payload);
      break;
    case 'SEARCH':
      await search(payload);
      break;
  }
});
