import { themes as prismThemes } from 'prism-react-renderer';

const currentYear = new Date().getFullYear();

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
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          editUrl: 'https://github.com/therepos/notes/edit/main/',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          // blogTitle: 'Blog',
          // blogDescription: 'Thoughts and updates.',
          // blogSidebarTitle: 'Timeline',
          blogSidebarCount: 'ALL',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/styles.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/blog',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Notes',
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
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true, // optional
      },
    },
    prism: {
      theme: prismThemes.github,
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" style="color: #ebedf0;">CC BY 4.0</a> © ${currentYear} therepos.<br/>Made with Docusaurus.`,
    },
  },

};
