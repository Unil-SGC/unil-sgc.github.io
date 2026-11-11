import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PostMeta from './PostMeta.vue'
import PostList from './PostList.vue'
import PageBanner from './PageBanner.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // Shows date, author and tags above the title of any page with a `date`.
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-before': () => h(PostMeta) }),
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('PageBanner', PageBanner)
  },
} satisfies Theme
