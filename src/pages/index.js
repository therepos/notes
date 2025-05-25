import React from 'react';
import Layout from '@theme/Layout';
import DocCard from '@theme/DocCard';

const docCards = [
  {
    type: 'link',
    label: 'Home',
    href: '/notes/docs/home', // Adjust path if routeBasePath is 'docs'
    description: 'Overview and essentials.',
  },
  {
    type: 'link',
    label: 'CISA',
    href: '/notes/docs/cisa',
    description: 'CISA learning and exam notes.',
  },
  {
    type: 'link',
    label: 'Blog',
    href: '/notes/blog',
    description: 'Thoughts, updates, and more.',
  },
];

export default function Home() {
  return (
    <Layout title="Welcome" description="Landing page with quick links">
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
