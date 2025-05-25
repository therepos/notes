import React from 'react';
import Layout from '@theme/Layout';
import DocCard from '@theme/DocCard';

const docCards = [
  {
    type: 'link',
    label: 'Home',
    href: '/home',
    description: 'Overview and essentials.',
  },
  {
    type: 'link',
    label: 'CISA',
    href: '/cisa',
    description: 'CISA learning and exam notes.',
  },
  {
    type: 'link',
    label: 'Blog',
    href: '/blog',
    description: 'Thoughts, updates, and more.',
  },
];

export default function Home() {
  return (
    <Layout title="Welcome" description="This is a sample Docusaurus homepage">
      <main className="homepage-container">
        <div className="row">
          {docCards.map((item, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <DocCard item={item} />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
