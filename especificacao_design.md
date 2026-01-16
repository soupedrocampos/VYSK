
# Detalhamento de Design e Interação (UI/UX Specification)

Este documento complementa a especificação técnica, focando exclusivamente na estética ("Look & Feel") e comportamento ("Actions") de cada componente principal para garantir a fidelidade na reprodução visual.

## 1. Botões Primários (CTA)

### Estética (Aesthetics)

* **Background**: Gradiente Complexo em ângulo (`129.98deg`).
  * *Stops*: Roxo Claro (`rgb(179, 161, 199)`) → Roxo Profundo (`rgb(113, 94, 139)`) → Roxo Escuro (`rgb(89, 71, 114)`).
  * *CSS*: `background: linear-gradient(129.98deg, rgb(179, 161, 199) 0%, rgb(89, 71, 114) 50%, rgb(179, 161, 199) 100%);`
* **Bordas**:
  * `border-radius: 100px` (Pílula completa).
  * Borda sutil semi-transparente: `2px solid rgba(179, 161, 199, 0.7)`.
* **Sombras**: Glow difuso proeminente na cor do acento.
  * *CSS*: `box-shadow: 0px 4px 40px 0px rgba(179, 161, 199, 0.3)`.
* **Tipografia**:
  * Fonte: **Satoshi** (Regular ou Medium).
  * Tamanho: `18px`.
  * Caixa Alta (`uppercase`).
  * Cor: `rgb(245, 245, 245)` (Off-white).

### Ações (Interactions)

* **Hover State**:
  * **Escala**: Aumenta ligeiramente (`transform: scale(1.05)`).
  * **Brilho**: O `box-shadow` pode intensificar ou mudar a opacidade.
* **Click**:
  * Feedback tátil (leve redução de escala `scale(0.98)`) - *Recomendado para implementação*.
  * Scroll suave para âncora (`#planos`) ou abertura de modal.

---

## 2. Cards de Serviço ("Bento Grid Style")

### Estética

* **Container**:
  * Cor de Fundo: `#1a1a1a` (Cinza muito escuro, quase preto).
  * Borda: `1px solid rgba(255, 255, 255, 0.08)` (Super sutil).
  * Arredondamento: `border-radius: 24px` ou `32px`.
* **Tipografia Interna**:
  * Títulos: **PP Radio Grotesk Light** (Fino e técnico), `20px`, Uppercase.
  * Descrições: **DM Sans** ou **Inter**, cinza claro (`rgba(255, 255, 255, 0.7)`).
* **Elementos Decorativos**:
  * Uso de "Glows" localizados (elipses com `filter: blur(100px)` na cor roxa/azul) atrás de ícones ou textos para dar profundidade.

### Ações

* **Hover State**:
  * **Elevação**: O card sobe (`transform: translateY(-5px)`).
  * **Borda**: A cor da borda clareia (`rgba(255,255,255, 0.2)`).
  * **Cursor**: Muda para `pointer` se o card inteiro for clicável.
* **Reveal (Ao Rolar)**:
  * Entrada sequencial (staggered) de baixo para cima com `opacity: 0` -> `1`.

---

## 3. Seção "Minha Experiência" (Lista Numerada)

### Estética

* **Layout**: Lista vertical de itens.
* **Marcadores (Bullets)**:
  * Círculo colorido (`background-color: rgb(179, 161, 199)`).
  * Número interno minúsculo (`8px font-size`), fonte técnica (**PP Radio Grotesk**).
* **Texto do Item**:
  * Fonte: **Helvetica Neue** (ou fallback **Inter**).
  * Tamanho: `18px`.
  * Cor: Cinza médio (`rgb(204, 204, 204)`).
  * Link interno destacado em Azul (`rgb(0, 153, 255)`) e sublinhado.

### Ações

* **Seleção/Hover**:
  * Ao passar o mouse sobre um item, o texto pode clarear para Branco puro (`#fff`).
  * O marcador pode pulsar ou aumentar de tamanho.

---

## 4. Ticker (Marquee de Logos)

### Estética

* **Visual**: Faixa horizontal contínua monocromática.
* **Logos**:
  * Cor: Branco ou Cinza Claro com opacidade reduzida (`0.5` ou `0.7`).
  * Tamanho uniforme (altura fixa ~`40px`).

### Ações

* **Movimento**:
  * Scroll automático infinito para a esquerda (`linear`, `20s` a `40s` de duração).
  * **Pausa no Hover**: O movimento para quando o usuário passa o mouse por cima (boa prática de UX).

---

## 5. Hero Section (Vídeo Background)

### Estética

* **Camadas (Layers)**:
    1. **Base**: Vídeo MP4 (Loop).
    2. **Overlay**: `background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, #0d0d0d 100%)`. (Escurece a parte inferior para fundir com o resto do site).
* **Tipografia**:
  * Manchete Gigante: **PP Radio Grotesk** ou **Satoshi**, `72px+`, Branco Puro.
  * Alinhamento Centralizado.

### Ações

* **Entrada**:
  * O texto "ACADEMIA PEDROVYSK" deve ter um `fade-in` lento e um leve movimento `translateY(20px -> 0)`.
  * O botão CTA aparece com um *delay* em relação ao título.

---

## Resumo de Comportamento Global

1. **Scroll Suave**: O site deve ter `html { scroll-behavior: smooth; }` para navegação entre seções.
2. **Seleção de Texto**: Em áreas de leitura (Bio, Serviços), o texto deve ser selecionável (`user-select: text`). Em elementos de UI puramente visuais (backgrounds, formas), pode ser bloqueado.
3. **Performance**:
    * Vídeos devem ter `autoplay muted loop playsinline`.
    * Imagens devem ter `lazy-loading` abaixo da dobra.
