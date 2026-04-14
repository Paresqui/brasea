"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Lock } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Como funciona", href: "#s-features" },
  { label: "Para quem", href: "#s-icp" },
  { label: "FAQ", href: "#s-faq" },
];

/** Logo oficial do Brasea via next/image */
function BraseaLogo() {
  return (
    <Image
      src="/lp/brasea-logo.svg"
      alt="Brasea"
      width={92}
      height={36}
      priority
    />
  );
}

/** Skip link para acessibilidade */
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-brasea-terracota focus:text-brasea-cream focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:text-sm focus:outline-none"
    >
      Ir para o conteúdo principal
    </a>
  );
}

/** Navbar principal da Landing Page do Brasea */
export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <SkipLink />

      {/* ── Header ── */}
      <header
        id="s-nav"
        data-section="s-nav"
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300",
          isScrolled
            ? "bg-brasea-dark/95 backdrop-blur-sm shadow-md border-b border-brasea-cream/10"
            : "bg-brasea-dark/90 backdrop-blur-sm",
        ].join(" ")}
      >
        <nav
          className="max-w-7xl mx-auto px-4 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <a
            href="#s-hero"
            className="outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota focus-visible:ring-offset-2 focus-visible:ring-offset-brasea-dark rounded-md"
            aria-label="Brasea — ir para o início da página"
          >
            <BraseaLogo />
          </a>

          {/* Links de navegação — desktop lg+ */}
          <ul
            className="hidden lg:flex items-center gap-8"
            role="list"
            aria-label="Links de navegação"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={[
                    "text-brasea-cream/75 text-sm font-medium",
                    "hover:text-brasea-cream hover:underline decoration-brasea-terracota underline-offset-4",
                    "transition-colors duration-200",
                    "outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota",
                    "focus-visible:ring-offset-2 focus-visible:ring-offset-brasea-dark rounded-sm",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Ações à direita: CTA + Hamburguer */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Botão CTA */}
            <a
              href="#s-waitlist"
              className={[
                "bg-brasea-terracota text-brasea-cream font-semibold text-sm",
                "px-4 sm:px-5 py-2.5 rounded-xl border-0",
                "hover:bg-brasea-terra-mid transition-colors duration-200",
                "min-h-[44px] flex items-center",
                "outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-brasea-dark",
              ].join(" ")}
              aria-label="Entrar na lista de espera do Brasea"
            >
              <span className="hidden sm:inline">Entrar na lista</span>
              <span className="sm:hidden">Lista</span>
            </a>

            {/* Botão hamburguer — visível somente em telas menores que lg */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={[
                "lg:hidden text-brasea-cream",
                "p-2 rounded-lg hover:bg-brasea-cream/10 transition-colors duration-200",
                "min-h-[44px] min-w-[44px] flex items-center justify-center",
                "outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-brasea-dark",
              ].join(" ")}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              {isMobileMenuOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Overlay do Drawer mobile ── */}
      <div
        className={[
          "lg:hidden fixed inset-0 bg-black/50 z-40",
          "transition-opacity duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Drawer lateral mobile ── */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!isMobileMenuOpen}
        className={[
          "lg:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw]",
          "bg-brasea-dark border-l border-brasea-cream/10 z-50",
          "transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Cabeçalho do Drawer */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-brasea-cream/10 h-16">
          <a
            href="#s-hero"
            onClick={closeMenu}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className="outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota rounded-md"
            aria-label="Brasea — ir para o início da página"
          >
            <BraseaLogo />
          </a>
          <button
            type="button"
            onClick={closeMenu}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className={[
              "text-brasea-cream p-2 rounded-lg",
              "hover:bg-brasea-cream/10 transition-colors",
              "min-h-[44px] min-w-[44px] flex items-center justify-center",
              "outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota",
            ].join(" ")}
            aria-label="Fechar menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Links do Drawer */}
        <nav className="p-5 flex flex-col gap-1" aria-label="Links de navegação mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className={[
                "text-brasea-cream/80 font-medium text-base",
                "py-3 px-4 rounded-xl",
                "hover:bg-brasea-cream/5 hover:text-brasea-cream",
                "transition-colors duration-200",
                "outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota",
                "min-h-[44px] flex items-center",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}

          {/* Separador */}
          <div className="my-3 border-t border-brasea-cream/10" />

          {/* CTA no Drawer */}
          <a
            href="#s-waitlist"
            onClick={closeMenu}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className={[
              "bg-brasea-terracota text-brasea-cream font-semibold text-base",
              "px-6 py-4 rounded-xl w-full",
              "hover:bg-brasea-terra-mid transition-colors duration-200",
              "flex items-center justify-center min-h-[44px]",
              "outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota",
            ].join(" ")}
            aria-label="Entrar na lista de espera do Brasea"
          >
            Entrar na lista de espera
          </a>

          {/* Social proof no Drawer */}
          <div className="mt-4 flex items-center gap-2 px-2">
            <Lock
              size={14}
              className="text-brasea-muted shrink-0"
              aria-hidden="true"
            />
            <p className="text-brasea-muted text-xs leading-relaxed">
              Preço Fundador: R$29,90 · Cancele sem custo em 7 dias
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}
