# Brasea — PRD Landing Page v1.0
**Especificacao de Construcao por Secao**
Stack: Next.js 14 · Tailwind CSS · shadcn/ui · Figma MCP · Cursor

---

## Metadados

| Campo | Valor |
|---|---|
| Produto | Brasea — Landing Page |
| Versao | 1.0 |
| Data | Abril 2026 |
| Referencia visual | `docs/LP-Desktop.png` |
| Regras do Cursor | `.cursorrules` |

---

## 1. Visao Geral

### 1.1 Objetivo
- Converter visitantes em assinantes do **plano fundador (R$29,90/mes)**
- Comunicar o diferencial: aulas tecnicas de chef profissional + assistente IA 24h
- Qualificar o publico: profissionais de cozinha, estudantes de gastronomia, especialistas de estacao
- Capturar leads na lista de espera antes do lancamento

### 1.2 Convencao de IDs — REGRA FUNDAMENTAL

Toda `<section>` da LP **obrigatoriamente** recebe:

```html
<section id="s-[nome]" data-section="s-[nome]">
```

- `id` — ancora de navegacao (links do menu apontam para `#s-hero`, etc.)
- `data-section` — rastreamento de scroll via Intersection Observer
- Sempre **minusculas**, palavras separadas por **hifen**
- Nao inventar novos IDs — usar apenas os do mapa abaixo

### 1.3 Mapa de Secoes

| Ordem | ID | Nome | Componente | Altura aprox. (desktop) |
|---|---|---|---|---|
| 01 | `s-nav` | Navegacao / Header | `NavBar.tsx` | 72px fixo |
| 02 | `s-hero` | Hero Principal | `HeroSection.tsx` | 100vh |
| 03 | `s-features` | Funcionalidades | `FeaturesSection.tsx` | ~680px |
| 04 | `s-icp` | Para quem e o Brasea | `IcpSection.tsx` | ~600px |
| 05 | `s-app-preview` | Preview do App / PWA | `AppPreviewSection.tsx` | ~500px |
| 06 | `s-chef` | Quem vai te ensinar | `ChefSection.tsx` | ~480px |
| 07 | `s-faq` | Perguntas Frequentes | `FaqSection.tsx` | ~560px |
| 08 | `s-cta-mid` | CTA Intermediario | `CtaMidSection.tsx` | ~320px |
| 09 | `s-waitlist` | Lista de Espera / Formulario | `WaitlistSection.tsx` | ~640px |
| 10 | `s-footer` | Rodape | `Footer.tsx` | ~180px |

### 1.4 Tokens de Design Brasea

| Token CSS var | Hex | Tailwind class | Uso |
|---|---|---|---|
| `--color-dark` | `#292624` | `brasea-dark` | Fundo principal, headers |
| `--color-terracota` | `#94492A` | `brasea-terracota` | CTAs, botoes primarios |
| `--color-terra-mid` | `#B5693F` | `brasea-terra-mid` | Hover, bordas ativas |
| `--color-cream` | `#EEE6D9` | `brasea-cream` | Texto sobre escuro |
| `--color-olive` | `#54584A` | `brasea-olive` | Badges, elementos neutros |
| `--color-surface` | `#F5F2EE` | `brasea-surface` | Fundo secoes claras |
| `--color-text` | `#1C1B19` | `brasea-text` | Texto primario |
| `--color-muted` | `#6E6860` | `brasea-muted` | Texto secundario |

### 1.5 Breakpoints

| Nome | Min-width | Comportamento |
|---|---|---|
| base | 375px | Mobile — single column |
| sm | 640px | Tablets pequenos |
| md | 768px | Tablets — grid 2 col |
| lg | 1024px | Desktop — grid 3 col |
| xl | 1280px | Desktop full (referencia visual) |

---

## 2. Template de Componente de Secao

```tsx
// components/lp/NomeSection.tsx
export function NomeSection() {
  return (
    <section
      id="s-[nome]"
      data-section="s-[nome]"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* conteudo */}
      </div>
    </section>
  )
}
```

---

## 3. Especificacao Detalhada por Secao

---

### `s-nav` — Navegacao / Header

