const {chromium}=require('playwright');const C='/tmp/claude-0/-home-user-loruki-website/9050e330-61be-5497-8005-eee144adc7e8/scratchpad/cdn/';
async function page(b,vp,reduce){const p=await b.newPage({viewport:vp,reducedMotion:reduce?'reduce':'no-preference',isMobile:vp.width<500,hasTouch:vp.width<500});const errs=[];
 p.on('console',m=>{if(m.type()==='error'&&!m.text().includes('CERT')&&!m.text().includes('Failed to load resource'))errs.push(m.text())});p.on('pageerror',e=>errs.push(e.message));
 await p.route('https://cdn.jsdelivr.net/**',r=>r.fulfill({path:C+r.request().url().split('/').pop(),contentType:'application/javascript'}));await p.route('https://fonts.**',r=>r.abort());
 await p.goto('http://localhost:8766/test.html');await p.waitForTimeout(4000);return {p,errs}}
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});const R={};
 let {p,errs}=await page(b,{width:1280,height:800});
 const a1=await p.evaluate(()=>window.__radar.angle);await p.screenshot({path:'d1.png'});await p.waitForTimeout(1500);const a2=await p.evaluate(()=>window.__radar.angle);
 R.gira=[a1.toFixed(2),a2.toFixed(2)];R.fps_desktop=await p.evaluate(()=>window.__radar.fps);
 await p.click('.card');await p.waitForTimeout(1500);await p.screenshot({path:'d2.png'});R.ficha=await p.evaluate(()=>document.getElementById('drawer').classList.contains('open'));
 await p.click('#close');await p.click('#mGal');await p.waitForTimeout(3000);await p.screenshot({path:'d3.png'});
 R.errs_desktop=errs;
 ({p,errs}=await page(b,{width:390,height:844}));await p.screenshot({path:'m1.png'});
 R.hscroll=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);R.fps_mobile=await p.evaluate(()=>window.__radar.fps);
 await p.click('#sheet');await p.waitForTimeout(800);await p.screenshot({path:'m2.png'});R.errs_mobile=errs;
 ({p,errs}=await page(b,{width:1280,height:800},true));const r1=await p.evaluate(()=>window.__radar.angle);await p.waitForTimeout(1200);R.reduce_parado=r1===await p.evaluate(()=>window.__radar.angle);
 R.exemplo_tag=await p.evaluate(()=>!!document.querySelector('.tag'));
 console.log(JSON.stringify(R,null,1));await b.close()})();
