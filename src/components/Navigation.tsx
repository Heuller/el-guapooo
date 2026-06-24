import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const links = [
    { name: "Pizzas", href: "#pizzas" },
    { name: "Focaccias", href: "#focaccias" },
    { name: "Cucas", href: "#cucas" },
    { name: "Bolos", href: "#bolos" },
    { name: "Quitanda", href: "#quitanda" },
    { name: "Especiais", href: "#especiais" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5 flex items-center justify-between transition-all duration-500",
          isScrolled
            ? "bg-paper-cream/90 dark:bg-paper-invert-light/90 backdrop-blur-lg border-b border-line dark:border-line-invert py-4 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <a
          href="#top"
          className="font-disp text-xl font-semibold tracking-[0.28em] uppercase text-ink dark:text-ink-invert no-underline select-none"
        >
          El Guapo
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[0.67rem] tracking-[0.22em] uppercase text-ink-soft dark:text-ink-invert-soft hover:text-terra transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-terra scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 -mr-2 text-ink-soft dark:text-ink-invert-soft hover:text-terra transition-colors focus:outline-none"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-ink/40 dark:bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-paper-light dark:bg-paper-invert-light border-l border-line dark:border-line-invert z-[70] flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <a
                  href="#top"
                  className="font-disp text-lg font-semibold tracking-[0.28em] uppercase text-terra"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  El Guapo
                </a>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-ink-soft dark:text-ink-invert-soft hover:text-terra transition-colors"
                >
                  <X size={28} strokeWidth={1.5} />
                </button>
              </div>

              <ul className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsDrawerOpen(false)}
                      className="flex items-center gap-4 text-2xl font-disp italic text-ink dark:text-ink-invert hover:text-terra transition-colors"
                    >
                      <span className="text-sm font-body not-italic text-line dark:text-line-invert font-light">
                        0{i + 1}
                      </span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
