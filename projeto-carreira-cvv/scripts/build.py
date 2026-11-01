import json
s=open('r3_src.html').read();p=json.dumps(json.load(open('polos_all.json')),ensure_ascii=False)
s=s.replace('__POLOS__',p).replace('__LAND__',open('land2.json').read())
open('index.html','w').write(s)
open('test.html','w').write('<!doctype html><html><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>body{margin:0}</style></head><body>'+s+'</body></html>')
print(len(s)//1024,'KB')
