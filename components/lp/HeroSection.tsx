import Image from "next/image";
import { Flame } from "lucide-react";

/**
 * s-hero — Hero Principal da Landing Page do Brasea.
 * Layout: 2 colunas em desktop (texto esquerda / mockup direita), 1 coluna em mobile.
 * Inclui elementos flutuantes do app (chat IA e card de aula) como destaques visuais.
 */
export function HeroSection() {
  return (
    <section
      id="s-hero"
      data-section="s-hero"
      className="relative w-full bg-brasea-dark min-h-screen flex items-center pt-[72px] pb-[72px] overflow-x-clip lg:overflow-visible"
    >
      {/* Gradiente decorativo radial — glow terracota no fundo */}
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[8%] w-[600px] h-[600px] lg:w-[826px] lg:h-[826px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(197,109,59,0.18) 0%, rgba(148,73,42,0.08) 50%, transparent 70%)",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 lg:min-h-[calc(100vh-72px)] flex items-center">
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:gap-[45px] xl:gap-[80px]">
          {/* ── Coluna esquerda — Texto ── */}
          <div className="flex flex-col gap-6 w-full lg:w-[55%] xl:w-[60%]">
            {/* Eyebrow */}
            <p className="text-brasea-terracota text-[11px] font-semibold uppercase tracking-[1.1px]">
              Aprendizado Culinário Profissional
            </p>

            {/* H1 */}
            <h1
              aria-label="Evolua na cozinha profissional com aulas técnicas e IA 24h"
              className="font-display text-brasea-cream font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.2]"
            >
              Evolua na cozinha profissional com aulas técnicas{" "}
              <span className="whitespace-nowrap">e IA 24h</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-[#f1dcd0] text-base lg:text-[16px] leading-[1.6] max-w-[548px]">
              Aulas gravadas por um chef com +20 anos de experiência +
              assistente de inteligência artificial para tirar suas dúvidas
              técnicas a qualquer hora. Tudo por menos que um jantar.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col gap-5 mt-2">
              <a
                href="#s-waitlist"
                aria-label="Garantir meu lugar na lista de espera do Brasea"
                className="inline-flex items-center justify-center w-full max-w-[390px] sm:w-auto bg-brasea-terracota hover:bg-brasea-terra-mid text-brasea-surface font-display font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-[0px_4px_24px_0px_rgba(148,73,42,0.35)] min-h-[44px] focus-visible:ring-2 focus-visible:ring-brasea-terracota focus-visible:ring-offset-2 focus-visible:ring-offset-brasea-dark"
              >
                Garantir meu lugar na lista
              </a>

              {/* Social proof */}
              <p className="flex items-center gap-1.5 text-[13px] text-brasea-cream/80 font-medium">
                <Flame
                  aria-hidden="true"
                  className="w-4 h-4 text-brasea-terracota shrink-0"
                />
                Preço fundador{" "}
                <span className="text-brasea-terracota font-bold">
                  R$29,90/mês
                </span>{" "}
                baratinho e que cabe no seu bolso
              </p>
            </div>
          </div>

          {/* ── Coluna direita — Mockup do App ── */}
          <div className="relative w-full min-w-0 lg:flex-1 mt-14 lg:mt-0 flex justify-center lg:justify-end">
            {/* Wrapper do mockup com tamanho fixo para posicionamento dos cards flutuantes */}
            <div className="relative w-[280px] sm:w-[320px] lg:w-[365px]">
              {/* Mockup principal do phone — animação float */}
              <div className="animate-float w-full h-[560px] sm:h-[620px] lg:h-[748px] relative">
                <Image
                  src="/lp/img-app-home.webp"
                  alt="Tela inicial do app Brasea no mockup do celular"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 365px"
                  className="object-contain object-top"
                  priority
                />
              </div>

              {/* ── Barra “Pergunte ao Chef” — asset + overlap na borda esquerda do mockup (lg+) ── */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute left-1/2 top-[6px] z-10 w-[min(311px,calc(100%+40px))] max-w-[311px] h-[52px] -translate-x-[82%] pointer-events-none"
              >
                <Image
                  src="/lp/Input%20Area.webp"
                  alt=""
                  fill
                  sizes="311px"
                  className="object-contain object-left"
                />
              </div>

              {/* ── Floating card — Aula (visível em lg+) ── */}
              <div
                aria-hidden="true"
                className="hidden lg:flex absolute bottom-[40px] -left-[60px] bg-[#1e1b19] rounded-[10px] shadow-[-3px_3px_15px_0px_rgba(0,0,0,0.35)] overflow-hidden w-[145px] flex-col z-10"
              >
                {/* Thumbnail da aula */}
                <div className="relative w-full h-[71px] shrink-0">
                  <Image
                    src="/lp/hero-card-demiglace.webp"
                    alt=""
                    fill
                    sizes="145px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-[7px] right-[7px] bg-[rgba(21,19,17,0.8)] backdrop-blur-sm px-[5px] py-[2px] rounded-full">
                    <span className="text-[#c3c9b4] text-[4.5px] font-semibold uppercase tracking-[0.2px]">
                      INTERMEDIÁRIO
                    </span>
                  </div>
                </div>
                {/* Info da aula */}
                <div className="p-[9px] flex flex-col gap-[3px]">
                  <p className="text-[#e8e1de] font-bold text-[8px] leading-[1.55]">
                    Redução de Demi-Glace
                  </p>
                  <p className="text-[#dbc1b6] text-[6px] leading-[1.6]">
                    O segredo dos grandes molhos. Aprenda o ponto de extração
                    máximo de sabor e brilho.
                  </p>
                  <div className="flex items-center gap-[4px] pt-[4px]">
                    <span className="text-[#ffb690] text-[5px] font-semibold uppercase tracking-[0.5px]">
                      VER AULA
                    </span>
                    <svg width="12" height="8" viewBox="0 0 13 9" fill="none">
                      <path
                        d="M1 4.5h10M7.5 1l4 3.5-4 3.5"
                        stroke="#ffb690"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── Floating card — Chat IA Sous-Chef (visível em lg+) ── */}
              <div
                aria-hidden="true"
                className="hidden lg:flex absolute bottom-0 -right-[10px] bg-[#2b2e25] rounded-[9px] shadow-[-3px_3px_15px_0px_rgba(0,0,0,0.35)] p-[14px] w-[203px] flex-col gap-[12px] overflow-hidden z-10"
              >
                {/* Header do chat */}
                <div className="flex items-center gap-[7px] shrink-0">
                  <div className="bg-[rgba(255,182,144,0.2)] rounded-full flex items-center justify-center w-[19px] h-[19px] shrink-0">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14.2a7.2 7.2 0 01-6-3.22c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.2 7.2 0 01-6 3.22z"
                        fill="#ffb690"
                      />
                    </svg>
                  </div>
                  <span className="text-[#e8e1de] font-bold text-[8px]">
                    Sous-Chef AI
                  </span>
                </div>

                {/* Mensagens do chat */}
                <div className="relative h-[84px] shrink-0">
                  {/* Pergunta do usuário */}
                  <div className="absolute right-0 top-[7px] bg-[rgba(255,182,144,0.1)] border border-[rgba(255,182,144,0.2)] rounded-tl-[5px] rounded-bl-[5px] rounded-br-[5px] px-[4px] py-[7px] w-[140px]">
                    <p className="text-[#dbc1b6] text-[7px] leading-[1.35]">
                      Me explique o que é mise en place
                    </p>
                  </div>
                  {/* Resposta da IA */}
                  <div className="absolute left-0 top-[43px] bg-[#1e1b19] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] p-[7px] w-[165px]">
                    <p className="text-[#ffb690] text-[7px] leading-[1.35]">
                      O mise en place é a preparação e organização dos
                      ingredientes e utensílios antes do serviço.
                    </p>
                  </div>
                </div>

                {/* Glow decorativo */}
                <div className="absolute bottom-[-23px] right-[-23px] w-[93px] h-[93px] rounded-full bg-[rgba(255,182,144,0.1)] blur-[17px] pointer-events-none" />
              </div>

              {/* Decoração — à direita do mockup, sobreposta à borda (lg+); menor em lg para não cortar em laptop estreito */}
              <div
                aria-hidden="true"
                className="hidden"
              >
                <Image
                  src="/lp/Decorative%20Element.webp"
                  alt=""
                  fill
                  className="object-contain object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
