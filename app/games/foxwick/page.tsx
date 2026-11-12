import type { Metadata } from 'next';

const target = 'https://atomsprout.com/foxwick/';

export const metadata: Metadata = {
  title: 'Foxwick has moved',
  description: 'Foxwick now lives on the AtomSprout website.',
  alternates: { canonical: target },
  robots: { index: false },
};

/** Foxwick moved to atomsprout.com; older app builds still link here. */
export default function Moved() {
  return <main className="shell" style={{ padding: '20vh 0' }}>
    <meta httpEquiv="refresh" content={`0;url=${target}`} />
    <p>Foxwick has moved to <a href={target}>{target.replace('https://', '')}</a>.</p>
  </main>;
}
