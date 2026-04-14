import Image from "next/image";

const credentials = [
  { emoji: "🔪", label: "Chef Executivo" },
  { emoji: "🎓", label: "Instituto Gourmet" },
  { emoji: "📍", label: "São Paulo" },
];

/**
 * s-chef — Quem vai te ensinar?
 * Desktop: 2 colunas — foto esquerda | bio + credenciais direita.
 * Mobile: foto centralizada acima, texto abaixo.
 * Design ref: frame 71:904 · imgs-hugo 71:909 · chef-hugo1 71:910 · chef-hugo2 71:911
 */
export function ChefSection() {
  return (
    <section
      id="s-chef"
      data-section="s-chef"
      className="relative w-full overflow-hidden py-20 lg:py-28 bg-[rgba(30,29,26,1)] text-[rgba(30,29,26,1)]"
    >
      {/* Glow decorativo — radial esverdeado/oliva à esquerda */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[100px] top-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(84,88,74,0.25) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display font-semibold text-3xl lg:text-[40px] leading-[1.2] text-brasea-cream">
            Quem vai te ensinar?
          </h2>
        </div>

        {/* Layout 2 colunas */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[35px] items-center lg:items-start lg:justify-between">
          {/* ── Coluna esquerda — Duas fotos sobrepostas (Figma 71:909) ──
              lg:w-auto colapsa a 0: filhos absolute não definem largura — precisa largura fixa em desktop. */}
          <div className="relative shrink-0 w-full max-w-[617px] lg:w-[min(617px,100%)] lg:max-w-[617px] lg:shrink-0">
            {/* Grid 617×490: retrato top-right · ação bottom-left */}
            <div className="relative w-full aspect-617/490">
              {/* Retrato — atrás, canto superior direito */}
              <div className="absolute z-1 top-0 right-0 w-[58.506%] h-[61.429%] rounded-xl overflow-hidden border border-(--Green-green-10) shadow-xl">
                <Image
                  src="/lp/chef-hugo-portrait.jpg"
                  alt="Chef Hugo Ferreira em uniforme de chef profissional, braços cruzados"
                  fill
                  sizes="(max-width: 1024px) 90vw, 361px"
                  className="object-cover object-top pointer-events-none rounded-xl"
                />
              </div>

              {/* Ação na cozinha — na frente, canto inferior esquerdo */}
              <div className="absolute z-2 left-0 bottom-0 w-[58.506%] h-[61.429%] rounded-xl overflow-hidden border border-(--Green-green-10) shadow-xl">
                <Image
                  src="/lp/chef-hugo-action.jpg"
                  alt="Chef Hugo Ferreira em ação na cozinha, finalizando pratos"
                  fill
                  sizes="(max-width: 1024px) 90vw, 361px"
                  className="object-cover object-[center_35%] pointer-events-none rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* ── Coluna direita — Bio ── */}
          <div className="flex flex-col gap-8 w-full min-w-0 lg:max-w-[623px] lg:flex-1">
            {/* Nome e cargo */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-semibold text-[32px] leading-[1.2] text-brasea-cream">
                Chef Hugo Ferreira
              </h3>
              <p className="font-medium text-lg leading-[1.4] text-brasea-stone">
                Chefe de Cozinha · +20 anos de experiência
              </p>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-4 text-brasea-stone text-base leading-[1.4]">
              <p>
                Comecei na cozinha aos 11 anos e nunca mais saí. Em mais de duas
                décadas de carreira, passei por restaurantes, eventos, culinária
                japonesa e operações de grande escala — de subchef a chefe de
                cozinha executivo.
              </p>
              <p>
                Formado pelo Instituto Gourmet em Chef de Cozinha Internacional
                e Gestão de Serviços de Alimentação, hoje comando cozinhas
                profissionais e atuo como chef pessoal.
              </p>
              <p>
                No Brasea, vou ensinar as técnicas que aprendi na prática do
                serviço — do jeito que a cozinha real funciona, sem enrolação.
              </p>
            </div>

            {/* Badges de credenciais */}
            <div className="flex flex-wrap gap-2">
              {credentials.map(({ emoji, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-[10px] py-[5px] rounded-full border border-brasea-cream/15 bg-white/6 text-[11px] leading-normal text-brasea-cream whitespace-nowrap"
                >
                  <span aria-hidden="true">{emoji}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
