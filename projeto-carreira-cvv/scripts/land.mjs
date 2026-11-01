import fs from 'fs';
import {feature} from 'topojson-client';
import {geoContains} from 'd3-geo';
const topo=JSON.parse(fs.readFileSync('npm/world-atlas-2.0.2/package/land-110m.json'));
const land=feature(topo,topo.objects.land);
const out=[];
for(let lat=-58;lat<=80;lat+=1.8){for(let lon=-180;lon<180;lon+=1.8){ if(geoContains(land,[lon,lat])) out.push(Math.round(lon*10),Math.round(lat*10)); }}
fs.writeFileSync('land.json',JSON.stringify(out));
console.log(out.length/2);