**Layout e aparencia**
- Posicao: `fixed top-0 left-0 right-0 z-50`
- Altura: 72px desktop / 64px mobile
- Fundo: `#292624` com `backdrop-blur-sm bg-opacity-95`
- Borda inferior: `1px solid rgba(238,230,217,0.1)` ao fazer scroll
- Max-width interno: `max-w-screen-xl mx-auto px-4 lg:px-8`

**Elementos**
| Elemento | Descricao |
|---|---|
| Logo Brasea | SVG inline ou `next/image` — esquerda — link para `#s-hero` |
| Links de ancora | `Como funciona` → `#s-features` · `Para quem` → `#s-icp` · `FAQ` → `#s-faq` — visivel apenas em `lg+` |
| Botao CTA | `Entrar na lista` — variante terracota — link para `#s-waitlist` |
| Menu hamburguer | Visivel em `md-` — abre Drawer lateral com os mesmos links |

**Comportamentos**
- Scroll > 80px: adiciona `shadow-md` e aumenta opacidade do fundo
- Link ativo / hover: `text-brasea-cream underline decoration-brasea-terracota`
- Botao CTA hover: um tom mais claro do terracota + `transition-colors duration-200`
- Drawer mobile: fecha ao clicar em qualquer link ou fora do drawer

---

### `s-hero` — Hero Principal

**Layout e aparencia**
- Fundo: `bg-brasea-dark` (com possivel textura sutil)
- Altura: `min-h-screen` desktop / `min-h-[80vh]` mobile
- Desktop: 2 colunas — 60% texto esquerda | 40% mockup direita
- Mobile: 1 coluna — texto acima, mockup centralizado abaixo
- Padding top: `pt-24` para compensar NavBar fixa de 72px

**Coluna esquerda — Texto**

| Elemento | Especificacao |
|---|---|
| Tag de contexto | `APRENDA COM QUEM E PROFISSIONAL` — `text-brasea-terracota text-xs uppercase tracking-widest` |
| H1 (titulo) | `Evolua na cozinha profissional com aulas tecnicas e IA 24h` — `text-brasea-cream font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight` |
| Subtitulo | `Aulas gravadas por um chef com +20 anos de experiencia e assistente de inteligencia artificial para tirar suas duvidas. Monitora a qualquer hora. Tudo por menos que um jantar.` — `text-brasea-muted text-lg lg:text-xl max-w-lg` |
| CTA primario | `Garantir meu lugar na lista` — `bg-brasea-terracota text-brasea-cream font-semibold px-8 py-4 rounded-xl w-full sm:w-auto` — scroll para `#s-waitlist` |
| Social proof | Icone de cadeado + `Preco Fundador: R$29,90 / Cancele sem custo em 7 dias` — `text-sm text-brasea-muted` |

**Coluna direita — Mockup do App**
- 2 screenshots sobrepostos do app Brasea (Biblioteca de Tecnicas + Chat IA)
- Animacao: `animate-float` — `translateY(0 → -8px → 0)` em loop de 3s
- Mobile: mockup centralizado, `max-h-[300px]`, abaixo do texto

**Acessibilidade**
- H1 com `aria-label` completo
- Imagem do mockup com `alt` descritivo
- CTA com `aria-label="Garantir meu lugar na lista de espera do Brasea"`

---

### `s-features` — Funcionalidades

**Layout e aparencia**
- Fundo: `bg-brasea-surface` (contraste com o hero escuro)
- Desktop: mockup central + 3 features na esquerda + 3 na direita
- Mobile: mockup reduzido acima + 6 cards em grid `grid-cols-2`
- Padding: `py-20 lg:py-28`

**Titulo da secao**

```
H2: "Tudo que voce precisa para evoluir na cozinha"
Subtitulo: "Uma plataforma completa de aprendizado. Direto ao ponto. Pronto pra instalar hoje."
Alinhamento: text-center | max-w-2xl mx-auto
```

**Mockup central**
- Imagem da tela "Biblioteca de Tecnicas" do app
- Visivel em `md+`; reduzido em mobile (acima dos cards)

**6 Feature Cards — componente `<FeatureCard>`**

