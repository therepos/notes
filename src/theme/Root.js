import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const location = useLocation();
  const pathname = location.pathname;

  const showTabs =
    pathname.startsWith('/cisa') ||
    pathname.startsWith('/fitness') ||
    pathname.startsWith('/psyche');

  const tabs = [
    { to: '/cisa/', label: 'CISA' },
    { to: '/fitness/', label: 'Fitness' },
    { to: '/psyche/', label: 'Psyche' },
  ];

  return (
    <>
      {showTabs && (
        <div
          style={{
            background: '#f8f9fa',
            padding: '0.5rem 1rem',
            borderBottom: '1px solid #ddd',
            display: 'flex',
            gap: '1.5rem',
            fontWeight: 600,
          }}
        >
          {tabs.map((tab) => (
            <a key={tab.to} href={tab.to}>
              {tab.label}
            </a>
          ))}
        </div>
      )}
      {children}
    </>
  );
}
