import type { Metadata } from 'next';
import Link from 'next/link';
import './foxwick.css';

const intro = 'A pixel-art action game for iPhone. Choose a Samurai, Mage, or Assassin, read every wind-up, and carry the light through twenty stages, from the Glimmer Fields to the surface of the Sun. The first ten are free.';

export const metadata: Metadata = {
  title: 'Foxwick: Carry the Light — Pixel action for iPhone',
  description: intro,
  openGraph: { title: 'Foxwick: Carry the Light', description: intro, images: ['/games/foxwick-hero.jpg'] },
  twitter: { card: 'summary_large_image', title: 'Foxwick: Carry the Light', description: intro, images: ['/games/foxwick-hero.jpg'] },
};

// Flip to the live listing once Apple releases the app.
const appStore = { live: true, url: 'https://apps.apple.com/us/app/foxwick/id6828063453' };

const classes = [
  { id: 'samurai', name: 'Samurai', title: 'The Bladebearer', line: 'Steady steps, clean cuts. A charged blow cleaves a whole crowd.', color: '#D9482B', stats: { HP: 4, STA: 3, MOV: 3 } },
  { id: 'mage', name: 'Mage', title: 'The Flamecaller', line: 'Keep your distance and send the fire. Charged bolts burn through lines.', color: '#A78BDB', stats: { HP: 2, STA: 3, MOV: 2 } },
  { id: 'assassin', name: 'Assassin', title: 'The Shadowstep', line: 'Quick feet. Never be where it lands. Backstabs deal double damage.', color: '#5FA37A', stats: { HP: 2, STA: 4, MOV: 5 } },
];

const stages = [
  ['Glimmer Fields', 'Straw Sentinel', 'First thing to wake in the field.'],
  ['Whisper Woods', 'Old Oakheart', 'The oldest tree remembers every fire.'],
  ['Sunken Bell Road', 'Rustplate Warden', 'It still guards a road that is gone.'],
  ['Molten Quarry', 'Cinder Colossus', 'Slag and ember, shaped like a giant.'],
  ['Mirrormist Lake', 'Mist Weaver', 'It spins the fog into a net.'],
  ['Broken Bridge Canyon', 'Twinblade Knight', 'Two swords, one old oath.'],
  ['Frostfall Ridge', 'Frostfang King', 'The snow falls where it walks.'],
  ['Upside-Down Halls', 'Faceless Scribe', 'It writes the ending before you arrive.'],
  ['Lamplit Citadel', 'Lantern King', 'A thousand lamps, one cold crown.'],
  ['Bell Tower Summit', 'The Bellkeeper', 'The last bell waits to be rung.'],
  ['Steamvent Basin', 'Geyser Warden', 'It keeps the water hot and the visitors away.'],
  ['Giantwood Grove', 'Ironbark Ranger', 'Older than the trail, and still walking it.'],
  ['The Great Canyon', 'Mesa Titan', 'The canyon was its footprint.'],
  ['Windward Plateau', 'Stormhorn', 'Where it grazes, the thunder follows.'],
  ['Aurora Peak', 'Aurora Herald', 'It hangs the lights at the top of the world.'],
  ['The Quiet Moon', 'Moon Hare Knight', 'It has guarded the Moon since before the first fire.'],
  ['Red Mars', 'Dust Tyrant', 'Red storms are its crown and its court.'],
  ['Venus Veil', 'Veil Siren', 'Its song is warm, and the clouds are acid.'],
  ['Mercury Dawnline', 'Quicksilver Duelist', 'First to the Sun, every morning.'],
  ['Surface of the Sun', 'The Sunheart', 'The first fire. It wants to meet the last.'],
];

const chapters = [
  { name: 'The Bell Road', from: 1, to: 10, tag: 'Free' },
  { name: 'Wonders of the World', from: 11, to: 15, tag: 'Full Journey' },
  { name: 'Toward the Sun', from: 16, to: 20, tag: 'Full Journey' },
];

