import Image from "next/image";

/**
 * s-entrarnalista — CTA Banner central.
 * Layout: coluna única centralizada — max-w-[600px].
 * Design ref: frame 71:935
 */
export function EntrarnalistaSection() {
  return (
    <section
      id="s-entrarnalista"
      data-section="s-entrarnalista"
      className="w-full bg-brasea-dark border-t border-[rgba(254,253,251,0.08)] py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[600px] mx-auto flex flex-col items-center gap-5 text-center">
        {/* Logo */}
        <Image
          src="/lp/brasea-logo.svg"
          alt="Brasea"
          width={92}
          height={36}
          aria-hidden="true"
        />

        {/* Título + Subtítulo */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="font-display font-semibold text-3xl lg:text-[40px] leading-[1.2] text-brasea-cream">
            Pronto pra evoluir na cozinha?
          </h2>
          <p className="text-base leading-[1.4] text-brasea-cream/75 max-w-[680px]">
            Entre na lista e seja o primeiro a acessar o Brasea com preço
            especial.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#s-waitlist"
          className="inline-flex items-center justify-center h-11 px-6 bg-brasea-terracota text-white font-display font-semibold text-sm rounded-lg shadow-[0px_4px_24px_0px_rgba(197,109,59,0.25)] hover:brightness-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota focus-visible:ring-offset-2 focus-visible:ring-offset-brasea-dark mt-4"
          aria-label="Garantir meu lugar na lista de espera do Brasea"
        >
          Garantir meu lugar na lista
        </a>

        {/* Social proof — urgência */}
        <p className="text-sm font-semibold leading-[1.4] text-[#8a847b]">
          🔥 Vagas limitadas para preço fundador
        </p>
      </div>
    </section>
  );
}
