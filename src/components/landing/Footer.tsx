const LINKS = [
  { label: "Programa Opera", href: "/programa" },
  { label: "Escribinos por WhatsApp", href: "https://wa.me/5491163544698" },
  { label: "Escribinos por LinkedIn", href: "https://www.linkedin.com/in/tomas-volonte/" },
  { label: "Podcast Novolabs", href: "https://www.youtube.com/@novolabs-startup-school" },
  { label: "aloha@novolabs.xyz", href: "mailto:aloha@novolabs.xyz" },
];

export default function Footer() {
  return (
    <footer className="bg-novo-near-black px-8 pb-12 pt-16">
      <div className="mx-auto max-w-[1280px]">
        <ul className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[15px] text-novo-cream transition-colors duration-200 hover:text-novo-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <hr
          className="mb-6 mt-12"
          style={{ borderColor: "rgba(229,225,217,0.1)" }}
        />

        <span className="text-[13px] text-novo-mid">© 2026 Novo Labs · Buenos Aires · Madrid</span>
      </div>
    </footer>
  );
}
