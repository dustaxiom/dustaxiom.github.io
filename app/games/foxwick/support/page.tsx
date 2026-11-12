import type { Metadata } from 'next';

const target = 'https://atomsprout.com/cinderwick/support/';

export const metadata: Metadata = {
  title: 'Cinderwick support has moved',
  description: 'Cinderwick (formerly Foxwick) now lives on the AtomSprout website.',
  alternates: { canonical: target },
  robots: { index: false },
};

/** Foxwick became Cinderwick and moved to atomsprout.com; older app builds still link here. */
export default function Moved() {
  return <main className="shell" style={{ padding: '20vh 0' }}>
    <meta httpEquiv="refresh" content={`0;url=${target}`} />
    <p>Cinderwick (formerly Foxwick) has moved to <a href={target}>{target.replace('https://', '')}</a>.</p>
  </main>;
}
