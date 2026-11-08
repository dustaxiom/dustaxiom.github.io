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
      <p className="policyMeta">Effective November 8, 2026</p>
    </header>
    <div className="policyBody shell">
      <article lang="en">
        <p className="policyLead"><strong>Foxwick does not collect your name, email address, location, or contacts, and it has no account of its own.</strong> It is a single-player iPhone game published by DUSTAXIOM. Your progress stays on your device. The only data that leaves it is a record of a Full Journey purchase, described below.</p>
        <h2>Information we collect</h2>
        <p>When you buy or restore the Full Journey in-app purchase, a record of that purchase goes to RevenueCat, the service DUSTAXIOM uses to see its sales. The record includes the product, price, currency, date, App Store storefront, and transaction identifiers from Apple, plus a random identifier that RevenueCat creates for this install. It also includes basic technical details: app version, iOS version, device model, and language. It is not linked to your name, email address, or Apple Account, and it is not used for advertising or tracking. Foxwick does not collect how you play, and it asks for no permissions.</p>
        <h2>Data stored on your device</h2>
        <p>Your class, cleared stages, defeated bosses, Embers, skills, charms, medals, last campfire, and settings (music, sound effects, haptics, damage numbers) are saved on your iPhone so Continue can bring you back. DUSTAXIOM never receives this data.</p>
        <h2>In-app purchase</h2>
        <p>Stages 1 to 10 are free. The Full Journey is a one-time in-app purchase that opens stages 11 to 20. Apple processes the payment; DUSTAXIOM never sees your payment details. Whether the Full Journey is open is decided by your Apple Account&apos;s purchases, so Restore Purchase works on any device signed in to it.</p>
        <h2>Game Center</h2>
        <p>If you are signed in to Game Center, Foxwick reports achievements and leaderboard scores to Apple&apos;s Game Center. Apple handles this data under its own privacy policy, and your Game Center profile may show it to friends or other players according to your Game Center settings. You can turn Game Center off in the Settings app.</p>
        <h2>Third parties</h2>
        <p>RevenueCat, Inc. processes the purchase records above on DUSTAXIOM&apos;s behalf, under its privacy policy at <a href="https://www.revenuecat.com/privacy/">revenuecat.com/privacy</a>. Apple processes payments, App Store data, and Game Center data under its own terms and privacy policies. Foxwick contains no advertising, no analytics of how you play, and no tracking, and it does not sell or share data with data brokers. The credit link in Settings opens a web page in your browser only when you tap it.</p>
        <h2>Retention and deletion</h2>
        <p>Saved progress stays on your iPhone until you start a new game or delete the app. Deleting Foxwick removes everything it stored on the device. Purchase records are kept while needed for sales reporting and accounting. To ask for the purchase records tied to your install to be deleted, email us with the date of the purchase.</p>
        <h2>Children&apos;s privacy</h2>
        <p>Foxwick does not knowingly collect personal information from children. The only data it sends is the purchase record described above, which does not identify the player.</p>
        <h2>Changes and contact</h2>
        <p>If the game&apos;s data practices change, this policy will be updated before the relevant release. For privacy questions or deletion requests, email <a href="mailto:everettjf@live.com">everettjf@live.com</a>.</p>
      </article>
    </div>
    <footer className="policyFooter shell">
      <p>© 2026 DUSTAXIOM</p>
      <Link href="/games/foxwick/">Back to Foxwick ↗</Link>
    </footer>
  </main>;
}
