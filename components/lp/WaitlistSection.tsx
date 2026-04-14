import { WaitlistForm } from "@/components/lp/WaitlistForm";

const benefits = [
  "Acesso completo a todas as aulas",
  "Assistente de IA 24h",
  "Trilhas por estação e nível",
  "Preço barato e que cabe no seu bolso",
] as const;

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        aria-hidden="true"
        className="shrink-0 w-[18px] h-[18px] rounded-[9px] bg-[#54a075] border border-[#54a075]/30 flex items-center justify-center"
      >
        <span className="text-[#153f27] text-[9px] leading-none">✓</span>
      </div>
      <p className="text-brasea-cream/85 text-sm leading-[1.4]">{text}</p>
    </div>
  );
}

/**
 * WaitlistSection — s-waitlist
 * Âncora principal da landing page: apresenta a proposta fundador e captura o lead.
 * Desktop: 2 colunas (card fundador | formulário). Mobile: coluna única.
 */
export function WaitlistSection() {
  return (
    <section
      id="s-waitlist"
      data-section="s-waitlist"
      className="w-full border-t border-white/8 px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      style={{
        background: "linear-gradient(to bottom, #3C322A 0%, #1F1711 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        {/* ── Cabeçalho ── */}
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="font-display font-semibold text-[clamp(26px,4.5vw,40px)] leading-[1.2] text-brasea-cream max-w-[820px]">
            Entre na lista de espera e garanta o preço fundador
          </h2>
          <p className="text-brasea-cream/70 text-base leading-[1.4] max-w-[600px]">
            Os primeiros inscritos terão acesso antecipado com preço especial de
            R$29,90/mês baratinho e que cabe no seu bolso.
          </p>
        </div>

        {/* ── Duas colunas ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center">
          {/* ── Card Fundador (esquerda) ── */}
          <div
            className="w-full lg:w-[407px] shrink-0 rounded-xl border border-[#a75d32]/50 p-6 flex flex-col gap-5"
            style={{
              background:
                "linear-gradient(140deg, #15120f 2%, #37221a 44%, #59311b 99%)",
            }}
          >
            {/* Badge */}
            <div
              className="inline-flex self-start items-center px-3 py-[5px] rounded-full border border-[rgba(224,180,99,0.3)] text-[11px] font-semibold tracking-[0.06em] uppercase text-[#efd8ad]"
              style={{
                background:
                  "linear-gradient(166deg, rgba(197,109,59,0.2) 0%, rgba(224,180,99,0.2) 100%)",
              }}
            >
              ⭐ Fundador
            </div>

            {/* Preço */}
            <div className="flex flex-col gap-2">
              <div className="flex items-end gap-0.5">
                <span className="font-display font-bold text-[18px] text-brasea-cream/85 leading-none self-start mt-2">
                  R$
                </span>
                <span className="font-display font-extrabold text-[52px] text-brasea-cream/90 leading-none">
                  29,90
                </span>
                <span className="text-[13px] text-brasea-cream/55 leading-none mb-1.5">
                  /mês
                </span>
              </div>
              <p className="text-[13px] text-brasea-cream/45 line-through">
                R$39,90/mês
              </p>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <CheckItem key={benefit} text={benefit} />
              ))}
            </div>

            {/* Garantia */}
            <p className="text-brasea-cream/50 text-xs text-center leading-[1.4] mt-1">
              7 dias de garantia · cancele sem custo
            </p>
          </div>

          {/* ── Card Formulário (direita) ── */}
          <div className="w-full lg:flex-1 bg-[#423f3d] border border-white/8 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display font-semibold text-2xl text-brasea-cream mb-6">
              Garanta seu lugar
            </h3>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
