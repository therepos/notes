import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt } = metadata;

  if (!editUrl || !lastUpdatedAt) {
    return null;
  }

  const formattedDate = new Date(lastUpdatedAt * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className={clsx('theme-doc-footer', 'docusaurus-mt-lg')}>
      <div className="theme-doc-footer-edit-meta-row" style={{ paddingLeft: 'var(--ifm-spacing-horizontal)' }}>
        <a
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-last-updated"
          title="Edit this page"
        >
          Last updated on <b>{formattedDate}</b>
        </a>
      </div>
    </footer>
  );
}
