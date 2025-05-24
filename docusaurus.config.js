export default {
  title: 'Notes',
  tagline: 'Quick Notes',
  url: 'https://therepos.github.io',
  baseUrl: '/notes/',
  organizationName: 'therepos',
  projectName: 'notes',
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   path: 'docs',
        //   routeBasePath: '/',
        //   sidebarPath: './sidebars.js',
        //   sidebarCollapsible: true,
        //   showLastUpdateTime: true,
        // },
        blog: false,
        theme: {
          customCss: './src/css/styles.css',
        },
      },
    ],
  ],

  plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'cisa',
      path: 'docs-cisa',
      routeBasePath: 'cisa',
      sidebarPath: './sidebars-cisa.js',
      sidebarCollapsible: true,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'docs',
      path: 'docs',
      routeBasePath: 'docs',
      sidebarPath: './sidebars-docs.js',
      sidebarCollapsible: true,
      showLastUpdateTime: true,
    },
  ],
],

  themeConfig: {
    navbar: {
      title: 'Docs',
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { type: 'search', position: 'right' },
        { href: 'https://github.com/your/repo', label: 'GitHub', position: 'right' },
      ],
    },
  },
};



