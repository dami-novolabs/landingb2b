"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0, 0, 0.2, 1] as const;

const LOGOS = [
  { name: "Aerolab",    src: "/logos/aerolab.png"    },
  { name: "Baikal",     src: "/logos/baikal.png"     },
  { name: "Cyberclick", src: "/logos/cyberclick.png" },
  { name: "Simball",    src: "/logos/simball.png"    },
  { name: "Rox",        src: "/logos/rox.png"        },
  { name: "Homa",       src: "/logos/homa.png"       },
  { name: "Coorva",     src: "/logos/coorva.png"     },
  { name: "Possumus",   src: "/logos/possumus.png"   },
  { name: "Serquo",     src: "/logos/serquo.png"     },
  { name: "Intuition",  src: "/logos/intuition.png"  },
];

const ADVISORS = [
  { name: "Alex Dantart",       image: "/advisors/alex-dantart.png",       bio: "Emprendedor, inversor ángel y especialista en inteligencia artificial." },
  { name: "Emiliano Chamorro",  image: "/advisors/emiliano-chamorro.png",  bio: "Fundador del Instituto Baikal, enfocado en formación y desarrollo de talento." },
  { name: "Eduardo Amadeo",     image: "/advisors/eduardo-amadeo.png",     bio: "Venture Partner en Overboost e inversor en Kamay Ventures." },
  { name: "Agustín Linenberg",  image: "/advisors/agustin-linenberg.png",  bio: "Fundador de Aerolab. Inversor, mentor, advisor y Board Member en SoDA." },
  { name: "Felipe Mendiguren",  image: "/advisors/felipe-mendiguren.png",  bio: "Empresario e inversor ángel con foco en crecimiento y desarrollo de compañías." },
  { name: "Felipe Polo",        image: "/advisors/felipe-polo.png",        bio: "Co-founder & CEO de Orbitant, especializada en AI Engineering." },
  { name: "David Tomás",        image: "/advisors/david-tomas.png",        bio: "Co-founder & CEO de Cyberclick. Autor de La empresa más feliz del mundo." },
  { name: "Juanjo Mostazo",     image: "/advisors/juanjo-mostazo.png",     bio: "Ingeniero y emprendedor (Homa Games). Inversor en KFund." },
];

// Carousel config
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
      <h4 className="mt-5 font-display text-[22px] leading-tight text-novo-black">
        {advisor.name}
      </h4>
      <p className="mt-2 max-w-[240px] text-[14px] leading-[1.55] text-novo-graphite">
        {advisor.bio}
      </p>
    </div>
  );
}

function AdvisorCarousel() {
  const reduce = useReducedMotion();
  const totalWidth = CARD_STEP * ADVISORS.length;

  if (reduce) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {ADVISORS.map((advisor) => (
          <AdvisorCard key={advisor.name} advisor={advisor} />
        ))}
      </div>
    );
  }

  const items = [...ADVISORS, ...ADVISORS];

  return (
    <>
      <style>{`
        @keyframes scroll-advisors-opera {
          from { transform: translateX(0); }
          to   { transform: translateX(-${totalWidth}px); }
        }
        .advisor-track-opera {
          animation: scroll-advisors-opera ${DURATION_S}s linear infinite;
        }
        .advisor-carousel-opera:hover .advisor-track-opera {
          animation-play-state: paused;
        }
      `}</style>
      <div className="advisor-carousel-opera overflow-hidden">
        <div className="advisor-track-opera flex" style={{ gap: CARD_GAP }}>
          {items.map((advisor, i) => (
            <AdvisorCard key={`${advisor.name}-${i}`} advisor={advisor} />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Credibility() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      {/* Header */}
      <div className="mx-auto mb-20 max-w-[880px] px-8">
        <h2 className="font-display text-[56px] leading-none tracking-[-0.03em] text-balance text-novo-black">
          Confían en nosotros
        </h2>
      </div>

      {/* Logos grid */}
      <div className="mx-auto mb-20 max-w-[1280px] px-8">
        <motion.div
          className="grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-12"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex h-12 items-center justify-center opacity-50 transition-opacity duration-200 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Advisors */}
      <div className="mx-auto max-w-[880px] px-8">
        <h3 className="mb-12 font-display text-[30px] text-novo-black">
          Un consejo de socios comprometidos
        </h3>
      </div>

      <div className="pl-8 md:pl-[calc((100vw-880px)/2)]">
        <AdvisorCarousel />
      </div>
    </section>
  );
}
