"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

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


export default function Ecosystem() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-novo-cream py-[48px] md:py-[80px]">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-[880px] px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-novo-mid">
          Desde 2019 construyendo para +40 empresas
        </p>
      </div>

      {/* Logos grid */}
      <div className="mx-auto mb-0 max-w-[1280px] px-8">
        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-12"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
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
                className="max-h-10 object-contain"
                style={{ width: "auto" }}
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
