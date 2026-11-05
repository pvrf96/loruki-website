# DESIGN — v1 "Radar CVV"

Referência: o post da ferramenta de pesquisa de mercado em formato de galáxia (2º print).
Pegamos a **ideia de layout** — mapa escuro de pontos luminosos + lista de oportunidades ranqueadas —
e fazemos nossa versão própria (nome, cores, ícones e textos nossos; nada copiado da ferramenta original).

## Conceito
Um **radar mundial de fellowships em CVV**. Cada ponto luminoso é um programa real.
O usuário "varre" o mundo, vê onde estão as oportunidades e abre a ficha de cada uma.

## Estrutura da tela (desktop)
```
┌──────────────────────────────────────────────────────────────────────────┐
│ ◎ Radar CVV │ Radar · Oportunidades · Países · Comparar · Tendências │ 🔍 │ 128 programas · 14 países │
├───────────────┬──────────────────────────────────────────────┬───────────┤
│ OPORTUNIDADES │                                              │  FICHA    │
│ (lista        │        RADAR (mapa escuro de pontos)         │ (abre ao  │
│  ranqueada)   │   · modo Mundo: pontos na posição real       │  clicar   │
│ #1 card       │   · modo Galáxia: pontos agrupados por área  │  num      │
│ #2 card       │   · varredura giratória sutil                │  ponto)   │
│ #3 card ...   │   · legenda de áreas + zoom                  │           │
├───────────────┴──────────────────────────────────────────────┴───────────┤
│ filtros em chips: área · país · idioma · bolsa · duração · prazo        │
└──────────────────────────────────────────────────────────────────────────┘
```

## Abas do topo
| Aba | O que mostra |
|---|---|
| **Radar** | Mapa principal (Mundo ⇄ Galáxia) |
| **Oportunidades** | Lista completa ranqueada pelo "encaixe" com o perfil |
| **Países** | Ficha do país: como chegar + como se pratica (diretrizes vs Brasil) |
| **Comparar** | 2–3 países ou programas lado a lado |
| **Tendências** (fase 2) | Áreas e países que mais abriram vagas, prazos do mês |

## Os pontos (codificação visual)
| Atributo | Codifica |
|---|---|
| **Cor** | Subárea: aorta, transplante/ECMO, congênitas, valvar/mitral, estrutural/TAVI, coronária |
| **Tamanho** | Duração do programa (6, 12, 24 meses) |
| **Brilho/pulso** | Inscrições **abertas** pulsam; fechadas ficam apagadas; sem informação = contorno |
| **Constelação** (modo Galáxia) | Programas parecidos ficam juntos (mesma área + requisitos parecidos) |
| **Rótulo** | Aparece ao passar o dedo/mouse: instituição · cidade |

## Card de oportunidade (lista à esquerda)
- Posição no ranking + **Encaixe 0–10** (fórmula visível ao tocar no número)
- Instituição · cidade · país (bandeira em texto, sem logo de terceiros)
- Chips: área · duração · bolsa sim/não · idioma exigido · prazo
- Selo "verificado em mm/aaaa"

### Encaixe (transparente, nada de caixa-preta)
Calculado a partir do perfil que o usuário marca (idiomas que fala, se precisa de bolsa,
quanto tempo pode ficar fora, área de interesse). Soma de critérios simples, mostrada por extenso.

## Ficha (painel à direita)
Instituição, área, duração, bolsa, requisitos (provas, idioma, licença), prazo, link oficial,
data da verificação, e atalho "ver país" (como chegar + como se pratica).

## Estilo
- Fundo espaço profundo (quase preto azulado), pontos com brilho suave
- Tipografia: uma sans técnica para interface + mono para números e chips
- Uma cor de destaque (âmbar) só para o que pede ação: inscrição aberta, prazo perto
- Movimento: varredura do radar lenta e discreta; desliga com "reduzir movimento"

## Celular
- Radar em tela cheia; lista de oportunidades vira **gaveta que sobe de baixo**
- Ficha abre por cima, em tela cheia, com botão voltar
- Filtros em fileira de chips que desliza para o lado

## Proibido no design
- Logos de hospitais/sociedades sem permissão
- Imagens de atlas comercial
- Qualquer elemento copiado da ferramenta de referência (nome, ícones, textos)

## Efeitos (o radar é vivo, nada estático)
Todos os efeitos são escritos por nós; a referência é só a sensação.

| Efeito | Como funciona | Tecnologia |
|---|---|---|
| **Varredura giratória** | Feixe que gira 360° em loop (~6 s/volta) com rastro em degradê que some atrás dele | WebGL: shader de gradiente cônico (ângulo do pixel vs ângulo do feixe) |
| **Ping ao ser varrido** | Quando o feixe passa por um ponto, ele acende forte e apaga devagar (como radar real) | Cada ponto guarda o "ângulo"; brilho = função da distância angular ao feixe |
| **Pulso das inscrições abertas** | Anel que expande e desaparece em volta do ponto, repetindo | Shader por ponto (raio e opacidade em função do tempo) |
| **Brilho (glow/bloom)** | Pontos e feixe "vazam luz" como neon | Pós-processamento bloom (three.js + pmndrs/postprocessing) ou mistura aditiva |
| **Cintilar de fundo** | Campo de estrelas muito sutil, cada uma piscando em ritmo próprio | Partículas com fase aleatória |
| **Grade do radar** | Círculos concêntricos e linhas de grau que respiram levemente | Linhas com opacidade oscilando |
| **Busca "varrendo"** | Ao buscar, o feixe acelera, os resultados acendem em sequência e o resto apaga | Animação de estado (GSAP para a interface) |
| **Zoom e transição Mundo ⇄ Galáxia** | Pontos voam suavemente da posição geográfica para a constelação | Interpolação de posição na GPU |
| **Hover/toque** | Ponto cresce, ganha anel e rótulo; linhas finas ligam a outros do mesmo país/área | Raycast + linhas com brilho |
| **Contador** | Números do topo sobem rolando ao carregar | GSAP |

### Bibliotecas candidatas (conferido no GitHub em 01/11/2026)
| Biblioteca | ⭐ | Licença | Uso |
|---|---|---|---|
| three.js | 117 mil | MIT | Cena WebGL, pontos, shaders |
| pmndrs/postprocessing | 2,9 mil | Zlib | Bloom/brilho de qualidade |
| PixiJS + pixi filters | 48,6 mil / 1,1 mil | MIT | Alternativa 2D mais leve com glow |
| deck.gl | 14,7 mil | MIT | Alternativa se o mapa geográfico crescer muito |
| d3-geo | 1,1 mil | ISC | Projeção do mapa-múndi |
| GSAP | 30 mil | licença própria (gratuita) | Animações da interface |

Decisão proposta: **three.js + postprocessing** (radar e pontos) + **GSAP** (interface). Um único canvas, 60 fps.

### Desempenho e acessibilidade
- Celular: bloom em meia resolução, menos estrelas; mira 60 fps, aceita 30
- "Reduzir movimento" do sistema: feixe para, pulsos viram brilho fixo
- Sem WebGL: cai para versão canvas 2D simples
