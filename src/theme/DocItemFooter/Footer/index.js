import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, formattedLastUpdatedAt } = metadata;

  if (!editUrl || !lastUpdatedAt) {
    return null;
  }

  return (
    <footer className={clsx('theme-doc-footer', 'docusaurus-mt-lg')}>
      <div
        className="theme-doc-footer-edit-meta-row"
        style={{ paddingLeft: 'var(--ifm-spacing-horizontal)' }}
      >
        <span className="theme-last-updated">
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="edit-link"
            title="Edit this page"
          >
            Last updated
          </a>{' '}
          <b>
            <time
              dateTime={new Date(lastUpdatedAt * 1000).toISOString()}
              itemProp="dateModified"
            >
              {formattedLastUpdatedAt}
            </time>
          </b>
        </span>
      </div>
    </footer>
  );
}
