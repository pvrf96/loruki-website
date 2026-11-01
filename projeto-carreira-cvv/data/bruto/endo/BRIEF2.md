# Pesquisa profunda — polos do Radar Global (observership de ~1 mês)
Perfil: residentes brasileiros (R1–R5) de cardiologia e cirurgia cardiovascular; caso de referência: residente da Unifesp (SP) que já fez observership num hospital top de Chicago (pagou do próprio bolso, entrevista por vídeo, exames de saúde, autorização da Unifesp). FOQUE NAS ÁREAS listadas para cada polo.
Objetivo: dados que AUMENTEM A CHANCE de ser aceita — rota de entrada, quem decide, pontes (brasileiros, Unifesp), assunto para e-mail personalizado.

Para CADA centro levante (só dados profissionais públicos; cada campo com URL da fonte + trecho curto que comprova):
1. programa: página oficial de observership/visiting physician; elegibilidade (aceita residente estrangeiro?), taxa, duração, antecedência, janelas, documentos (vacinas, seguro, carta, visto B1/B2, background check), e-mail/formulário OFICIAL do escritório.
2. servico: nome exato do(s) serviço(s) das áreas do polo; chefe/diretor atual; diretor do fellowship relevante; volume publicado com ano.
3. pessoas_chave (máx 6): nome, cargo, por que importa (decide/hospeda/lidera pesquisa), fonte. NÃO coletar e-mail/telefone pessoal, NÃO deduzir formato de e-mail; só e-mail institucional se publicado oficialmente para esse fim.
4. brasileiros: médicos/fellows/pesquisadores brasileiros atuais ou ex-fellows no serviço (bio pública, artigo com afiliação dupla Brasil+centro). Muito valioso.
5. pontes_unifesp_sp: coautorias do centro com Unifesp/EPM, USP/InCor, Dante Pazzanese, ou outros brasileiros nas áreas do polo (PubMed); ensaios/registros em comum.
6. pesquisa_recente: 3 artigos 2022–2026 do serviço nas áreas do polo (título, ano, PMID ou DOI) — para citar no e-mail.
7. dicas: qualquer detalhe prático publicado (ex. precisa de sponsor interno, programa estruturado de 4 semanas, cursos/workshops abertos a internacionais como porta de entrada, congressos que eles organizam).
8. rota_recomendada: 1–3 frases: melhor caminho de entrada para ESTA residente, em ordem.

REGRAS: nunca inventar. Sem fonte => "não encontrado". Use WebSearch (mode standard; extended só se precisar). WebFetch não funciona — confie nos trechos dos resultados e diga o grau de certeza (confirmado = trecho explícito; provável = indireto). Limite: ~11 buscas POR CENTRO (≈45 no total). Se o polo for no Brasil, o "programa" é estágio externo/optativo para residentes de outras instituições (COREME/comissão de ensino).
SAÍDA: grave JSON (lista, um objeto por centro, com os campos acima + "certeza" por campo quando relevante) no arquivo indicado e devolva um resumo curto em português.
Em cada objeto inclua "match": nome EXATO do polo como aparece em fila.json (campo name). Se descobrir que o polo do radar mistura duas instituições ou tem dado errado, registre em "alerta_correcao".
REGRA EXTRA: só marque alguém como brasileiro se a fonte disser formação/vínculo no Brasil (nome lusófono não basta). Nunca preencha DOI/PMID de memória: só o que aparecer nos resultados.
