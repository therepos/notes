import { themes as prismThemes } from 'prism-react-renderer';

const currentYear = new Date().getFullYear();

export default {
  title: 'Notes',
  tagline: 'Hacks',
  url: 'https://therepos.github.io',
  baseUrl: '/notes/',
  organizationName: 'therepos',
  projectName: 'notes',
  deploymentBranch: 'gh-pages',
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
          blogSidebarCount: 'ALL',
          onUntruncatedBlogPosts: 'ignore',
          sortPosts: 'descending',
          processBlogPosts({ blogPosts }) {
            return blogPosts.sort((a, b) => {
              const pa = !!(a.frontMatter && a.frontMatter.pinned);
              const pb = !!(b.frontMatter && b.frontMatter.pinned);

              if (pa && !pb) return -1;
              if (!pa && pb) return 1;

              // If both are pinned or both are unpinned, sort by date descending
              return new Date(b.metadata.date) - new Date(a.metadata.date);
            });
          },
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
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/therepos/notes',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `
        <div class="footer-row">
          <div class="footer-left">
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" style="color: #ebedf0;">CC BY 4.0</a> © ${currentYear} therepos.<br/>
            Made with Docusaurus.
          </div>
          <div class="footer-icons">
            <a href="https://github.com" class="icon icon-github" target="_blank" aria-label="GitHub"></a>
            <a href="https://hub.docker.com" class="icon icon-docker" target="_blank" aria-label="Docker"></a>
          </div>
        </div>
      `,
    },
  },

};
