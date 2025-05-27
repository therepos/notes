// src/theme/EditThisPage/index.js

import React from 'react';

export default function EditThisPage({ editUrl }) {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Edit this page"
      style={{ textDecoration: 'none', fontSize: '1rem' }}
    >
      ✏️
    </a>
  );
}
