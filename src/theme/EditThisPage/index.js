// src/theme/EditThisPage/index.js
// https://emojipedia.org/

// import React from 'react';

// export default function EditThisPage({ editUrl }) {
//   return (
//     <a
//       href={editUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       title="Edit this page"
//       style={{
//         color: '#aaa',
//         textDecoration: 'none',
//         fontSize: '1rem',
//         paddingLeft: '1rem',
//         display: 'inline-block',
//         filter: 'grayscale(100%)',
//       }}
//     >
//       📝
//     </a>
//   );
// }

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ verticalAlign: 'middle' }}
      >
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
      </svg>
    </a>
  );
}
