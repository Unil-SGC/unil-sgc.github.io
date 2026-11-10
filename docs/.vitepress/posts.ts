import { createContentLoader } from 'vitepress'
import { formatDate } from './format'

export interface Post {
  title: string
  date: string      // ISO day, used for sorting
  dateText: string  // human readable
  url: string
  author: string
  tags: string[]
}

/**
 * Build-time loader listing the posts of a section (news/ or events/),
 * newest first. A file is a post when its frontmatter has a `date`.
 */
export function postsLoader(section: string) {
  return createContentLoader(`${section}/*.md`, {
    transform(raw): Post[] {
      return raw
        .filter((p) => p.frontmatter.date)
        .map((p) => ({
          title: p.frontmatter.title ?? p.url,
          date: new Date(p.frontmatter.date).toISOString().slice(0, 10),
          dateText: formatDate(p.frontmatter.date),
          url: p.url,
          author: p.frontmatter.author ?? '',
          tags: p.frontmatter.tags ?? [],
        }))
        .sort((a, b) => b.date.localeCompare(a.date))
    },
  })
}
