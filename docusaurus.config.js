export default {
  title: 'Notes',
  tagline: 'Quick Notes',
  url: 'https://therepos.github.io',
  baseUrl: '/home/',
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
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          sidebarCollapsible: true
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
        {
          type: 'docSidebar',
          sidebarId: 'homeSidebar',
          position: 'left',
          label: 'Home',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cisaSidebar',
          position: 'left',
          label: 'CISA',
        },
        { type: 'search', position: 'right' },
        {
          href: 'https://github.com/your/repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
};
