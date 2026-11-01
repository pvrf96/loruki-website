const {chromium}=require('playwright');const C='/tmp/claude-0/-home-user-loruki-website/9050e330-61be-5497-8005-eee144adc7e8/scratchpad/cdn/';
async function page(b,vp,o={}){const p=await b.newPage({viewport:vp,reducedMotion:o.reduce?'reduce':'no-preference',isMobile:vp.width<500,hasTouch:vp.width<500,deviceScaleFactor:vp.width<500?2:1});const errs=[];
 p.on('console',m=>{if(m.type()==='error'&&!/CERT|Failed to load resource/.test(m.text()))errs.push(m.text())});p.on('pageerror',e=>errs.push(e.message));
 await p.route('https://cdn.jsdelivr.net/**',r=>r.fulfill({path:C+r.request().url().split('/').pop(),contentType:'application/javascript'}));await p.route('https://fonts.**',r=>r.abort());
 await p.goto('http://localhost:8766/test.html');await p.waitForTimeout(4500);return {p,errs}}
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});const R={};
 let {p,errs}=await page(b,{width:1280,height:800});
 const a1=await p.evaluate(()=>__radar.angle);await p.screenshot({path:'r_d1.png'});await p.waitForTimeout(1500);R.gira=[a1,await p.evaluate(()=>__radar.angle)].map(x=>x.toFixed(2));
 await p.click('#tWorld');await p.waitForTimeout(2500);await p.screenshot({path:'r_d2.png'});
 await p.click('.card');await p.waitForTimeout(1500);await p.screenshot({path:'r_d3.png'});R.ficha=await p.evaluate(()=>document.getElementById('drawer').classList.contains('open'));R.errs_d=errs;
 ({p,errs}=await page(b,{width:390,height:844}));await p.screenshot({path:'r_m1.png'});
 R.hscroll=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth||document.body.scrollWidth>innerWidth);
 R.over=await p.evaluate(()=>[...document.querySelectorAll('header *,.panel *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.right>innerWidth+1}).map(e=>e.tagName+'.'+e.className).slice(0,8));
 await p.click('#handle');await p.waitForTimeout(800);await p.screenshot({path:'r_m2.png'});
 await p.click('.card');await p.waitForTimeout(1200);await p.screenshot({path:'r_m3.png'});R.errs_m=errs;
 ({p,errs}=await page(b,{width:1280,height:800},{reduce:true}));const r1=await p.evaluate(()=>__radar.angle);await p.waitForTimeout(1000);R.reduce_parado=r1===await p.evaluate(()=>__radar.angle);
 console.log(JSON.stringify(R));await b.close()})();
