import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Root({ children }) {
  const tabs = [
    { to: '/cisa/', label: 'CISA' },
    { to: '/psyche/', label: 'Psyche' },
  ];

  return (
    <Layout>
      <div style={{
        background: '#f8f9fa',
        padding: '0.5rem 1rem',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        gap: '1.5rem',
        fontWeight: 600,
      }}>
        {tabs.map((tab) => (
          <Link key={tab.to} to={tab.to}>
            {tab.label}
          </Link>
        ))}
      </div>
      {children}
    </Layout>
  );
}
