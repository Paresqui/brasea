"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  pergunta: string;
  resposta: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="flex flex-col divide-y divide-brasea-muted/20"
      role="list"
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div key={index} role="listitem">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota focus-visible:ring-offset-2 focus-visible:ring-offset-brasea-surface min-h-[44px]"
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className="font-display font-semibold text-base lg:text-lg leading-snug text-brasea-text">
                {item.pergunta}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`w-5 h-5 shrink-0 text-brasea-terracota transition-transform duration-200 ease-in-out ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Painel de resposta com animação max-height */}
            <div
              id={answerId}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                isOpen ? "max-h-[400px] pb-5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-brasea-muted text-base leading-relaxed">
                {item.resposta}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
