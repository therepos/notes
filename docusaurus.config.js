module.exports = {
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
      title: 'Notes',
      items: [
        {
          href: 'https://github.com/therepos/notes',
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
