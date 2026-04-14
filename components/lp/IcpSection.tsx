import Image from "next/image";

interface IcpCard {
  emoji: string;
  title: string;
  titleSubtitle: string;
  description: string;
  benefitTitle: string;
  benefitDescription: string;
}

const icpCards: IcpCard[] = [
  {
    emoji: "🔪",
    title: "Você trabalha na cozinha e quer crescer",
    titleSubtitle: "Você aprende olhando, mas sente que falta base técnica",
    description:
      "Corre atrás todo dia no serviço, mas depende de alguém ter paciência de ensinar.\n\nErra, repete, e sente que podia estar mais à frente se tivesse onde estudar de verdade.",
    benefitTitle: "Evolua tecnicamente sem depender de ninguém",
    benefitDescription:
      "Aulas técnicas no seu ritmo + IA para tirar dúvidas quando precisar.",
  },
  {
    emoji: "🎓",
    title: "Você estuda gastronomia e precisa de prática",
    titleSubtitle:
      "A faculdade ensina teoria, mas na hora do serviço você trava",
    description:
      "Sai do laboratório com dúvidas e não tem a quem perguntar.\n\nA prova está chegando, o estágio tá ali, e o conteúdo do curso não te preparou de verdade.",
    benefitTitle: "Suporte prático 24h; como ter um professor",
    benefitDescription:
      "Assistente de IA tira suas dúvidas técnicas a qualquer hora, inclusive de madrugada antes da prova.",
  },
  {
    emoji: "⭐",
    title: "Você já manda bem, mas quer dominar mais",
    titleSubtitle:
      "O conteúdo que acha online é básico demais para o seu nível",
    description:
      "Você já domina sua estação, mas quando precisa expandir, não encontra material técnico que acompanhe seu nível.\n\nTudo é genérico.",
    benefitTitle: "Trilhas avançadas organizadas por estação",
    benefitDescription:
      "Conteúdo de nível profissional: garde manger, saucier, pâtisserie. Feito pra quem sabe cozinhar.",
  },
];

/**
 * s-icp — Para quem é o Brasea.
 * Desktop: grid 3 colunas de cards de perfil (ICP).
 * Mobile: cards em coluna única.
 */
export function IcpSection() {
  return (
    <section
      id="s-icp"
      data-section="s-icp"
      className="relative w-full bg-brasea-dark overflow-x-clip py-20 lg:py-28"
    >
      {/* Glow decorativo central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(197,109,59,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <h2 className="font-display font-semibold text-3xl lg:text-[40px] leading-[1.2] text-brasea-cream mb-3">
            Para quem é o Brasea?
          </h2>
          <p className="text-brasea-cream/80 text-base font-medium leading-[1.4]">
            Se você se identificou com alguma dessas situações, o Brasea é para
            você
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {icpCards.map((card) => (
            <IcpProfileCard key={card.emoji} card={card} />
          ))}
        </div>

        {/* Ilustração do app abaixo dos cards */}
        <div className="flex justify-center mt-14 lg:mt-20">
          <div className="relative w-full max-w-[640px] aspect-640/636">
            <Image
              src="/lp/icp-ilustra.webp"
              alt="Mockup do app Brasea mostrando a tela de aprendizado no celular"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 568px) 90vw, 640px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-componente interno ── */

interface IcpProfileCardProps {
  card: IcpCard;
}

function IcpProfileCard({ card }: IcpProfileCardProps) {
  return (
    <article className="group flex flex-col gap-2.5 bg-brasea-card border border-white/8 rounded-xl px-3 py-6 hover:border-brasea-terracota hover:shadow-lg transition-all duration-200">
      {/* Ícone */}
      <div
        className="flex items-center justify-center rounded-[28px] w-14 h-14 shrink-0"
        style={{ background: "rgba(197,109,59,0.15)" }}
        aria-hidden="true"
      >
        <span className="text-[26px] leading-none">{card.emoji}</span>
      </div>

      {/* Conteúdo do card */}
      <div className="flex flex-col gap-4 flex-1">
        {/* Bloco de título */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-display font-medium text-[23px] leading-[1.52] text-brasea-cream">
              {card.title}
            </h3>
            <div className="h-px w-full bg-white/8" />
          </div>
          <p className="text-brasea-cream/90 text-base leading-[1.4]">
            {card.titleSubtitle}
          </p>
          <div className="h-px w-full bg-white/8" />
        </div>

        {/* Descrição expandida */}
        <p className="text-sm leading-[1.55] text-brasea-stone whitespace-pre-line">
          {card.description}
        </p>

        {/* Item de benefício */}
        <div className="flex gap-2 items-start mt-auto pt-2">
          <span className="text-base leading-6 shrink-0" aria-hidden="true">
            ✅
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-brasea-sage leading-normal">
              {card.benefitTitle}
            </p>
            <p className="text-[13px] text-brasea-stone leading-[1.6]">
              {card.benefitDescription}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