const modes = [
  { title: 'Skills and ultimates', body: 'Skill tomes wait along the road: ten skills for each class. Equip three, raise them to rank III, and fill the gauge to unleash a screen-filling ultimate won from bosses.' },
  { title: 'Charms, medals and the fox\u2019s camp', body: 'Every boss you beat gives a free skill rank. Earn up to three medals a stage, win charms, and spend Embers at the fox\u2019s shop.' },
  { title: 'Boss Rush', body: 'Fight the bosses back to back against the clock: the Bell Road\u2019s ten, or all twenty with the Full Journey.' },
  { title: 'Ember Trial and Daily Trial', body: 'Endless rooms that grow harder the deeper you go, and one shared seed a day for everyone.' },
  { title: 'New Journey+', body: 'Clear all twenty stages with the Full Journey, then set out again with your level, skills and charms against tougher foes.' },
  { title: 'Game Center', body: '26 achievements and three leaderboards, if you want them. Foxwick plays just the same without.' },
];

const features = [
  { shot: '/games/foxwick/shot-3.jpg', kicker: 'Read', title: 'Every strike has a tell', body: 'Enemies and bosses wind up before they swing. Learn the tell, roll through the blow, jump the shockwave, and punish the opening it leaves.' },
  { shot: '/games/foxwick/shot-2.jpg', kicker: 'Feel', title: 'Hits that land', body: 'Hit-stop, sparks, screen shake and haptics on every blow, with heavier weight on charged strikes and boss hits. Reduce Motion is respected.' },
  { shot: '/games/foxwick/shot-1.jpg', kicker: 'Rest', title: 'Carry the light', body: 'Campfires save your progress and refill your Mending Vials, but resting brings every monster back. Fall, and your Embers wait where you dropped them.' },
];

const shots = [2, 3, 4, 5, 6, 1].map(i => `/games/foxwick/shot-${i}.jpg`);

function StoreButton({ big = false }: { big?: boolean }) {
  const label = <><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z"/></svg><span><small>{appStore.live ? 'Download on the' : 'Coming soon to the'}</small>App Store</span></>;
  return appStore.live
    ? <a className={`fxStore${big ? ' fxStoreBig' : ''}`} href={appStore.url}>{label}</a>
    : <span className={`fxStore fxStoreSoon${big ? ' fxStoreBig' : ''}`}>{label}</span>;
}

function Bars({ n, color }: { n: number; color: string }) {
  return <span className="fxBars" aria-label={`${n} of 5`}>{[0, 1, 2, 3, 4].map(i => <i key={i} style={i < n ? { background: color } : undefined} />)}</span>;
}

