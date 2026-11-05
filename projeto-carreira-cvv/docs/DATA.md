# DATA — fontes e formato das fichas (o 6º arquivo)

## Ficha de fellowship
| campo | exemplo | obrigatório |
|---|---|---|
| instituicao | (nome oficial) | sim |
| pais / cidade | | sim |
| area | aorta / transplante / congênitas / mitral / estrutural / ECMO | sim |
| duracao_meses | | sim |
| remunerado | sim / não / sem informação | sim |
| requisitos | idioma, licença, provas | sim |
| prazo_inscricao | | se houver |
| fonte_url | página oficial do programa | sim |
| verificado_em | aaaa-mm | sim |

## Ficha de país
- como_chegar: validação do diploma, licença, idioma, visto (passos + fonte)
- como_se_pratica: diferenças de diretriz/prática vs Brasil (tema, sociedade, ano, resumo, fonte)

## Fontes candidatas (a confirmar)
- Sites oficiais dos programas e hospitais
- Sociedades: SBCCV, STS, AATS, EACTS, CTSNet (listagens de fellowship)
- Órgãos de licença/validação de cada país
- Diretrizes: SBC/SBCCV, ACC/AHA, ESC/EACTS (PDF oficial)

## Inteligência: como os dados são encontrados e mantidos
Não existe mágica: um agente (Claude) faz o trabalho braçal, e toda ficha passa por gente antes de publicar.

### 1. Descobrir (onde estão os programas)
- Lista de "sementes": sociedades (STS, AATS, EACTS, SBCCV), listagens de fellowship (CTSNet),
  páginas de departamentos de cirurgia cardíaca de hospitais-escola por país
- O agente faz buscas na web por país × área ("cardiac surgery fellowship aortic Canada" etc.)
  e guarda só links de **fontes oficiais** (site do hospital/programa/sociedade)

### 2. Extrair (transformar página em ficha)
- O agente lê cada página e preenche a ficha do formato acima
- Regra dura: campo sem evidência na página = "sem informação" (nunca deduz)
- Cada campo guarda o **trecho curto de evidência** e o link, para conferência rápida

### 3. Verificar
- Segunda passada automática: outro agente confere ficha × página e aponta divergências
- Revisão humana (equipe) aprova; só então vai para o JSON publicado
- Selo "verificado em" é a data dessa aprovação

### 4. Manter atualizado
- Tarefa agendada mensal: revisita os links, compara com a última versão e marca o que mudou
  (prazo novo, programa removido, link quebrado)
- Mudanças viram uma lista para a equipe aprovar; nada muda no site sem aprovação
- Ficha sem verificação há mais de 12 meses fica marcada "desatualizada"

### 5. Ranquear (Encaixe)
- Função simples e aberta: soma de critérios do perfil (idioma, bolsa, tempo, área, prazo)
- O número sempre vem com a explicação por extenso

### Onde isso roda
- No PC do Paulo com Claude Code (internet livre) ou como tarefa agendada na nuvem
  com os domínios das fontes liberados na rede do ambiente
