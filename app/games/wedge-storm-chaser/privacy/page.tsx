import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wedge Storm Chaser Privacy Policy — DUSTAXIOM',
  description: 'Privacy policy for Wedge Storm Chaser, a single-player game by DUSTAXIOM.',
};

export default function PrivacyPolicyPage() {
  return <main className="policyPage" style={{ '--game-accent': '#ff7048' } as CSSProperties}>
    <nav className="nav shell">
      <Link className="wordmark" href="/"><span>DUST</span><span>AXIOM</span></Link>
      <div className="navLinks"><Link href="/games/wedge-storm-chaser/">Wedge Storm Chaser</Link></div>
    </nav>
    <header className="policyHeader shell">
      <p className="worldCode">WORLD 002<i/>LEGAL</p>
      <h1>Privacy<br/><em>Policy</em></h1>
      <p>Wedge Storm Chaser / 楔形风暴追击者</p>
      <p className="policyMeta">Effective August 26, 2026 · 生效日期：2026 年 8 月 26 日</p>
    </header>
    <div className="policyBody shell">
      <article lang="en">
        <p className="policyLead"><strong>Wedge Storm Chaser does not collect, store, or transmit personal information.</strong> It is a single-player game published by DUSTAXIOM.</p>
        <h2>Information we collect</h2>
        <p>We do not collect personal data, including names, email addresses, phone numbers, locations, device identifiers, contacts, photos, microphone data, or camera data. The game does not request access to these resources.</p>
        <h2>Data stored on your device</h2>
        <p>Settings, accessibility preferences, mission progress, career statistics, and achievements are stored locally on your device so the game can function. DUSTAXIOM does not receive this local data. Uninstalling the game may remove it.</p>
        <h2>Network services and third parties</h2>
        <p>The game has no DUSTAXIOM accounts or servers, advertising, in-app purchases, analytics, or tracking technologies. The Microsoft Store, Steam where applicable, and your operating system may process information independently under their own terms and privacy policies.</p>
        <h2>Children&apos;s privacy</h2>
        <p>Because the game does not collect personal information from any user, it does not knowingly collect personal information from children.</p>
        <h2>Changes and contact</h2>
        <p>If the game&apos;s data practices change, this policy will be updated before the relevant release. For privacy or support questions, visit the <Link href="/games/wedge-storm-chaser/">Wedge Storm Chaser website</Link>.</p>
      </article>
      <article lang="zh-CN">
        <p className="policyLead"><strong>《Wedge Storm Chaser》不会收集、保存或传输任何个人信息。</strong>这是一款由 DUSTAXIOM 发布的单人游戏。</p>
        <h2>我们收集的信息</h2>
        <p>我们不收集任何个人数据，包括姓名、电子邮件地址、电话号码、位置、设备标识符、联系人、照片、麦克风或相机数据。游戏不会请求访问这些资源。</p>
        <h2>设备本地数据</h2>
        <p>为了让游戏正常运行，设置、无障碍偏好、任务进度、生涯统计和成就数据会保存在你的设备本地。DUSTAXIOM 不会收到这些本地数据。卸载游戏可能会删除这些数据。</p>
        <h2>网络服务与第三方</h2>
        <p>游戏没有 DUSTAXIOM 账号或服务器、广告、应用内购买、分析或追踪技术。Microsoft Store、适用情况下的 Steam 以及操作系统可能依据各自的条款和隐私政策独立处理信息。</p>
        <h2>儿童隐私</h2>
        <p>由于游戏不会收集任何用户的个人信息，因此也不会有意收集儿童的个人信息。</p>
        <h2>政策变更与联系</h2>
        <p>如果游戏的数据处理方式发生变化，我们会在相关版本发布前更新本政策。如有隐私或支持问题，请访问<Link href="/games/wedge-storm-chaser/">《Wedge Storm Chaser》官方网站</Link>。</p>
      </article>
    </div>
    <footer className="policyFooter shell">
      <p>© 2026 DUSTAXIOM</p>
      <Link href="/games/wedge-storm-chaser/">Back to Wedge Storm Chaser ↗</Link>
    </footer>
  </main>;
}