| # | Icone (lucide) | Titulo | Descricao |
|---|---|---|---|
| 1 | `Play` | Aulas Tecnicas Objetivas | Videos curtos gravados por um chef profissional. Direto ao ponto, assim como na cozinha. |
| 2 | `Bot` | Assistente IA 24h | Tire duvidas tecnicas a qualquer hora. Como se um chef ao lado respondesse. |
| 3 | `Smartphone` | Funciona no Navegador | Acesse como um app sem instalar nada. Em qualquer celular ou computador. |
| 4 | `BookOpen` | Trilhas por Estacao | Garde manger, saucier, patisserie... Aprenda a estacao que voce precisa dominar. |
| 5 | `TrendingUp` | Progresso Visivel | Acompanhe exatamente onde voce esta e use a IA para dominar cada tecnica. |
| 6 | `Clock` | Aprenda no Seu Ritmo | Assista quando puder: antes do servico, no intervalo, em casa. |

Estilo do card: icone com fundo `brasea-terracota/10` + borda `brasea-terracota/20`, titulo bold, descricao em `brasea-muted`

---

### `s-icp` — Para Quem e o Brasea

**Layout e aparencia**
- Fundo: `bg-brasea-dark` (escuro — contraste com a secao anterior clara)
- Desktop: grid 3 colunas de cards
- Mobile: cards em coluna unica
- Padding: `py-20 lg:py-28`

**Titulo**
```
H2: "Para quem e o Brasea?"
Subtexto: "Se voce se identifica com alguma dessas situacoes, o Brasea e para voce"
Cor: brasea-cream | text-center
```

**3 Cards de Perfil (ICP)**

| Card | Icone | Titulo | Descricao curta | Bullets de identificacao |
|---|---|---|---|---|
| 1 | `ChefHat` | Voce trabalha na cozinha e quer crescer | Boa parte do servico, mas evolui no empirico e depende do que o chef passa | Aprende assistindo · Quer mais responsabilidade · Evolui sem orientacao estruturada |
| 2 | `GraduationCap` | Voce estuda gastronomia e precisa de pratica | A faculdade ensina teoria, voce precisa de pratica real e suporte rapido | Prova proxima · Estagio a vista · Professor nao tem tempo individual |
| 3 | `Star` | Voce ja manda bem, mas quer dominar mais | Atua com autonomia em 1-2 estacoes e quer expandir repertorio tecnico | Tecnicas por estacao · Quer avançar de cargo · Busca desafio tecnico maior |

**Estilo dos cards**
- Fundo: `bg-brasea-cream/5 border border-brasea-cream/10 rounded-2xl`
- Icone: circulo com `bg-brasea-terracota/20` + icone em `brasea-cream`
- Bullets: icone `CheckCircle` em verde suave + texto `brasea-cream`
- Hover: `border-brasea-terracota shadow-lg transition-all duration-200`

---

### `s-app-preview` — Preview do App / CTA PWA

**Layout e aparencia**
- Fundo: `bg-brasea-surface` ou imagem de bancada com overlay escuro
- Desktop: 2 colunas — imagem esquerda | texto + CTA direita
- Mobile: texto acima, imagem reduzida abaixo
- Padding: `py-20 lg:py-28`

**Conteudo**

| Elemento | Especificacao |
|---|---|
| Eyebrow | `SEM INSTALAR NADA` — terracota — uppercase — tracking-widest |
| H2 | `Acesse como um app pelo seu navegador, em qualquer celular` — bold |
| Descricao | Explicacao do PWA sem linguagem tecnica — foco no beneficio de nao precisar baixar nada |
| CTA | `Comecar agora` — botao terracota — link para `#s-waitlist` |
| Elemento secundario | Icone `Smartphone` + `Adicione a tela inicial sem baixar nada nas lojas` |
| Imagem | Screenshot do Chat IA do Brasea em smartphone |

---

### `s-chef` — Quem vai te Ensinar

**Layout e aparencia**
- Fundo: `bg-brasea-dark`
- Desktop: 2 colunas — foto esquerda | bio + credenciais direita
- Mobile: foto centralizada acima, texto abaixo
- Padding: `py-20 lg:py-28`

**Titulo**
```
H2: "Quem vai te ensinar?"
Cor: brasea-cream | text-center
```

**Conteudo**

