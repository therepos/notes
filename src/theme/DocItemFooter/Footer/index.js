import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { lastUpdatedAt } = metadata;

  if (!lastUpdatedAt) return null;

  const formattedDate = new Date(lastUpdatedAt * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <span className="last-updated-date">{formattedDate}</span>
  );
}
