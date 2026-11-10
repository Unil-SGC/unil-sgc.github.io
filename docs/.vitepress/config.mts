import { defineConfig } from 'vitepress'
import { postSidebar } from './sidebar'

const SITE_URL = 'https://unil-sgc.github.io'
const REPO_URL = 'https://github.com/Unil-SGC/unil-sgc.github.io'
const ORG_URL = 'https://github.com/Unil-SGC'
const CENTRE_URL = 'https://www.unil.ch/fgse/en/home/menuinst/recherche/geocomputing-centre.html'

export default defineConfig({
  lang: 'en',
  title: 'Geocomputing Centre',
  description: 'Data, software and dev hub of the UNIL FGSE Geocomputing Centre',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: SITE_URL },

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'keywords', content: 'Geocomputing, GPU, Earth sciences, Supercomputing, Geodata' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Geocomputing Centre hub' }],
    ['meta', { property: 'og:description', content: 'Data, software and dev hub of the UNIL FGSE Geocomputing Centre' }],
  ],

  themeConfig: {
    logo: { src: '/logo.png', alt: 'Geocomputing Centre' },
    siteTitle: 'Geocomputing Centre',

    nav: [
      { text: 'Compute', link: '/compute/', activeMatch: '^/compute/' },
      { text: 'Data', link: '/data/', activeMatch: '^/data/' },
      { text: 'Software', link: '/software/', activeMatch: '^/software/' },
      { text: 'Learning', link: '/learning/', activeMatch: '^/learning/' },
      {
        text: 'Activities',
        activeMatch: '^/(news|events)/',
        items: [
          { text: 'News', link: '/news/' },
          { text: 'Events', link: '/events/' },
        ],
      },
      { text: 'Contribute', link: '/contribute', activeMatch: '^/contribute' },
      { text: 'Centre', link: CENTRE_URL },
    ],

    sidebar: {
      '/compute/': [
        {
          text: 'Compute',
          items: [
            { text: 'Overview and support', link: '/compute/' },
            { text: 'Octopus GPU cluster', link: '/compute/octopus' },
          ],
        },
      ],
      '/data/': [
        {
          text: 'Data',
          items: [
            { text: 'Overview', link: '/data/' },
            { text: 'Shared datasets', link: '/data/datasets' },
            { text: 'Geodata catalogues', link: '/data/catalogues' },
          ],
        },
      ],
      '/software/': [{ text: 'Software', items: [{ text: 'Software', link: '/software/' }] }],
      '/learning/': [{ text: 'Learning', items: [{ text: 'Learning resources', link: '/learning/' }] }],
      '/news/': [{ text: 'News', items: [{ text: 'All news', link: '/news/' }, ...postSidebar('news')] }],
      '/events/': [{ text: 'Events', items: [{ text: 'All events', link: '/events/' }, ...postSidebar('events')] }],
    },

    outline: { level: [2, 3] },
    search: { provider: 'local' },
    editLink: {
      pattern: `${REPO_URL}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub',
    },
    lastUpdated: { text: 'Last updated' },
    socialLinks: [{ icon: 'github', link: ORG_URL, ariaLabel: 'Unil-SGC on GitHub' }],
    footer: {
      message: `<a href="${CENTRE_URL}">Geocomputing Centre</a> · Faculty of Geosciences and Environment · University of Lausanne`,
      copyright: `© ${new Date().getFullYear()} Geocomputing Centre · Powered by <a href="https://vitepress.dev">VitePress</a>`,
    },
  },
})