| Elemento | Especificacao |
|---|---|
| Foto | Chef Hugo Ferreira — `rounded-2xl` — sombra sutil — `next/image` |
| Nome | `Chef Hugo Ferreira` — `text-brasea-cream text-2xl font-bold` |
| Subtitulo | `Chefe de Cozinha — +20 anos de experiencia` — `text-brasea-terracota` |
| Bio | Trajetoria, formacao e experiencia — `text-brasea-cream/80 text-base leading-relaxed` — max 4 linhas |
| Badges | Chips de credenciais: ex. `Instituto Gourmet` `Le Cordon Bleu` `Chef Executivo` — `border border-brasea-cream/30 rounded-full px-3 py-1 text-sm text-brasea-cream` |
| CTA link | `Ver aulas de amostra →` — `text-brasea-terracota hover:underline` |

---

### `s-faq` — Perguntas Frequentes

**Layout e aparencia**
- Fundo: `bg-brasea-surface`
- Layout: coluna unica centralizada — `max-w-3xl mx-auto`
- Componente: `Accordion` do shadcn/ui (Radix) com animacao de abertura
- Padding: `py-20 lg:py-28`

**Titulo**
```
H2: "Perguntas Frequentes"
Cor: brasea-dark | text-center
```

**Perguntas e Respostas**

| # | Pergunta | Resposta |
|---|---|---|
| 1 | O que e o Brasea? | Uma plataforma para aprender culinaria profissional que combina aulas tecnicas por video com um assistente de IA 24h para tirar duvidas. |
| 2 | Quando o Brasea sera lancado? | Estamos em fase de desenvolvimento. Quem entrar na lista de espera tera acesso antecipado e o preco fundador. |
| 3 | O que e o preco fundador? | Um preco especial de R$29,90/mes exclusivo para quem entrar na lista agora. Esse preco fica travado enquanto a assinatura estiver ativa. |
| 4 | Precisa instalar algum app? | Nao. O Brasea funciona no navegador do seu celular como um app, sem precisar instalar nas lojas. |
| 5 | Posso cancelar a qualquer momento? | Sim. Alem disso, voce tem 7 dias de garantia total — cancele sem custo algum nesse prazo. |

**Comportamento do Accordion**
- `type="single"` — somente um item aberto por vez
- Animacao: `max-height` com `transition ease-in-out 200ms`
- Icone: `ChevronDown` rotaciona `180deg` ao abrir

**SEO — JSON-LD obrigatorio**
```tsx
// Em FaqSection.tsx — dentro do componente
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
```

---

### `s-cta-mid` — CTA Intermediario

**Layout e aparencia**
- Fundo: `bg-brasea-dark`
- Layout: centralizado — `max-w-2xl mx-auto text-center`
- Padding: `py-16 lg:py-20`

**Conteudo**

| Elemento | Especificacao |
|---|---|
| Logo | Versao pequena do Brasea — opcional — centralizada |
| H2 | `Pronto pra evoluir na cozinha?` — `text-brasea-cream text-3xl lg:text-4xl font-bold` |
| Subtitulo | `Entre na lista e seja o primeiro a garantir seu preco especial.` — `text-brasea-muted` |
| CTA primario | `Garantir meu lugar agora` — botao terracota — `lg` — link `#s-waitlist` |
| CTA secundario | `Ver como funciona` — link cream com underline — link `#s-features` |
| Social proof | Icone de pessoas ou cadeado + texto de urgencia/escassez sutil |

---

### `s-waitlist` — Lista de Espera / Formulario

> **Ancora principal da pagina — todos os CTAs apontam para `#s-waitlist`**

**Layout e aparencia**
- Fundo: `bg-brasea-terracota` ou gradiente `from-brasea-terracota to-brasea-dark`
- Desktop: 2 colunas — proposta esquerda | formulario direita
- Mobile: coluna unica — proposta compacta + formulario
- Padding: `py-20 lg:py-28`

**Coluna esquerda — Proposta**

| Elemento | Especificacao |
|---|---|
| Badge | `FUNDADOR` — `bg-brasea-cream text-brasea-dark rounded-full px-3 py-1 text-xs font-bold` |
| H2 | `Entre na lista de espera e garanta o preco fundador` — `text-brasea-cream text-3xl font-bold` |
| Subtitulo | `Os primeiros inscritos terao acesso antecipado com preco especial de R$29,90/mes` — `text-brasea-cream/80` |
| Preco em destaque | `R$29,90` (text-5xl bold) + `/mes` (text-xl) — `text-brasea-cream` |
| Checklist | 5 itens com icone `CheckCircle` + texto cream |

