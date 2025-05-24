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
        sidebarPath: require.resolve('./sidebars-cisa.js'),
        sidebarCollapsible: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'home',
        path: 'docs-home',
        routeBasePath: 'home',
        sidebarPath: require.resolve('./sidebars-home.js'),
        sidebarCollapsible: true,
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Docs',
      items: [
        { to: '/home/', label: 'Home', position: 'left' },
        { to: '/cisa/', label: 'CISA', position: 'left' },
        { type: 'search', position: 'right' },
        { href: 'https://github.com/your/repo', label: 'GitHub', position: 'right' },
      ],
    },
  },
};
