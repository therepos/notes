module.exports = {
  title: 'My Docusaurus Site',
  tagline: 'Docs made simple',
  url: 'https://therepos.github.io',
  baseUrl: '/docusaurus/',
  organizationName: 'therepos',
  projectName: 'docusaurus',
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/styles.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Docusaurus Site',
      items: [
        {
          href: 'https://github.com/therepos/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} therepos.`,
    },
  },
};
