import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Foxwick Privacy Policy — DUSTAXIOM',
  description: 'Privacy policy for Foxwick, a single-player iPhone game by DUSTAXIOM.',
};

export default function PrivacyPolicyPage() {
  return <main className="policyPage" style={{ '--game-accent': '#f08a3c' } as CSSProperties}>
    <nav className="nav shell">
      <Link className="wordmark" href="/"><span>DUST</span><span>AXIOM</span></Link>
      <div className="navLinks"><Link href="/games/foxwick/">Foxwick</Link><Link href="/games/foxwick/support/">Support</Link></div>
    </nav>
    <header className="policyHeader shell">
      <p className="worldCode">WORLD 004<i/>LEGAL</p>
      <h1>Privacy<br/><em>Policy</em></h1>
      <p>Foxwick</p>
      <p className="policyMeta">Effective October 28, 2026</p>
    </header>
    <div className="policyBody shell">
      <article lang="en">
        <p className="policyLead"><strong>Foxwick does not collect, store, or transmit personal information.</strong> It is a single-player iPhone game published by DUSTAXIOM, and your progress stays on your device.</p>
        <h2>Information we collect</h2>
        <p>None. Foxwick has no accounts, no sign-in, and no servers. It does not collect your name, email address, location, device identifiers, contacts, photos, or how you play, and it asks for no permissions.</p>
        <h2>Data stored on your device</h2>
        <p>Your class, cleared stages, defeated bosses, Embers, last campfire, and settings (music, sound effects, haptics, damage numbers) are saved on your iPhone so Continue can bring you back. DUSTAXIOM never receives this data.</p>
        <h2>Network services and third parties</h2>
        <p>Foxwick contains no advertising, analytics, tracking, in-app purchases, or third-party SDKs, and the game makes no network requests. The credit link in Settings opens a web page in your browser only when you tap it. Apple and the App Store may process information independently under their own terms and privacy policies.</p>
        <h2>Retention and deletion</h2>
        <p>Saved progress stays on your iPhone until you start a new game or delete the app. Deleting Foxwick removes everything it stored. There is nothing for us to delete, because we never receive it.</p>
        <h2>Children&apos;s privacy</h2>
        <p>Because Foxwick does not collect personal information from any user, it does not knowingly collect personal information from children.</p>
        <h2>Changes and contact</h2>
        <p>If the game&apos;s data practices change, this policy will be updated before the relevant release. For privacy questions, email <a href="mailto:everettjf@live.com">everettjf@live.com</a>.</p>
      </article>
    </div>
    <footer className="policyFooter shell">
      <p>© 2026 DUSTAXIOM</p>
      <Link href="/games/foxwick/">Back to Foxwick ↗</Link>
    </footer>
  </main>;
}
