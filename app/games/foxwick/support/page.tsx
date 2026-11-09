import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Foxwick Support — DUSTAXIOM',
  description: 'Help, controls, and contact for Foxwick, a pixel action game for iPhone by DUSTAXIOM.',
};

export default function SupportPage() {
  return <main className="policyPage" style={{ '--game-accent': '#f08a3c' } as CSSProperties}>
    <nav className="nav shell">
      <Link className="wordmark" href="/"><span>DUST</span><span>AXIOM</span></Link>
      <div className="navLinks"><Link href="/games/foxwick/">Foxwick</Link><Link href="/games/foxwick/privacy/">Privacy</Link></div>
    </nav>
    <header className="policyHeader shell">
      <p className="worldCode">WORLD 004<i/>SUPPORT</p>
      <h1>Foxwick<br/><em>Support</em></h1>
      <p>Help, controls, and contact</p>
    </header>
    <div className="policyBody shell">
      <article lang="en">
        <p className="policyLead"><strong>Need help?</strong> Email <a href="mailto:everettjf@live.com?subject=Foxwick%20Support">everettjf@live.com</a> with your iPhone model, iOS version, and what happened. We usually reply within two business days.</p>
        <h2>Controls</h2>
        <p>Drag anywhere on the left half of the screen to move; push the stick up (or up and to either side) to jump. On the right: Attack, Roll, Mending Vial, three skill buttons, and the gold Ultimate button, which fills as you fight and glows when it is ready. Hold Attack to charge a heavy blow as the Samurai or Mage; the Assassin deals double damage when striking from behind. Near a campfire with no enemies close by, Attack becomes Rest.</p>
        <h2>Skills, charms and the Camp</h2>
        <p>Skill tomes lie along the road; picking one up teaches a new skill. Tap Camp on the Stage Map, or rest at a campfire, to choose your three skills, raise their ranks, wear charms, and trade Embers at the fox&apos;s wares. Every boss you beat also gives a free skill rank. The Journal on the title screen keeps the bestiary, achievements, and records.</p>
        <h2>Modes</h2>
        <p>The Ember Trial and the Daily Trial open after the stage 3 boss, and the Boss Rush opens after the Bell Tower boss. Beat the Sunheart at stage 20 (part of the Full Journey) to begin New Journey+, which keeps your hero and makes every foe tougher.</p>
        <h2>Campfires and Embers</h2>
        <p>Resting at a campfire saves your progress and refills your vials, and it also brings every monster in the stage back. If you fall, your Embers stay where you dropped them: return to that spot to recover them.</p>
        <h2>Saving and starting over</h2>
        <p>Progress saves on your iPhone automatically. Continue on the title screen returns you to your last campfire. New Game clears your campfires and defeated bosses. Progress does not sync between devices, and deleting the app removes it.</p>
        <h2>The Full Journey</h2>
        <p>Stages 1 to 10, through the Bell Tower Summit, are free. The Full Journey is a one-time in-app purchase that opens stages 11 to 20, the twenty-boss Rush, New Journey+, and the deepest Ember Trial bosses. Open it from the gold Full Journey button on the second page of the Stage Map, or from stage 11 once the Bell Tower boss is down.</p>
        <p>Bought it on another iPhone, or reinstalled Foxwick? Tap the gear on the title screen and choose Restore Purchases, signed in to the same Apple Account. Apple handles payments and refunds: to ask for a refund, visit <a href="https://reportaproblem.apple.com/">reportaproblem.apple.com</a>.</p>
        <h2>Game Center</h2>
        <p>If you are signed in to Game Center, Foxwick reports 26 achievements and three leaderboards (Ember Trial depth and both Boss Rush times). Game Center is optional; turning it off in the Settings app changes nothing else in the game.</p>
        <h2>Settings</h2>
        <p>Tap the gear on the title screen to turn music, sound effects, haptics, and damage numbers on or off. Foxwick also follows Reduce Motion in iOS Settings, which removes screen shake and knockback.</p>
        <h2>Requirements</h2>
        <p>iPhone with iOS 26 or later. Foxwick plays in landscape and works fully offline; buying or restoring the Full Journey needs an internet connection.</p>
      </article>
    </div>
    <footer className="policyFooter shell">
      <p>© 2026 DUSTAXIOM</p>
      <Link href="/games/foxwick/">Back to Foxwick ↗</Link>
    </footer>
  </main>;
}
