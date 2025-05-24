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
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          sidebarCollapsible: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/styles.css',
        },
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

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexPages: false,
      },
    ],
  ],
};
