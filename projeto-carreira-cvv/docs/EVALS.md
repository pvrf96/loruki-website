# EVALS — verificações automáticas (rodam antes de qualquer "pronto")

## Dados (script `scripts/check_data.py`, a criar)
- Todo programa tem: instituição, país, área, duração, fonte_url, verificado_em
- Nenhum campo vazio: ou valor com evidência, ou "sem informação"
- Todo valor tem trecho de evidência salvo
- fonte_url responde (sem link quebrado)
- verificado_em há menos de 12 meses (senão marca "desatualizada")
- Nenhum registro de exemplo no arquivo de produção

## Site (script `scripts/check_site.js`, Playwright)
- Abre sem erro no console (desktop e celular 390px)
- Print automático de: radar, lista, ficha, celular
- Feixe do radar muda de ângulo entre dois prints (prova que gira)
- FPS medido ≥ 30 no perfil celular
- Com "reduzir movimento", o feixe fica parado
- Sem rolagem horizontal no celular

## Resultado
O agente mostra a tabela: item · passou/falhou · evidência (print ou número).
