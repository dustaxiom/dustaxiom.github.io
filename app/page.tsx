import Image from 'next/image';
import Link from 'next/link';

const games = [
  { slug: 'wedge-storm-chaser', title: 'Wedge Storm Chaser', type: 'Storm chasing simulation', image: '/games/wedge.jpg', accent: '#ff754d' },
  { slug: 'aether-barrage-omega', title: 'Aether Barrage: Omega', type: 'Arcade shoot ’em up', image: '/games/aether.jpg', accent: '#59e8ff' },
  { slug: 'fivefold-front', title: 'Fivefold Front', type: 'Tactical card battler', image: '/games/fivefold.jpg', accent: '#e7ba63' },
  { slug: 'foxwick', title: 'Foxwick', type: 'Pixel action adventure · iPhone', image: '/games/foxwick.jpg', accent: '#f08a3c' },
];

export default function Home() {
  return <main>
    <nav className="nav shell"><Link className="wordmark" href="/"><span>DUST</span><span>AXIOM</span></Link><div className="navLinks"><a href="#worlds">Worlds</a><a href="#axiom">Axiom</a><a href="mailto:everettjf@live.com">Contact</a></div></nav>
    <section className="hero shell">
      <div className="eyebrow"><span /> Independent game studio</div>
      <h1>From simple rules,<br /><em>infinite worlds.</em></h1>
      <p className="heroCopy">Every world begins with dust and a few simple rules.</p>
      <a className="scrollCue" href="#worlds"><span>Explore our worlds</span><b>↓</b></a>
      <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
      <div className="energyLine" aria-hidden="true" />
      <div className="dustField" aria-hidden="true">{Array.from({length:18},(_,i)=><span key={i} />)}</div>
    </section>
    <section className="worlds shell" id="worlds">
      <div className="sectionLabel"><span>01</span><p>Selected worlds</p></div>
      <div className="gameGrid">{games.map((game, i) => <Link className="gameCard" href={`/games/${game.slug}`} key={game.slug} style={{'--accent': game.accent} as React.CSSProperties}>
        <div className="gameImage"><Image src={game.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /><i className="cardSweep"/><span className="cardIndex">0{i + 1}</span></div>
        <div className="cardMeta"><div><p>{game.type}</p><h2>{game.title}</h2></div><span className="arrow">↗</span></div>
      </Link>)}</div>
    </section>
    <section className="manifesto shell" id="axiom">
      <div className="sectionLabel"><span>02</span><p>Our axiom</p></div>
      <div className="manifestoGrid"><p className="formula">MATTER <i>×</i> RULES <i>→</i> WORLD</p><div><h2>Small beginnings.<br />Unbounded possibility.</h2><p>We make focused games where clear systems collide with player curiosity. Particles become pixels. Rules become play. Play becomes a world that belongs to you.</p></div></div>
    </section>
    <footer className="homeFooter shell"><p>DUSTAXIOM</p><div><span>Matter. Particles. Possibility.</span><span>Rules. Structure. Order.</span></div><div className="homeFooterLinks"><Link href="/games/wedge-storm-chaser/privacy/">Privacy</Link><a href="mailto:everettjf@live.com">everettjf@live.com ↗</a></div></footer>
  </main>;
}
