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
