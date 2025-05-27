import React from 'react';

export default function EditThisPage({ editUrl }) {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Edit this page"
      style={{
        textDecoration: 'none',
        paddingLeft: '1rem',
        display: 'inline-block',
      }}
    >
      <span className="material-symbols-outlined">edit_square</span>
    </a>
  );
}
