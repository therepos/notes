// src/theme/EditThisPage/index.js
// https://emojipedia.org/

import React from 'react';

export default function EditThisPage({ editUrl }) {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Edit this page"
      style={{
        color: '#aaa',
        textDecoration: 'none',
        fontSize: '1rem',
        paddingLeft: '1rem',
        display: 'inline-block',
      }}
    >
    📝
    </a>
  );
}
