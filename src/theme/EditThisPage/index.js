import React from 'react';

export default function EditThisPage({ editUrl }) {
  if (!editUrl) return null;

  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="edit-link"
      title="Edit this page"
    >
      Last updated
    </a>
  );
}
