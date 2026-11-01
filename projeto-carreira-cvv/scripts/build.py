import json,os
s=open('r3_src.html').read();P=json.load(open('polos_all.json'))
import glob
D=json.load(open('dossie.json')) if os.path.exists('dossie.json') else {}
for f in sorted(glob.glob('../endo/dossie_w*.json')):
    W=json.load(open(f));D['polos']+=W.get('polos',[])
    names={x['nome'] for x in D.get('pontes_brasil',[])}
    D['pontes_brasil']+= [x for x in W.get('pontes_brasil',[]) if x['nome'] not in names]
if D:
    byn={p['name']:p for p in P}
    if D.get('fix_memorial'):byn['Memorial Hermann-TMC / UTHealth Houston'].update(D['fix_memorial'])
    if D.get('novo_polo') and D['novo_polo']['name'] not in byn:
        n=dict(D['novo_polo']);n['dossie']=None;P.append(n);byn[n['name']]=n
    for d in D.get('polos',[]):
        k=d['match'] if d['match']!='NOVO' else D['novo_polo']['name']
        if k not in byn: print('SEM MATCH',k);continue
        byn[k]['dossie']={x:d.get(x) for x in d if x!='match'}
s=s.replace('__POLOS__',json.dumps(P,ensure_ascii=False)).replace('__LAND__',open('land2.json').read())
s=s.replace('__DOSSIE__',json.dumps({k:D.get(k) for k in ['atualizado','pontes_brasil','pontes_unifesp']} if D else {},ensure_ascii=False))
open('index.html','w').write(s)
open('test.html','w').write('<!doctype html><html><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>body{margin:0}</style></head><body>'+s+'</body></html>')
print(len(s)//1024,'KB',sum(1 for p in P if p.get('dossie')),'dossiês',len(P),'polos')
