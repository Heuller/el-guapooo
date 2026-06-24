import React from "react";
import { motion } from "framer-motion";
import { Search, X, ArrowRight, BrainCircuit } from "lucide-react";
import { useSearchStore } from "../store/useSearchStore";
import { useSemanticSearch } from "../hooks/useSemanticSearch";

const categories = [
  { id: "pizzas", num: "01", name: "Pizzas", sub: "massas · molhos · montagem" },
  { id: "focaccias", num: "02", name: "Focaccias", sub: "salgadas & doces" },
  { id: "cucas", num: "03", name: "Cucas", sub: "massas & coberturas" },
  { id: "bolos", num: "04", name: "Bolos", sub: "massas & recheios" },
  { id: "quitanda", num: "05", name: "Quitanda", sub: "padaria brasileira artesanal" },
  { id: "especiais", num: "06", name: "Especiais", sub: "receitas premium & sazonais" },
];

export const TOC = () => {
  const { query, setQuery, isReady, progress, isFallback, isIndexing } = useSearchStore();
  useSemanticSearch();

  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="block text-center text-[0.65rem] tracking-[0.44em] uppercase text-terra font-light mb-12"
      >
        Índice
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative max-w-md mx-auto mb-16"
      >
        <div className="relative flex items-center">
          <Search className="absolute left-4 text-line-dark dark:text-line-invert w-5 h-5 transition-colors duration-500" strokeWidth={1.5} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por ingrediente, método..."
            className="w-full bg-paper-light dark:bg-paper-invert-light border border-line dark:border-line-invert rounded-full py-3 pl-12 pr-12 text-ink dark:text-ink-invert placeholder:text-line-dark dark:placeholder:text-line-invert focus:outline-none focus:ring-2 focus:ring-terra/50 transition-all duration-500"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 text-ink-soft dark:text-ink-invert-soft hover:text-terra dark:hover:text-terra-light transition-colors duration-500"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
        </div>
        <div className="mt-4 flex justify-center items-center gap-2 text-[0.65rem] uppercase tracking-widest text-ink-soft dark:text-ink-invert-soft">
          {!isFallback && !isReady && (
            <>
              <BrainCircuit className="w-3 h-3 animate-pulse" />
              <span>Preparando IA... {Math.round(progress)}%</span>
            </>
          )}
          {!isFallback && isReady && isIndexing && (
            <>
              <BrainCircuit className="w-3 h-3 animate-pulse text-terra" />
              <span>Indexando receitas...</span>
            </>
          )}
          {!isFallback && isReady && !isIndexing && (
            <>
              <BrainCircuit className="w-3 h-3 text-terra" />
              <span>Inteligência Artificial Ativa</span>
            </>
          )}
          {isFallback && (
            <span>Busca textual (Fallback)</span>
          )}
        </div>
      </motion.div>

      {!query && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-line dark:bg-line-invert border border-line dark:border-line-invert overflow-hidden rounded-sm transition-colors duration-500">
        {categories.map((cat, i) => (
          <motion.a
            key={cat.id}
            href={`#${cat.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-paper-light dark:bg-paper-invert-light p-12 hover:bg-ink dark:hover:bg-paper-invert transition-colors duration-500 flex flex-col no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-terra focus-visible:-outline-offset-2"
          >
            <span className="font-disp text-5xl font-light text-line dark:text-line-invert group-hover:text-white/10 dark:group-hover:text-white/5 transition-colors duration-500 mb-2 leading-none">
              {cat.num}
            </span>
            <span className="font-disp text-3xl font-medium italic text-ink dark:text-ink-invert group-hover:text-paper-light dark:group-hover:text-ink-invert transition-colors duration-500 mb-3 leading-none">
              {cat.name}
            </span>
            <span className="text-[0.67rem] font-light tracking-[0.14em] uppercase text-ink-soft dark:text-ink-invert-soft group-hover:text-paper-light/40 dark:group-hover:text-ink-invert-soft/70 transition-colors duration-500">
              {cat.sub}
            </span>
            
            <ArrowRight 
              className="absolute bottom-10 right-10 text-line dark:text-line-invert opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:text-terra dark:group-hover:text-terra-light group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 w-6 h-6" 
              strokeWidth={1.5}
            />
          </motion.a>
        ))}
        </div>
      )}
    </section>
  );
};
