import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

const leftFeatures: Feature[] = [
  {
    title: "Aulas técnicas objetivas",
    description:
      "Vídeos curtos gravados por um chef profissional. Direto ao ponto, como na cozinha.",
  },
  {
    title: "Assistente IA 24h",
    description:
      "Tire dúvidas técnicas a qualquer hora. Como ter um chef ao lado sempre.",
  },
  {
    title: "Funciona no navegador",
    description:
      "Acesse pelo celular sem instalar nada. Abre como um app direto do navegador.",
  },
];

const rightFeatures: Feature[] = [
  {
    title: "Trilhas por estação",
    description:
      "Garde manger, saucier, pâtisserie... Evolua na estação que você precisa.",
  },
  {
    title: "Progresso visível",
    description:
      "Saiba exatamente onde você está e o que falta para dominar cada técnica.",
  },
  {
    title: "Aprenda no seu ritmo",
    description:
      "Assista quando puder: antes do serviço, no intervalo, em casa.",
  },
];

/**
 * s-features — Funcionalidades do Brasea.
 * Desktop: mockup central + 3 blocos à esquerda (texto à direita) + 3 à direita (texto à esquerda).
 * Mobile: mockup reduzido acima + 6 cards em grid-cols-2.
 */
export function FeaturesSection() {
  return (
    <section
      id="s-features"
      data-section="s-features"
      className="relative w-full bg-brasea-surface overflow-x-clip py-20 lg:py-28"
    >
      {/* Glow decorativo — esquerda */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-280px] top-[40px] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(229,192,171,0.45) 0%, transparent 62%)",
        }}
      />
      {/* Glow decorativo — direita */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[180px] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(197,109,59,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-display font-semibold text-3xl lg:text-[40px] leading-[1.2] text-brasea-dark mb-3">
            Tudo que você precisa para evoluir na cozinha
          </h2>
          <p className="text-brasea-muted text-base lg:text-[16px] font-medium leading-[1.4]">
            Uma plataforma completa no seu celular, sem precisar instalar nada.
          </p>
        </div>

        {/* Mockup — visível apenas em mobile (acima do grid de cards) */}
        <div className="flex lg:hidden justify-center mb-10">
          <div className="relative w-[200px] h-[400px]">
            <Image
              src="/lp/img-app-biblioteca.webp"
              alt="Tela da Biblioteca de Técnicas do app Brasea no celular"
              fill
              className="object-contain drop-shadow-xl"
              sizes="200px"
            />
          </div>
        </div>

        {/* Desktop: mockup + círculos no centro geométrico da área de conteúdo; features nas laterais */}
        <div className="relative hidden lg:block">
          {/* Camada central: círculo + celular compartilham o mesmo centro (horizontal e vertical do bloco) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex items-center justify-center">
              {/* Anéis decorativos — maior que o phone, mesmo centro */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 max-h-[567px] max-w-[567px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "min(467px, 90vw)",
                  height: "min(467px, 90vw)",
                }}
              >
                <Image
                  src="/lp/circulo-decorativo.webp"
                  alt=""
                  fill
                  className="object-contain opacity-90"
                  sizes="467px"
                />
              </div>
              {/* Mockup do app */}
              <div className="relative z-10 h-[460px] w-[220px] xl:h-[500px] xl:w-[250px]">
                <Image
                  src="/lp/img-app-biblioteca.webp"
                  alt="Tela da Biblioteca de Técnicas do app Brasea no celular"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1280px) 220px, 250px"
                />
              </div>
            </div>
          </div>

          {/* Grid: laterais com conteúdo; coluna do meio só reserva espaço para não sobrepor o mockup */}
          <div className="relative z-10 grid grid-cols-[1fr_minmax(240px,280px)_1fr] xl:grid-cols-[1fr_minmax(260px,300px)_1fr] gap-x-6 xl:gap-x-10">
            <div className="flex flex-col items-end justify-center gap-10 xl:gap-12 pr-[62px]">
              {leftFeatures.map((feature) => (
                <FeatureItemLeft key={feature.title} feature={feature} />
              ))}
            </div>
            {/* Espaçador alinhado ao eixo central — mantém simetria com o mockup absoluto */}
            <div
              aria-hidden="true"
              className="min-h-[480px] xl:min-h-[520px]"
            />
            <div className="flex flex-col justify-center gap-10 xl:gap-12 pl-[62px]">
              {rightFeatures.map((feature) => (
                <FeatureItemRight key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: grid-cols-2 de cards */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:hidden">
          {leftFeatures.map((feature) => (
            <FeatureItemLeft key={feature.title} feature={feature} />
          ))}
          {rightFeatures.map((feature) => (
            <FeatureItemRight key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Sub-componentes internos ── */

interface FeatureItemProps {
  feature: Feature;
}

/** Feature da coluna esquerda: texto alinhado à direita no desktop. */
function FeatureItemLeft({
  feature: { title, description },
}: FeatureItemProps) {
  return (
    <article className="flex flex-col gap-1.5 lg:items-end lg:text-right">
      <h3 className="font-display font-semibold text-[15px] lg:text-[19px] leading-[1.45] text-brasea-dark">
        {title}
      </h3>
      <p className="text-brasea-muted text-[13px] lg:text-[15px] leading-[1.55] lg:max-w-[350px]">
        {description}
      </p>
    </article>
  );
}

/** Feature da coluna direita: texto alinhado à esquerda no desktop. */
function FeatureItemRight({
  feature: { title, description },
}: FeatureItemProps) {
  return (
    <article className="flex flex-col gap-1.5 lg:text-left">
      <h3 className="font-display font-semibold text-[15px] lg:text-[19px] leading-[1.45] text-brasea-dark">
        {title}
      </h3>
      <p className="text-brasea-muted text-[13px] lg:text-[15px] leading-[1.55] lg:max-w-[350px]">
        {description}
      </p>
    </article>
  );
}
