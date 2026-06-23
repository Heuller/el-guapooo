import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center text-center px-8 pb-16 pt-24 relative overflow-hidden">
      <div className="flex flex-col items-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-[0.65rem] tracking-[0.52em] uppercase text-terra font-light mb-10"
        >
          Caderno de Receitas
        </motion.p>

        <div className="flex flex-col items-center leading-none mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="font-disp text-[clamp(2.8rem,6.5vw,5.5rem)] font-light italic tracking-[0.18em] text-ink-soft"
          >
            El
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-disp text-[clamp(5.5rem,17vw,15rem)] font-semibold tracking-[-0.03em] text-ink leading-[0.82]"
          >
            Guapo
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-6 w-[clamp(180px,38vw,480px)] my-10"
        >
          <span className="flex-1 h-[1px] bg-line" />
          <span className="text-terra text-sm">✦</span>
          <span className="flex-1 h-[1px] bg-line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-disp text-[clamp(0.95rem,1.8vw,1.25rem)] font-light italic text-ink-soft tracking-[0.06em]"
        >
          cozinha artesanal · fermentação natural · ingredientes autorais
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[0.6rem] tracking-[0.38em] uppercase text-ink-soft">
          Explorar
        </span>
        <motion.span
          animate={{
            scaleY: [1, 0.45, 1],
            opacity: [0.85, 0.2, 0.85]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[1px] h-[38px] bg-gradient-to-b from-terra to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
};