**Checklist de beneficios**
- Acesso completo a todas as aulas
- Trilhas por estacao culinaria
- Assistente IA 24h sem restricao
- Preco travado para sempre
- 7 dias de garantia total

**Coluna direita — Formulario**

| Campo | Tipo | Placeholder | Validacao | Obrigatorio |
|---|---|---|---|---|
| Nome | `text` | `Seu nome` | min 2 chars | ✅ |
| Sobrenome | `text` | `Seu sobrenome` | min 2 chars | ✅ |
| Email | `email` | `seu@email.com` | formato valido | ✅ |
| WhatsApp | `tel` | `(11) 99999-9999` | mascara BR | ✅ |
| Perfil | `select` | `Qual e seu perfil?` | selecionar opcao | ✅ |

**Opcoes do select — Perfil**
- Cozinheiro profissional / Operacional
- Estudante de gastronomia
- Especialista / Chef de estacao
- Outro

**Botao de submit**
```
Texto: "Entrar na lista de espera e garantir preco fundador"
Estilo: bg-brasea-cream text-brasea-dark font-semibold w-full py-4 rounded-xl
Loading: spinner + "Enviando..." + botao desabilitado
```

**Estados do formulario**
- **Sucesso:** substitui o form por mensagem com icone `CheckCircle` + "Voce esta na lista! Confira seu email [email digitado]"
- **Erro campo:** mensagem inline vermelha abaixo do campo com problema
- **Erro servidor:** toast ou banner vermelho no topo do form

**Implementacao — Server Action**
```ts
// app/actions/waitlist.ts
'use server'
// 1. Validar campos com zod
// 2. Inserir em Supabase tabela 'waitlist':
//    { nome, sobrenome, email, whatsapp, perfil, created_at }
// 3. Enviar email de confirmacao (Resend)
// 4. Retornar { success: boolean, error?: string }
```

---

### `s-footer` — Rodape

**Layout e aparencia**
- Fundo: `bg-[#1C1B19]` (mais escuro que o dark principal)
- Padding: `py-10 lg:py-12`
- Layout desktop: `flex row` — logo | links | copyright
- Layout mobile: `flex col` centralizado

**Elementos**

| Elemento | Especificacao |
|---|---|
| Logo | Versao pequena — link para `#s-hero` (volta ao topo) |
| Links legais | `Politica de Privacidade` · `Termos de Uso` · `Contato` — `text-brasea-muted text-sm hover:text-brasea-cream` |
| Copyright | `© 2026 Brasea. Todos os direitos reservados.` — `text-brasea-muted text-sm text-center` |
| Redes sociais | Icones Instagram e TikTok — `text-brasea-cream` — `w-5 h-5` — opcional |

---

## 4. SEO e Performance

### 4.1 Metadados (layout.tsx ou page.tsx)

```ts
export const metadata: Metadata = {
  title: 'Brasea — Aprenda culinaria profissional com aulas tecnicas e IA 24h',
  description: 'Aulas gravadas por chef com +20 anos e assistente de IA para tirar duvidas culinarias a qualquer hora. Acesse pelo celular, sem instalar nada.',
  openGraph: {
    title: 'Brasea — Aprenda culinaria profissional com aulas tecnicas e IA 24h',
    description: 'Aulas gravadas por chef com +20 anos e assistente de IA...',
    images: [{ url: '/lp/og-image.png', width: 1200, height: 630 }],
    url: 'https://brasea.com.br',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: 'index, follow',
  alternates: { canonical: 'https://brasea.com.br' },
}
```

### 4.2 Core Web Vitals — Metas

| Metrica | Meta | Estrategia |
|---|---|---|
| LCP | < 2.5s | `priority` no hero H1 e imagem do mockup; `next/image` |
| INP | < 200ms | Sem scripts pesados no main thread; code splitting |
| CLS | < 0.1 | `width` e `height` em todas as imagens; skeleton loaders |
| TTFB | < 600ms | Vercel Edge Network; pagina estatica (SSG) |

### 4.3 Analytics de Scroll por Secao

```ts
// lib/useSectionTracking.ts
'use client'
import { useEffect } from 'react'

export function useSectionTracking() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section')
            // mixpanel.track('section_view', { section })
            console.log('section_view:', section)
          }
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
}
```

