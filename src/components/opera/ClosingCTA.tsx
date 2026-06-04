import { cn } from "@/lib/utils";

// ButtonPrimary-style link with inverted colors for dark background
function DarkButtonPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-[4px] bg-novo-cream px-7 py-3.5",
        "text-[15px] font-medium tracking-[0.01em] text-novo-black",
        "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:-translate-y-px hover:bg-novo-line hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]",
        "active:translate-y-0 active:duration-[80ms]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-novo-cream",
      )}
    >
      {children}
    </a>
  );
}

export default function ClosingCTA() {
  return (
    <section className="bg-novo-black py-[96px] md:py-[160px]">
      <div className="mx-auto max-w-[720px] px-8 text-center">

        <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-novo-mid">
          — EL PRIMER PASO
        </p>

        <h2 className="mb-6 font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-cream md:text-[72px]">
          En 3 semanas sabés exactamente qué automatizar. Sin compromiso.
        </h2>

        <p className="mx-auto mb-12 max-w-[52ch] text-[18px] leading-[1.55] text-novo-mid">
          Hacemos un diagnóstico operacional de tu empresa. Mapeamos los procesos, calculamos el costo real y te decimos qué automatizar primero y cuánto impacto tiene. Sin venta, sin presión.
        </p>

        <DarkButtonPrimary href="#agendar">
          Agendá el diagnóstico →
        </DarkButtonPrimary>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-novo-mid">
          3 SEMANAS · SIN COSTO · 2 SLOTS DISPONIBLES
        </p>

      </div>
    </section>
  );
}
