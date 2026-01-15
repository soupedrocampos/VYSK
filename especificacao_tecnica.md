
# Especificação Técnica do Site (Clone)

Este documento detalha a arquitetura, estilos e estrutura técnica do site clonado para servir de base na recriação de projetos similares.

## 1. Arquitetura Geral

O site é gerado originalmente pelo **Framer**, resultando em uma estrutura HTML estática otimizada com dependência pesada de CSS Inline e Variáveis CSS (Tokens).

* **Doctype**: HTML5
* **Charset**: UTF-8
* **Framework Original**: Framer (React-based, exportado para HTML estático)
* **Estratégia de Estilização**: CSS-in-JS compilado para estilos inline e classes utilitárias (`.framer-text`, `.ssr-variant`).
* **Responsividade**: Baseada em "Breakpoints de Variante". O mesmo componente é renderizado múltiplas vezes (Desktop, Tablet, Mobile) e ocultado/exibido via classes CSS (`hidden-XXXX`).

---

## 2. Design System & Tokens Globais

As variáveis são definidas no `:root` ou `body` e controlam toda a identidade visual.

### Tipografia (Font Faces)

O site carrega múltiplas famílias tipográficas via `@font-face` (Google Fonts e Assets proprietários):

| Família | Pesos | Uso Principal |
| :--- | :--- | :--- |
| **Satoshi** | 400, 500, 700 (Italic/Regular) | Títulos, Botões, UI Elements |
| **PP Radio Grotesk** | 300 (Light), 400 (Regular), 700 (Bold) | Headings Estilizados ("METODOLOGIA", "PEDROVYSK") |
| **Inter** | 400 (Vários ranges Unicode) | Texto de corpo (fallback), descrições longas |
| **DM Sans** | 400 | Texto secundário |
| **Hanken Grotesk** | 400 | Texto de suporte |

### Paleta de Cores (Tokens Principais)

Identificamos os seguintes tokens hexadecimais principais (mapeados das variáveis `--token-...`):

* **Background Principal**: `#0d0d0d` (Preto Quase Puro) - *--token-913...*
* **Texto Principal / Títulos**: `#fff` (Branco) - *--token-fb4...*
* **Acentos (Roxo/Lilás)**: `#b3a1c7` - *--token-82a...* (Usado em gradientes e ícones)
* **Acentos (Verde)**: `#00ffb2` e `#10a37f` - *--token-d83...* (Elementos de destaque, ticks)
* **Cinzas de Suporte**:
  * `#1a1a1a` (Cards Background)
  * `#f5f5f5` (Texto secundário claro)
  * `#bfbdbd` (Bordas sutis)

---

## 3. Estrutura dos Componentes

### 3.1. Hero Section (`#hero-section`)

* **Container**: `div` com `position: relative` e `z-index` alto.
* **Background**: Vídeo em loop (MP4) posicionado com `object-fit: cover`.
* **Overlay**: Gradientes CSS sobre o vídeo para garantir legibilidade do texto.
* **Texto**:
  * `h1`: "ACADEMIA PEDROVYSK GLOBAL" (Estilo: Satoshi/PP Radio Grotesk).
  * Animação de entrada via CSS (`opacity: 0` -> `1` controlada por script ou inline style).

### 3.2. Service Cards (Grid de Serviços)

Os cards ("AGENTES DE IA", "SEO", etc.) utilizam um layout Flexbox complexo:

* **Wrapper**: `div` com `display: flex`, `flex-direction: column`.
* **Efeito de Borda**: Muitas vezes simulado com `box-shadow` ou bordas com gradiente.
* **Ícones**: SVGs inline (`<svg>`) ou referenciados (`<use href="#svg..." />`).
* **Interatividade**:
  * Estado `:hover` definido via variáveis CSS na tag `style` do elemento.
  * Transições suaves (`transition: all .3s ease`).

### 3.3. Ticker / Marquee

A faixa de logos em movimento contínuo:

* **Técnica**: Duplicação do conteúdo (duas listas de logos).
* **Animação**: `@keyframes marqueeScroll` (definido no CSS global/injetado) que move o container de `translateX(0)` para `translateX(-50%)` infinitamente.

### 3.4. Footer

* **Estrutura**: Grid simples com colunas para Links, Social e Copyright.
* **Links**: Tags `a` com classes `framer-text` e estilos de hover para sublinhado ou mudança de cor.

---

## 4. Comportamento Responsivo (Técnica "SSR Variant")

Ao invés de usar apenas `@media queries` para mudar o CSS de um *único* elemento, o site usa a estratégia de **substituição de DOM**:

```html
<!-- Versão Desktop -->
<div class="ssr-variant hidden-mobile-class">
   <!-- Conteúdo Desktop Grande -->
</div>

<!-- Versão Mobile -->
<div class="ssr-variant hidden-desktop-class">
   <!-- Conteúdo Mobile Otimizado -->
</div>
```

* **Implicação**: Ao editar o texto, é CRÍTICO alterar em **todas as variantes** (Desktop, Tablet, Mobile), pois são nós HTML distintos. Isso explica por que edições simples às vezes "não funcionam" em telas menores se apenas a versão Desktop foi alterada.

---

## 5. Scripts e Funcionalidades

### 5.1. Inicialização (Hydration)

O site tenta carregar scripts de hidratação do Framer (`framer.com/edit/init.mjs`).

* **No Clone**: Esses scripts muitas vezes são bloqueados ou removidos para evitar conflitos de domínio (`PROTECTION SCRIPT REMOVED`).
* **Substituição**: Usamos scripts vanilla JS (no final do `body`) para replicar funcionalidades essenciais como formulários e animações simples.

### 5.2. Formulários

* **Integração**: ActiveCampaign (embedado).
* **Estilização Forçada**: O CSS injetado força a fonte `Satoshi` nos inputs para manter a coerência visual, sobrescrevendo os estilos padrão do navegador.

---

## 6. Recomendação para Recriação

Para criar um site similar ("Pedrovysk 2.0"):

1. **CSS Reset**: Utilize um reset robusto (`box-sizing: border-box`, margens zeradas).
2. **Variáveis**: Defina sua paleta de cores e tipografia em variáveis CSS no início.
3. **Layout**: Use `Grid` para a estrutura macro e `Flexbox` para alinhamento interno de componentes.
4. **Responsividade (Abordagem Moderna)**: Ao invés de duplicar HTML (como o Framer faz), use CSS Media Queries e CSS Grid (`grid-template-columns`) para alterar o layout do **mesmo** elemento HTML. Isso facilita a manutenção e melhora o SEO.
5. **Animações**: Utilize `Framer Motion` (se usar React) ou `GSAP` (se usar JS Vanilla) para as animações de entrada e scroll, pois oferecem performance superior ao jQuery antigo.
