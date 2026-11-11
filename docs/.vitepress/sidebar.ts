import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

/**
 * Sidebar entries for the posts of a section (news/ or events/), newest
 * first, read from the files' frontmatter so adding a post needs no config edit.
 */
export function postSidebar(section: string): { text: string; link: string }[] {
  const dir = path.join(docsDir, section)
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .map((f) => {
      const src = fs.readFileSync(path.join(dir, f), 'utf8')
      const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ''
      const get = (key: string) =>
        fm.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'))?.[1] ?? ''
      return { text: get('title') || f, date: get('date'), link: `/${section}/${f.replace(/\.md$/, '')}` }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ text, link }) => ({ text, link }))
}
