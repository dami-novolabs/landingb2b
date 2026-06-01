const COLUMNS = [
  {
    eyebrow: "NOVO LABS",
    links: [
      { label: "El método", href: "/metodo" },
      { label: "El equipo", href: "/equipo" },
      { label: "Casos", href: "/casos" },
    ],
  },
  {
    eyebrow: "PROGRAMAS",
    links: [
      { label: "Innova", href: "/innova" },
      { label: "Opera", href: "/opera" },
    ],
  },
  {
    eyebrow: "CONTACTO",
    links: [
      { label: "hola@novolabs.co", href: "mailto:hola@novolabs.co" },
      { label: "LinkedIn", href: "#linkedin" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-novo-near-black px-8 pb-12 pt-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.eyebrow}>
              <p className="mb-6 font-mono text-mono-xs uppercase tracking-[0.08em] text-novo-mid">
                {col.eyebrow}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[15px] text-novo-cream transition-colors duration-200 hover:text-novo-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr
          className="mb-6 mt-16"
          style={{ borderColor: "rgba(229,225,217,0.1)" }}
        />

        <div className="flex flex-col gap-2 text-[13px] text-novo-mid md:flex-row md:justify-between">
          <span>© 2026 Novo Labs · Buenos Aires · Madrid</span>
          <span className="flex gap-6">
            <a href="/privacidad" className="transition-colors duration-200 hover:text-novo-cream">
              Privacidad
            </a>
            <a href="/terminos" className="transition-colors duration-200 hover:text-novo-cream">
              Términos
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
