import json,re,math
R='raw/'
EUR={'Reino Unido','Alemanha','Itália','França','Espanha','Portugal','Países Baixos','Bélgica','Suíça','Áustria','Polônia','Finlândia','Suécia','Dinamarca','Turquia','Israel','Hungria','Tchéquia'}
LAT={'Brasil','México','Colômbia','Chile','Argentina','Peru','Uruguai'}
CN={'Estados Unidos':'EUA','Holanda':'Países Baixos','República Tcheca':'Tchéquia'}
def reg(c): return 'eua' if c=='EUA' else 'can' if c=='Canadá' else 'lat' if c in LAT else 'eur' if c in EUR else 'oce' if c in ('Austrália','Nova Zelândia') else 'asia'
recs=[]
def add(name,city,country,lat,lon,areas,evid,url,vol,prog,urlp,cont,cf,aceita='nao_confirmado',taxa=None,dur=None,ant=None,req=None,orig=''):
    country=CN.get(country,country)
    recs.append(dict(name=name,city=city,country=country,lat=lat,lon=lon,areas=list(areas),fontes=[dict(areas=list(areas),evid=evid,url=url,volume=vol)],
      programa={'programa_publico':'sim','sim':'sim','nao_publico':'nao_publico'}.get(prog,'nao_confirmado'),url_prog=urlp,contatos=[(cont,cf)] if cont and cont!='nao_confirmado' else [],
      aceita=aceita,taxa=taxa,duracao=dur,antecedencia=ant,requisitos=req,orig=orig))
for f in ['asia','americas','eua_rob','eur_rob']:
    for a in json.load(open(R+f+'.json')): add(*a[:5],['robotica'],*a[5:12],orig=f)
import glob
for fn in ['areas.json']+sorted(glob.glob(R+'x_*.json')):
    fn=fn if fn.startswith(R) else R+fn
    for a in json.load(open(fn)): add(*a[:5],a[5],*a[6:13],aceita=a[13],orig=fn)
for f in ['obs_eua','obs_fora']:
    for o in json.load(open(R+f+'.json')):
        add(o['name'],o['city'],o['country'],o['lat'],o['lon'],o['areas'],'Programa oficial de observership: '+o['requisitos'],o['url'],'nao_publicado','sim',o['url'],o['contato'],o['contato_fonte'],o['aceita'],o['taxa'],o['duracao'],o['antecedencia'],o['requisitos'],f)
for o in json.load(open('polos.json')):
    add(o['name'],o['city'],o['country'],o['lat'],o['lon'],['robotica'] if o['name'].split()[0] not in ('UAB','Keck','AdventHealth','Mount') else ['cardiologia','cirurgia_cardiaca'],o['requisitos'],o['url'],o['volume'],o['programa'],o['url'] if o['programa']=='sim' else None,o['contato'],o['contato_fonte'],o['aceita'],o['taxa'],o['duracao'],o['antecedencia'],o['requisitos'],'v1')
STOP=set('nacional cardiología cardiologia méxico mexico hospital hôpital hopital singapore newyork presbyterian cleveland medical center centre university universidad health heart institute instituto clínica de da do del the of and saint st herzzentrum new york presbyterian children s cardiac cardiovascular surgery national medicine fundación fundacion texas colombia buenos aires toronto general boston london paris sydney melbourne royal hospitals cardiology kardiologie — – / ( )'.split())
def toks(n): return {t for t in re.findall(r'[a-zà-ú]+',n.lower()) if len(t)>3 and t not in STOP}
merged=[]
for r in recs:
    hit=None
    for m in merged:
        if abs(m['lat']-r['lat'])<0.15 and abs(m['lon']-r['lon'])<0.15 and (toks(m['name'])&toks(r['name'])):
            hit=m;break
    if not hit: merged.append(r);continue
    m=hit
    for a in r['areas']:
        if a not in m['areas']: m['areas'].append(a)
    m['fontes']+=r['fontes']
    for c in r['contatos']:
        if c not in m['contatos']: m['contatos'].append(c)
    rank={'sim':0,'nao_publico':1,'nao_confirmado':2}
    if rank[r['programa']]<rank[m['programa']]: m['programa']=r['programa'];m['url_prog']=r['url_prog']
    ar={'sim':0,'alguns_trainees':1,'so_formados':2,'nao':2,'nao_confirmado':3}
    if ar.get(r['aceita'],3)<ar.get(m['aceita'],3): m['aceita']=r['aceita']
    for k in ['taxa','duracao','antecedencia','requisitos']:
        if not m[k] and r[k]: m[k]=r[k]
    if len(r['name'])>len(m['name']) and r['orig']=='v1': m['name']=r['name']
out=[]
for m in merged:
    vols=[f['volume'] for f in m['fontes'] if f['volume'] and f['volume']!='nao_publicado' and f['volume']!='nao_confirmado']
    cont=[c for c in m['contatos'] if c[1]=='oficial'] or m['contatos']
    taxa=m['taxa'] or 'não publicada'
    tb=bool(re.search(r'US\$ ?(50|200|300|350|500)\b|S\$170|£350|€476|US\$ 200',taxa)) and '4.250' not in taxa and 'tuition' not in taxa and '4.000' not in taxa
    out.append(dict(name=m['name'],city=m['city'],country=m['country'],reg=reg(m['country']),lat=m['lat'],lon=m['lon'],areas=m['areas'],
      fontes=[{'areas':f['areas'],'evid':f['evid'],'url':f['url'],'volume':f['volume']} for f in m['fontes']],
      programa=m['programa'],url=m['url_prog'] or m['fontes'][0]['url'],contatos=[c[0] for c in cont],contato_fonte=(cont[0][1] if cont else 'nao_confirmado'),
      aceita=m['aceita'],taxa=taxa,taxa_baixa=tb,duracao=m['duracao'] or 'não publicada',antecedencia=m['antecedencia'] or 'não publicada',requisitos=m['requisitos'] or 'não publicados',
      volume='; '.join(dict.fromkeys(vols)) or 'nao_confirmado'))
json.dump(out,open('polos_all.json','w'),ensure_ascii=False)
from collections import Counter
print(len(recs),'registros ->',len(out),'polos')
print(Counter(o['reg'] for o in out)); print(Counter(len(o['areas']) for o in out))
print(Counter(a for o in out for a in o['areas']))
print('programa sim',sum(o['programa']=='sim' for o in out),'aceita sim/alguns',sum(o['aceita'] in('sim','alguns_trainees') for o in out))
for o in out:
    if len(o['areas'])>=3: print(len(o['areas']),o['name'],o['areas'])
