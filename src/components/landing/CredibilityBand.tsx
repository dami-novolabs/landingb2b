"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const ADVISORS = [
  { name: "Alex Dantart",       image: "/advisors/alex-dantart.png",       bio: "Construyó +30 empresas y vendió 5. Una década trabajando en Inteligencia Artificial." },
    { name: "Eduardo Amadeo",     image: "/advisors/eduardo-amadeo.png",     bio: "Experto en innovación Corporativa. +10 años operando fondos de capital de riesgo en 4 países." },
    { name: "Juanjo Mostazo",     image: "/advisors/juanjo-mostazo.png",     bio: "Ingeniero escaló una empresa a $100M+ USD de facturación. Inversor en casi 200 negocios." },
  { name: "Agustín Linenberg",  image: "/advisors/agustin-linenberg.png",  bio: "+10 años acompañando a grandes empresas a escalar con tecnología. Referente en productos digitales en Latinoamérica." },
  { name: "Felipe Mendiguren",  image: "/advisors/felipe-mendiguren.png",  bio: "Operador serial de compañías. Ingeñiero con empresas vendidas y más de 30 inversiones en compañías de tecnología." },
  { name: "Felipe Polo",        image: "/advisors/felipe-polo.png",        bio: "Ingeniero que escaló equipos de tecnología a escala internacional. 6 empresas creadas, 2 empresas vendidas." },
    { name: "Emiliano Chamorro",  image: "/advisors/emiliano-chamorro.png",  bio: "Una de las mentes más interdisciplinarias del ecosistema hispanohablante. Combina derecho, finanzas y emprendimiento serial." },
  { name: "David Tomás",        image: "/advisors/david-tomas.png",        bio: "25 años liderando operaciones de más de 100 personas en tecnología. Autor de libros Best Seller." },
];
const CARD_WIDTH = 280;
const CARD_GAP = 32;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const DURATION_S = 4 * ADVISORS.length;

function AdvisorCard({ advisor }: { advisor: typeof ADVISORS[number] }) {
  return (
    <div className="group flex-shrink-0" style={{ width: CARD_WIDTH }}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-novo-line">
        <Image
          src={advisor.image}
          alt={advisor.name}
          fill
          className="object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
          sizes="280px"
        />
      </div>
      <h4 className="mt-5 font-display text-[22px] leading-tight text-novo-black">{advisor.name}</h4>
      <p className="mt-2 max-w-[240px] text-body-s text-novo-graphite">{advisor.bio}</p>
    </div>
  );
}

function AdvisorCarousel() {
  const reduce = useReducedMotion();
  const totalWidth = CARD_STEP * ADVISORS.length;

  if (reduce) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {ADVISORS.map((a) => <AdvisorCard key={a.name} advisor={a} />)}
      </div>
    );
  }

  const items = [...ADVISORS, ...ADVISORS];
  return (
    <>
      <style>{`
        @keyframes scroll-advisors-cb {
          from { transform: translateX(0); }
          to   { transform: translateX(-${totalWidth}px); }
        }
        .advisor-track-cb { animation: scroll-advisors-cb ${DURATION_S}s linear infinite; }
        .advisor-carousel-cb:hover .advisor-track-cb { animation-play-state: paused; }
      `}</style>
      <div className="advisor-carousel-cb overflow-hidden">
        <div className="advisor-track-cb flex" style={{ gap: CARD_GAP }}>
          {items.map((a, i) => <AdvisorCard key={`${a.name}-${i}`} advisor={a} />)}
        </div>
      </div>
    </>
  );
}

const STATS = [
  {
    value: "8",
    label: "AÑOS CONSTRUYENDO DESDE CERO",
  },
  {
    value: "40",
    label: "EMPRESAS ACOMOPAÑADAS",
  },
  {
    value: "360+",
    label: "PERSONAS APLICARON NUESTRO MÉTODO",
  },
];

export default function CredibilityBand() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-t border-novo-line bg-novo-cream px-8 py-[64px] md:py-[96px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 place-items-center md:grid-cols-3 md:gap-12">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
          >
            <p className="mb-4 font-display text-[48px] leading-none tracking-[-0.04em] text-novo-black md:text-[64px]">
              {stat.value}
            </p>
            <p className="font-mono text-mono-xs uppercase leading-[1.5] tracking-[0.08em] text-novo-graphite">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Advisors */}
      <div className="mx-auto mt-20 max-w-[880px] px-8">
        <h3 className="mb-12 font-display text-[30px] text-novo-black">
          Socios que apoyan Novolabs
        </h3>
      </div>
      <div className="px-8 md:px-0">
        <div className="mx-auto max-w-[1280px] md:pl-16">
          <AdvisorCarousel />
        </div>
      </div>
    </section>
  );
}
