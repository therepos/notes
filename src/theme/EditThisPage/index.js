import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';

export default function EditThisPage() {
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
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="theme-last-updated"
      title="Edit this page"
    >
      Last updated on <b>{formattedDate}</b>
    </a>
  );
}