Chamar `useSectionTracking()` no componente raiz da pagina (`app/page.tsx`).

---

## 5. Responsividade por Secao

| Secao | Desktop lg+ | Tablet md | Mobile base |
|---|---|---|---|
| `s-nav` | Logo + links + CTA | Logo + CTA + hamburguer | Logo + CTA compacto + hamburguer |
| `s-hero` | 2 col: texto 60% / mockup 40% | 2 col comprimido | 1 col: texto + mockup abaixo |
| `s-features` | mockup central + 3+3 laterais | mockup + grid 2x3 | mockup + lista vertical |
| `s-icp` | grid 3 colunas | grid 2 colunas | 1 coluna |
| `s-app-preview` | 2 col: imagem / texto+CTA | 2 col comprimido | 1 col: texto + imagem |
| `s-chef` | 2 col: foto / bio | 2 col comprimido | 1 col: foto + texto |
| `s-faq` | max-w-3xl centralizado | max-w-2xl | w-full padding 16px |
| `s-cta-mid` | max-w-2xl centralizado | max-w-xl | w-full texto menor |
| `s-waitlist` | 2 col: proposta / form | 1 col: proposta + form | 1 col campos full width |
| `s-footer` | flex row | flex wrap | flex col centralizado |

---

## 6. Acessibilidade — Checklist

- [ ] Skip link "Ir para conteudo principal" antes do `s-nav`
- [ ] `lang="pt-BR"` no `<html>`
- [ ] Contraste AA em todos os textos (cream sobre dark: ratio >= 4.5:1)
- [ ] Focus visible em todos os interativos: `focus-visible:ring-2 focus-visible:ring-brasea-terracota`
- [ ] Tamanho minimo de toque: `min-h-[44px] min-w-[44px]`
- [ ] `aria-hidden="true"` em icones decorativos
- [ ] `aria-label` em icones funcionais
- [ ] `<label htmlFor>` em todos os campos do formulario
- [ ] `alt` descritivo em todas as imagens
- [ ] Accordion com `aria-expanded` e `aria-controls` (shadcn/ui ja inclui)

---

## 7. Checklist de Entrega

### Pre-desenvolvimento
- [ ] Figma: frames nomeados com IDs das secoes (`s-nav`, `s-hero`, etc.)
- [ ] Assets exportados: logo SVG, mockups WebP 2x, foto chef WebP, og-image PNG 1200x630
- [ ] Tokens de design configurados no `tailwind.config.ts`
- [ ] Supabase: tabela `waitlist` criada com campos corretos
- [ ] Variaveis de ambiente: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `RESEND_API_KEY`

### Por secao
| Secao | ID | Construido | Responsivo | Acessivel | Testado |
|---|---|---|---|---|---|
| Navegacao | `s-nav` | [ ] | [ ] | [ ] | [ ] |
| Hero | `s-hero` | [ ] | [ ] | [ ] | [ ] |
| Funcionalidades | `s-features` | [ ] | [ ] | [ ] | [ ] |
| Para quem | `s-icp` | [ ] | [ ] | [ ] | [ ] |
| Preview App | `s-app-preview` | [ ] | [ ] | [ ] | [ ] |
| Chef | `s-chef` | [ ] | [ ] | [ ] | [ ] |
| FAQ | `s-faq` | [ ] | [ ] | [ ] | [ ] |
| CTA Intermediario | `s-cta-mid` | [ ] | [ ] | [ ] | [ ] |
| Lista de Espera | `s-waitlist` | [ ] | [ ] | [ ] | [ ] |
| Rodape | `s-footer` | [ ] | [ ] | [ ] | [ ] |

### Pre-launch
- [ ] Lighthouse: Performance >= 90 · SEO = 100 · Acessibilidade >= 95
- [ ] Formulario testado — dados chegando no Supabase + email de confirmacao
- [ ] Testado em: iPhone SE (375px) · Galaxy A32 (360px) · iPad (768px) · Desktop 1280px
- [ ] Open Graph validado: Facebook Debugger + Twitter Card Validator
- [ ] FAQ JSON-LD validado: Google Rich Results Test
- [ ] Analytics de scroll funcionando (verificar eventos no console ou Mixpanel)
