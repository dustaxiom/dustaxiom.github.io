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
        <p>Drag anywhere on the left half of the screen to move; flick up on the stick to jump. On the right: Strike, Roll, Jump, and Mending Vial. Hold Strike to charge a heavy blow as the Samurai or Mage. Near a campfire with no enemies close by, Strike becomes Rest.</p>
        <h2>Campfires and Embers</h2>
        <p>Resting at a campfire saves your progress and refills your vials, and it also brings every monster in the stage back. If you fall, your Embers stay where you dropped them: return to that spot to recover them.</p>
        <h2>Saving and starting over</h2>
        <p>Progress saves on your iPhone automatically. Continue on the title screen returns you to your last campfire. New Game clears your campfires and defeated bosses. Progress does not sync between devices, and deleting the app removes it.</p>
        <h2>Settings</h2>
        <p>Tap the gear on the title screen to turn music, sound effects, haptics, and damage numbers on or off. Foxwick also follows Reduce Motion in iOS Settings, which removes screen shake and knockback.</p>
        <h2>Requirements</h2>
        <p>iPhone with iOS 26 or later. Foxwick plays in landscape and works fully offline.</p>
      </article>
    </div>
    <footer className="policyFooter shell">
      <p>© 2026 DUSTAXIOM</p>
      <Link href="/games/foxwick/">Back to Foxwick ↗</Link>
    </footer>
  </main>;
}
