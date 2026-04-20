import Image from "next/image";

const LEGAL_LINKS = [
  {
    label: "Segue-nos no nosso Instagram",
    href: "https://instagram.com/brasea",
    external: true,
  },
];

function BraseaLogoSmall() {
  return (
    <a
      href="#s-hero"
      aria-label="Voltar ao topo — Brasea"
      className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota rounded-md"
    >
      <Image
        src="/lp/Logo-footer.svg"
        alt="Brasea"
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
      <span className="font-bold text-[17px] leading-none text-brasea-terracota font-sans">
        Brasea
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer
      id="s-footer"
      data-section="s-footer"
      className="w-full bg-[#191512] border-t border-brasea-cream/8 py-10 lg:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        {/* Logo */}
        <BraseaLogoSmall />

        {/* Tagline */}
        <p className="text-brasea-muted text-sm text-center">
          Aprendizado culinário profissional com IA
        </p>

        {/* Links legais */}
        <nav aria-label="Links legais">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-brasea-muted text-sm hover:text-brasea-cream transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-[#6d6861] text-[11px] text-center">
          © 2026 Brasea. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
