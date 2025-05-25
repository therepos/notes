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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/home',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          editUrl: 'https://github.com/therepos/notes/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Blog',
          blogDescription: 'Thoughts, updates, and notes.',
          routeBasePath: 'blog',
          editUrl: 'https://github.com/therepos/notes/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/styles.css'),
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
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/therepos/notes',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
      ],
    },
  },

};
