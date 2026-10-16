---
name: claudinho
description: Cria um "guia fundo" no estilo que o Paulo aprovou para estudar para a prova da Prefeitura de Santos (IBAM, Engenheiro Civil): explica um assunto difícil do zero, com conceitos, regras com números, linha do tempo, simulador, quadros comparativos, esquema/mapa para não confundir, treino interativo com correção e resumo de uma folha. Use quando o Paulo digitar /claudinho <tema>, ou pedir "me explica bem detalhado", "guia", "esquema para eu não errar" ou "faz um overview" sobre um tema do edital (por exemplo IPTU progressivo, competências, licenciamento, PNRS).
argument-hint: "<tema do edital, por exemplo: LC 140, Reurb, APP e Reserva Legal>"
---

# /claudinho: guia fundo para o Paulo

O Paulo estuda por páginas em estilo caderno, com números destacados, "como a banca tenta te pegar", quadros e questões. Ele não tem base em alguns assuntos (por exemplo, tributário) e quer **entender, não só decorar**. Este skill reproduz o guia que ele chamou de "obra de arte". O modelo completo está em `assets/guia-modelo.html`: abra-o antes de começar e copie a estrutura, o CSS e os componentes.

Responda sempre em português do Brasil, direto, sem rodeios.

## Regras de honestidade (não negociáveis)
- **Fonte**: escreva a partir dos textos oficiais já conferidos (apostas, PDFs e notas do cofre `segundo-cerebro-paulo`, pasta `INSS Santos`). Não invente número de artigo, prazo, valor, vigência nem "frequência de cobrança".
- Se o Paulo citar material que você não consegue acessar (por exemplo, Estratégia, que é pago), **diga isso na resposta e numa caixa de aviso da página**. Escreva com as leis e com o conhecimento básico da disciplina, e ofereça comparar se ele colar um trecho.
- **Probabilidades** (chance de cair, peso de tema): são estimativa sua. Diga isso. Só chame de "Jev" o que tiver sido calculado de verdade pela API da TypeSafe (skill `typesafe:typesafe-ai`, com chave de API); sem chave, avise que não usou o Jev e não simule.
- Diga o que ficou sem conferir (anexos, NBR, alterações posteriores). Se um número depende de lei que não está no material (por exemplo, a lei de IPTU de Santos), marque como **hipotético** na página.
- Nunca grave token, chave, senha ou cookie em arquivo, no cofre ou no GitHub. Se precisar de token da Vercel e ele não estiver na conversa, peça ao Paulo.
- Não diga que abriu um link da Vercel se o proxy bloqueou: diga que a API de deploy confirmou e que o teste foi local.

## Passo a passo
1. **Entender o pedido**: qual tema, qual dificuldade (conceito, número, competência, prazo). Procure no cofre: aposta da lei, lotes de questões, cola do bloco 3, notas de `08 - Conhecimento`. Leia o texto do dispositivo antes de escrever.
2. **Montar a estrutura** (use só o que o tema pede, mas mantenha a ordem):
   1. *Do zero*: tabela "palavra · o que é · no seu tema" com os conceitos de base (por exemplo, fato gerador, base de cálculo, alíquota) e uma **conta ou regra única** em destaque.
   2. *Regras, uma por uma*, com **números em destaque**, uma "linha de memória" (ex.: `3 · 6 · 9 · 12 · 15`) e a caixa **"Como a banca erra a gente"** (números trocados, termo trocado, regra invertida, exigência inventada).
   3. *Linha do tempo ou fluxo* quando houver sequência (prazos, sanções, fases).
   4. *Simulador* quando houver cálculo (campos de entrada, tabela ano a ano, checagem da regra). Hipóteses sempre rotuladas.
   5. *Quadros comparativos* para o que se confunde (A × B × C), com colunas iguais e as pegadinhas.
   6. *Esquema ou mapa* com cores por categoria, "nomes que a banca confunde" lado a lado (por exemplo, suplementar × supletiva × subsidiária) e um **fluxo de 4 perguntas** para decidir na prova.
   7. *Treino interativo* com 20 a 30 itens: frase, botões de resposta, correção imediata com o porquê e pontuação no fim.
   8. *Para não errar mais*: resumo de uma folha, com o que reler no dia da prova.
   9. Caixa de **fontes e limites** no início.
3. **Estilo**: fonte Caveat, fundo creme, cartões "caderno", números em azul/vermelho, caixas `bz` (azul), `pk` (tracejada vermelha, pegadinha), `fm` (verde, fórmula ou macete), `av` (amarela, aviso). Layout que funciona no celular (grid de 1 coluna abaixo de 620 px). Pode copiar os estilos do modelo.
4. **Testar** com Playwright (`executablePath: '/opt/pw-browsers/chromium'`, `NODE_PATH=$(npm root -g)`, bloquear `https://**` com `route.abort`): sem erro de página, simulador e treino funcionando, tirar captura e olhar.
5. **Publicar** (se o Paulo pediu página/URL): pasta `/guia/<tema>/index.html` dentro do hub `estudossantos` (projeto Vercel `estudossantos`, escopo `figueiredo2`) e acrescente o link na página inicial do hub. Deploy: `npx -y vercel@latest deploy --prod --yes --name estudossantos --scope figueiredo2 --token "$VERCEL_TOKEN"` a partir da pasta do site completo (inclui `bloco3/pdfs`, que ficam fora do Git); confirme pela API (`/v6/deployments?...&app=estudossantos`). O token vem do Paulo na conversa; não o escreva em arquivo.
6. **Guardar no cofre**: copie o HTML para a pasta do bloco certo (`INSS Santos/<bloco>/Guia - <tema>.html`), atualize `00 - O que tem e o que falta.md` da pasta, registre em `00 - Sistema/Registro de mudanças.md` e atualize o índice. Receba as mudanças remotas antes (`git pull`), commit sem force push, push para `main`. Copie também os arquivos do site (sem PDFs) para `estudossantos/` no repositório `loruki-website`, na branch de desenvolvimento indicada pela sessão.
7. **Responder** ao Paulo em texto corrido: o link, o que a página traz, o que **não** foi feito (fonte inacessível, Jev, itens não conferidos) e o que mudou no cofre (precisa de `git pull`).

## Checklist antes de entregar
- [ ] Todo número e artigo veio do texto lido (ou está marcado como hipotético).
- [ ] Há "como a banca erra a gente" em cada bloco de regras.
- [ ] Os pares que se confundem estão lado a lado e com macete de memória.
- [ ] O treino tem resposta e explicação para cada item, e os gabaritos não estão todos na mesma opção.
- [ ] A página abre sem erro e funciona no celular.
- [ ] Aviso de fontes e limites na página e na resposta.
- [ ] Cofre atualizado (nota, registro, índice) e sem credenciais em nenhum arquivo.

## Exemplo já aprovado
`assets/guia-modelo.html` é o guia de **IPTU progressivo, ambiental aprofundado e competências** (publicado em `estudossantos.vercel.app/guia/`). Use-o como molde de estrutura e de tom.
