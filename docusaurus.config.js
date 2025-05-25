import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Welcome" description="Landing page with links">
      <main className="homepage-container">
        <div className="row">
          <div className="col col--4">
            <h3><Link to="/docs/home">Home</Link></h3>
            <p>Overview and essentials.</p>
          </div>
          <div className="col col--4">
            <h3><Link to="/docs/cisa">CISA</Link></h3>
            <p>CISA learning and exam notes.</p>
          </div>
          <div className="col col--4">
            <h3><Link to="/blog">Blog</Link></h3>
            <p>Thoughts, updates, and more.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
