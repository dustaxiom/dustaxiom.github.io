import type { Metadata } from 'next';
import './globals.css';
import './game.css';
import './motion.css';
import './cosmic.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dustaxiom.github.io'),
  title: 'DUSTAXIOM — From simple rules, infinite worlds.',
  description: 'An independent game studio creating infinite worlds from simple rules.',
  openGraph: {
    title: 'DUSTAXIOM — From simple rules, infinite worlds.',
    description: 'An independent game studio creating infinite worlds from simple rules.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DUSTAXIOM — From simple rules, infinite worlds.',
    description: 'An independent game studio creating infinite worlds from simple rules.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="cosmicEvents" aria-hidden="true">
          <div className="distantGalaxy galaxyOne"><i /><i /><i /></div>
          <div className="distantGalaxy galaxyTwo"><i /><i /></div>
          <span className="comet cometOne" />
          <span className="comet cometTwo" />
          <span className="comet cometThree" />
        </div>
        {children}
      </body>
    </html>
  );
}
