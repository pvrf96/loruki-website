# LEARNINGS — o que funcionou e o que deu errado (lido no início de cada sessão)

## Preferências do Paulo
- Quer ver funcionando, não texto longo; respostas diretas
- Layout de referência manda: seguir a referência de perto, sem "simplificar"
- Efeitos visuais precisam ser vivos (radar gira, pisca), não estáticos
- Nada ilegal: sem imagem com direito autoral, sem dado inventado

## Erros que não podem voltar
- Modelar anatomia do zero com geometria (fica ruim) → usar modelo real (BodyParts3D)
- Responder de memória sem verificar → conferir fonte e dizer quando não conferiu
- Misturar este produto com material de prova
- Cair na rede bloqueada da nuvem sem avisar → usar o PC (Claude Code + Remote Control) para buscar dados

## Protótipo do radar (01/11/2026)
- Elemento escondido com transform (gaveta fora da tela) alargava a página no celular → `overflow:hidden` no palco
- Continentes muito apagados na 1ª versão → brilho base subido
- FPS não dá para medir aqui (navegador de teste sem GPU: 19 fps desktop / 11 celular); medir em aparelho real

## Virada de foco (01/11/2026)
- O que os residentes querem é OBSERVERSHIP de ~1 mês (barato, autorizado pela residência), não fellowship
- Caso real: esposa (Unifesp) mandou e-mail para vários polos de robótica nos EUA; só Chicago respondeu; entrevista por vídeo, exames de saúde, autorização da Unifesp, tudo por conta própria
- Probabilidade = jogo de volume: mostrar polos + contato oficial + relatos
- Fellowship informal/observership muitas vezes não tem edital: busca web sozinha não basta

## 2026-11-01 — Dossiê endovascular
- Pesquisa profunda (4 agentes + 1 normalizador) mudou fatos do radar: Oderich saiu da UTHealth para o Baylor/THI (fev/2025); Mendes saiu da Mayo para a UCLA (mai/2025). Dados de pessoas envelhecem rápido: sempre datar e marcar certeza.
- O polo "Memorial Hermann" tinha dados do Houston Methodist (erro de merge). Agora são polos separados.
- Dossiê fica em data/dossie_*.json e é aplicado no build (não editar polos_all à mão).
- Só dados profissionais públicos; nenhum e-mail/telefone pessoal.
