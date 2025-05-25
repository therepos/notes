import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="This is a sample Docusaurus homepage"
    >
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to My Docs Site</h1>
        <p>This page is built using Docusaurus.</p>
        <Link to="/docs/home/">
          <button>Get Started</button>
        </Link>        
      </main>
    </Layout>
  );
}
