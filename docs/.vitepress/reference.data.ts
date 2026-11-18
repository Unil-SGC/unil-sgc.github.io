import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/** One row of the datasets README, in the shape <ResourceCards> expects. */
export interface Dataset {
  title: string
  details: string
  badge: string[]
}

declare const data: Dataset[]
export { data }

// `reference/README_FGSE.md` is a verbatim copy of the README of the FGSE
// folder on the /reference partition of Curnagl, refreshed by
// scripts/sync-reference-readme.sh. Its Markdown table is parsed here at
// build time, so the Shared datasets page follows the README.
const README = '../../reference/README_FGSE.md'

export default {
  watch: [README],
  load(files: string[]): Dataset[] {
    const file = files[0] ?? resolve(process.cwd(), 'reference/README_FGSE.md')
    if (!existsSync(file)) return []
    const rows = readFileSync(file, 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.startsWith('|'))
      .map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()))
    if (rows.length < 3) return []
    const header = rows[0].map((h) => h.toLowerCase())
    const col = (name: string) => header.findIndex((h) => h.includes(name))
    // The Contact column is deliberately not published: the site is public
    // and the e-mail addresses stay on the cluster. An optional Group column
    // (for example "DAWN" or "Beucler group") is shown as a badge.
    const iFolder = col('folder'), iDesc = col('description'), iGroup = col('group')
    return rows.slice(2).map((cells) => {
      const group = iGroup >= 0 ? (cells[iGroup] ?? '').trim() : ''
      return {
        title: (cells[iFolder] ?? '').replace(/`/g, ''),
        details: cells[iDesc] ?? '',
        badge: group ? [group] : [],
      }
    })
  },
}
