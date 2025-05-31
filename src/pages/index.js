import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Welcome" description="Landing page for Notes">
      <main className="landing-main">
        <h1 className="landing-title">Welcome to Notes</h1>
        <div className="landing-card-grid">
          <Link className="landing-card" to="/Home">
            <h2>Home</h2>
            <p>General resources, quick notes, and documentation.</p>
          </Link>
          <Link className="landing-card" to="/Cisa">
            <h2>CISA</h2>
            <p>Study notes and materials for the CISA exam.</p>
          </Link>
          <Link className="landing-card" to="/blog">
            <h2>Blog</h2>
            <p>Latest posts, updates, and articles.</p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