export default function FoxwickPage() {
  return <main className="fx">
    <header className="fxNav">
      <div className="fxWrap fxNavInner">
        <a className="fxBrand" href="#top"><img src="/games/foxwick/icon.png" alt="" width={36} height={36} />Foxwick</a>
        <nav aria-label="Foxwick"><a href="#trailer">Trailer</a><a href="#classes">Classes</a><a href="#stages">Stages</a><a href="#modes">Modes</a><Link href="/games/foxwick/support/">Support</Link></nav>
        <StoreButton />
      </div>
    </header>

    <section className="fxHero" id="top">
      <div className="fxSky" aria-hidden="true"><span className="fxMoon" /><span className="fxStars" /><span className="fxStars fxStars2" /><span className="fxRidge fxRidgeFar" /><span className="fxRidge fxRidgeNear" /><span className="fxGround" /></div>
      <div className="fxWrap fxHeroInner">
        <p className="fxKicker">Pixel action · iPhone</p>
        <h1 className="fxLogo">Foxwick</h1>
        <p className="fxTagline">Carry the light.</p>
        <p className="fxLede">Three classes. Twenty stages. Twenty bosses. Read every wind-up, roll through the swing, and strike in the opening.</p>
        <div className="fxCtas"><StoreButton big /><a className="fxGhost" href="#trailer">▶ Watch the trailer</a></div>
      </div>
      <div className="fxCamp" aria-hidden="true"><span className="fxGlow" /><img className="fxFire" src="/games/foxwick/campfire.png" alt="" /><img className="fxFox" src="/games/foxwick/fox.png" alt="" /></div>
    </section>

    <section className="fxSection fxTrailer" id="trailer">
      <div className="fxWrap">
        <div className="fxHead"><p className="fxKicker">Trailer</p><h2>Thirty seconds in the field</h2></div>
        <div className="fxScreen"><video src="/games/foxwick-trailer.mp4" poster="/games/foxwick-trailer-poster.jpg" autoPlay muted loop playsInline controls preload="metadata" aria-label="Foxwick trailer" /></div>
        <p className="fxNote">Captured in game · tap the video for sound</p>
      </div>
    </section>

    <section className="fxSection" id="classes">
      <div className="fxWrap">
        <div className="fxHead"><p className="fxKicker">Choose your class</p><h2>Same simple controls.<br />Three ways to fight.</h2></div>
        <div className="fxClasses">
          {classes.map(c => <article className="fxCard" key={c.id} style={{ '--c': c.color } as React.CSSProperties}>
            <div className="fxPortrait"><img src={`/games/foxwick/hero-${c.id}.png`} alt={`${c.name} sprite`} width={144} height={128} /></div>
            <h3>{c.name}</h3>
            <p className="fxEpithet">{c.title}</p>
            <p className="fxLine">{c.line}</p>
            <dl className="fxStats">{Object.entries(c.stats).map(([k, v]) => <div key={k}><dt>{k}</dt><dd><Bars n={v} color={k === 'HP' ? '#A62E2B' : k === 'STA' ? '#E8DFCC' : '#E0B85A'} /></dd></div>)}</dl>
          </article>)}
        </div>
      </div>
    </section>

    <section className="fxSection fxFeatures">
      <div className="fxWrap">
        {features.map((f, i) => <article className={`fxFeature${i % 2 ? ' fxFlip' : ''}`} key={f.title}>
          <div className="fxShot"><img src={f.shot} alt={f.title} loading="lazy" /></div>
          <div className="fxCopy"><p className="fxKicker">{f.kicker}</p><h2>{f.title}</h2><p>{f.body}</p></div>
        </article>)}
      </div>
    </section>

    <section className="fxSection fxStagesSec" id="stages">
      <div className="fxWrap">
        <div className="fxHead"><p className="fxKicker">The road to dawn</p><h2>Twenty stages. Twenty bosses.</h2><p className="fxSub">Each stage ends with a boss that has its own moves and phases. Beat it to light the way to the next. The Bell Road is free; the Full Journey, a one-time purchase, opens the road past the Bell Tower.</p></div>
        {chapters.map(ch => <div key={ch.name}>
          <div className="fxChapter"><h3>{ch.name}</h3><span className={ch.from === 1 ? 'fxFree' : undefined}>{ch.tag}</span></div>
          <ol className="fxStages">
            {stages.slice(ch.from - 1, ch.to).map(([stage, boss, line], i) => <li key={stage}><span className="fxNum">{String(ch.from + i).padStart(2, '0')}</span><div><h3>{stage}</h3><p><b>{boss}</b> · {line}</p></div></li>)}
          </ol>
        </div>)}
      </div>
    </section>

    <section className="fxSection" id="modes">
      <div className="fxWrap">
        <div className="fxHead"><p className="fxKicker">More roads to run</p><h2>Grow your fighter.<br />Then test it.</h2></div>
        <div className="fxModes">
          {modes.map(m => <article key={m.title}><h3>{m.title}</h3><p>{m.body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="fxSection fxGallerySec">
      <div className="fxWrap"><div className="fxHead"><p className="fxKicker">Screenshots</p><h2>Inside Foxwick</h2></div></div>
      <div className="fxGallery" tabIndex={0} aria-label="Screenshots, scroll sideways">
        {shots.map((s, i) => <img key={s} src={s} alt={`Foxwick screenshot ${i + 1}`} loading="lazy" />)}
      </div>
    </section>

    <section className="fxSection fxPromise">
      <div className="fxWrap">
        <ul>{['Stages 1–10 free', 'One-time Full Journey', 'No ads', 'No subscriptions', 'No tracking', 'No account', 'Plays offline'].map(t => <li key={t}>{t}</li>)}</ul>
        <div className="fxFinal">
          <img src="/games/foxwick/icon.png" alt="Foxwick app icon" width={112} height={112} />
          <h2>Light the campfire.</h2>
          <StoreButton big />
        </div>
      </div>
    </section>

    <footer className="fxFooter">
      <div className="fxWrap fxFooterInner">
        <p>© 2026 <Link href="/">DUSTAXIOM</Link></p>
        <nav aria-label="Footer"><Link href="/games/foxwick/support/">Support</Link><Link href="/games/foxwick/privacy/">Privacy policy</Link><Link href="/#worlds">More games</Link></nav>
      </div>
    </footer>
  </main>;
}
