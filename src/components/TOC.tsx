import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";

const categories = [
  { id: "pizzas", num: "01", name: "Pizzas", sub: "massas · molhos · montagem" },
  { id: "focaccias", num: "02", name: "Focaccias", sub: "salgadas & doces" },
  { id: "cucas", num: "03", name: "Cucas", sub: "massas & coberturas" },
  { id: "bolos", num: "04", name: "Bolos", sub: "massas & recheios" },
  { id: "quitanda", num: "05", name: "Quitanda", sub: "padaria brasileira artesanal" },
  { id: "especiais", num: "06", name: "Especiais", sub: "receitas premium & sazonais" },
];

export const TOC = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
          <Search className="absolute left-4 text-line-dark w-5 h-5" strokeWidth={1.5} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por ingrediente, método..."
            className="w-full bg-paper-light border border-line rounded-full py-3 pl-12 pr-12 text-ink placeholder:text-line-dark focus:outline-none focus:ring-2 focus:ring-terra/50 transition-shadow"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 text-ink-soft hover:text-terra"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-line border border-line overflow-hidden rounded-sm">
        {categories.map((cat, i) => (
          <motion.a
            key={cat.id}
            href={`#${cat.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-paper-light p-12 hover:bg-ink transition-colors duration-500 flex flex-col no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-terra focus-visible:-outline-offset-2"
          >
            <span className="font-disp text-5xl font-light text-line group-hover:text-white/10 transition-colors duration-500 mb-2 leading-none">
              {cat.num}
            </span>
            <span className="font-disp text-3xl font-medium italic text-ink group-hover:text-paper-light transition-colors duration-500 mb-3 leading-none">
              {cat.name}
            </span>
            <span className="text-[0.67rem] font-light tracking-[0.14em] uppercase text-ink-soft group-hover:text-paper-light/40 transition-colors duration-500">
              {cat.sub}
            </span>
            
            <ArrowRight 
              className="absolute bottom-10 right-10 text-line opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:text-terra group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 w-6 h-6" 
              strokeWidth={1.5}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};
