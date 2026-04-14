import { FaqAccordion } from "@/components/lp/FaqAccordion";

const faqs = [
  {
    pergunta: "O que é o Brasea?",
    resposta:
      "Uma plataforma para aprender culinária profissional que combina aulas técnicas por vídeo com um assistente de IA 24h para tirar dúvidas.",
  },
  {
    pergunta: "Quando o Brasea será lançado?",
    resposta:
      "Estamos em fase de desenvolvimento. Quem entrar na lista de espera terá acesso antecipado e o preço fundador.",
  },
  {
    pergunta: "O que é o preço fundador?",
    resposta:
      "Um preço especial de R$29,90/mês exclusivo para quem entrar na lista agora. Esse preço fica travado enquanto a assinatura estiver ativa.",
  },
  {
    pergunta: "Precisa instalar algum app?",
    resposta:
      "Não. O Brasea funciona no navegador do seu celular como um app, sem precisar instalar nas lojas.",
  },
  {
    pergunta: "Posso cancelar a qualquer momento?",
    resposta:
      "Sim. Além disso, você tem 7 dias de garantia total — cancele sem custo algum nesse prazo.",
  },
];

/**
 * s-faq — Perguntas Frequentes.
 * Servidor: contém estrutura HTML e JSON-LD para SEO.
 * Cliente: FaqAccordion lida com interatividade (useState).
 * Layout: coluna única centralizada — max-w-3xl.
 */
export function FaqSection() {
  return (
    <section
      id="s-faq"
      data-section="s-faq"
      className="w-full bg-brasea-surface px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
    >
      {/* JSON-LD — FAQPage schema para rich results do Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.pergunta,
              acceptedAnswer: { "@type": "Answer", text: faq.resposta },
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="font-display font-semibold text-3xl lg:text-[40px] leading-[1.2] text-brasea-text">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion interativo */}
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
