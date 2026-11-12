import fs from 'node:fs';
import path from 'node:path';
const routes = {'':'/games/','games/foxwick':'/foxwick/','games/foxwick/privacy':'/foxwick/privacy/','games/foxwick/support':'/foxwick/support/'};
for (const slug of ['wedge-storm-chaser','aether-barrage-omega','fivefold-front']) {
  routes[`games/${slug}`] = `/${slug}/`;
  routes[`games/${slug}/privacy`] = `/${slug}/privacy/`;
}
for (const out of ['out','dist']) {
  fs.rmSync(out,{recursive:true,force:true});
  for (const [route,destination] of Object.entries(routes)) {
    const target = 'https://atomsprout.com'+destination;
    const file = path.join(out,route,'index.html'); fs.mkdirSync(path.dirname(file),{recursive:true});
    fs.writeFileSync(file,`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved to AtomSprout</title><meta name="robots" content="noindex"><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0;url=${target}"></head><body><a href="${target}">Continue to AtomSprout</a><script>location.replace(${JSON.stringify(target)}+location.search+location.hash)</script></body></html>`);
  }
  fs.writeFileSync(path.join(out,'.nojekyll'),'');
}
console.log('Redirect-only exports built for the retired game website.');
