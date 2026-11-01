# ARCHITECTURE — rascunho v0

## Stack (proposta, simples de manter)
- Front: página estática (HTML + JS), mesma linha do painel do coração; depois pode virar app
- Dados: arquivos JSON versionados (fellowships.json, paises.json, diretrizes.json)
- Busca/filtro: no navegador (poucas centenas de registros não precisam de servidor)
- Hospedagem: onde a comunidade já está (definir) ou Vercel

## Pastas
```
projeto-carreira-cvv/
  data/  fellowships.json  paises.json  diretrizes.json  fontes.json
  site/  index.html  app.js  styles.css
  docs/  (estes 6 arquivos)
```

## Fluxo de dados
fonte oficial (site do programa / sociedade) → ficha preenchida → conferida por humano
(campo `verificado_em` + `fonte_url`) → JSON → site

## Fase 2 (só se a fase 1 der certo)
- Alertas de prazo por e-mail/WhatsApp
- Relatos de quem fez
- Painel admin para a equipe editar sem mexer em código
