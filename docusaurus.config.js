// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'full-it-infra-docs',
  tagline: 'IT Infra Docs',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ GitHub Pages 关键配置（用户页 + 仓库名）
  url: 'https://bruce4611.github.io',
  baseUrl: '/full-it-infra-docs/',

  // ✅ GitHub Pages 部署相关
  organizationName: 'Bruce4611',
  projectName: 'full-it-infra-docs',

  // 可选：避免中文/空格链接出问题
  trailingSlash: false,

  // GitHub Pages 常见：有些链接严格，先别 throw，避免构建直接失败
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // ✅ 以后你可以点“Edit this page”直接跳到你自己的仓库
          editUrl: 'https://github.com/Bruce4611/full-it-infra-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Bruce4611/full-it-infra-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'full-it-infra-docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/Bruce4611/full-it-infra-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Intro', to: '/docs/intro'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'GitHub', href: 'https://github.com/Bruce4611/full-it-infra-docs'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bruce4611.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
