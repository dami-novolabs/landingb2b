"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";




export default function TwoTracks() {
  const reduce = useReducedMotion();

  return (
    <section id="tracks" className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <div className="text-center">
          <h2 className="mx-auto font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-balance text-novo-black md:text-[72px] md:leading-[1.05] md:tracking-[-0.04em]">
            Trabajas directo con los fundadores, sin consultores.
          </h2>
          <p className="mx-auto mt-6 max-w-[56ch] text-[21px] leading-[1.55] tracking-[-0.005em] text-novo-graphite">
            Por eso solo aceptamos 2 clientes por trimestre.
          </p>

          {/* Founder portraits */}
          <div className="mx-auto mt-12 flex max-w-[560px] justify-center gap-16">
            {[
              { name: "Tomás Volonté",  image: "/founders/tomas-volonte.png" },
              { name: "Damián Sánchez", image: "/founders/damian-sanchez.png" },
            ].map((founder) => (
              <div key={founder.name} className="flex flex-col items-center gap-4">
                <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full bg-novo-line">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
                <p className="font-display text-[18px] tracking-[-0.01em] text-novo-black">
                  {founder.name}
                </p>
                <p className="text-[14px] font-light text-novo-mid">
                  Co-fundador de Novolabs
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
