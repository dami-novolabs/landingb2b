"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Innova", href: "#innova" },
  { label: "Opera", href: "#opera" },
  { label: "Método", href: "#metodo" },
  { label: "Equipo", href: "#equipo" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group relative text-[15px] font-medium text-novo-charcoal transition-colors duration-200 hover:text-novo-accent"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-novo-accent transition-[width] duration-200 ease-[cubic-bezier(0,0,0.2,1)] group-hover:w-full" />
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 100);
  });

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-[250ms] ease-[cubic-bezier(0,0,0.2,1)]",
          scrolled
            ? "h-[60px] border-b border-novo-line bg-novo-cream/85 backdrop-blur-[8px]"
            : "h-[72px] border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-8">
          <a href="/" className="font-display text-[22px] tracking-[-0.02em] text-novo-black">
            Novo Labs
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonPrimary href="#agendar" className="px-5 py-[10px] text-[14px]">
              Agendar diagnóstico →
            </ButtonPrimary>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-[5px] p-2 md:hidden"
          >
            <span
              className={cn(
                "block h-px w-5 bg-novo-black transition-transform duration-200",
                mobileOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-novo-black transition-opacity duration-200",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-novo-black transition-transform duration-200",
                mobileOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-novo-black/30 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-novo-cream px-8 pb-8 pt-24 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[18px] font-medium text-novo-charcoal transition-colors hover:text-novo-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-8" onClick={() => setMobileOpen(false)}>
              <ButtonPrimary href="#agendar" className="w-full justify-center">
                Agendar diagnóstico →
              </ButtonPrimary>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
