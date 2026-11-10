// Deterministic date formatting shared by the build-time loaders and the
// client components (no Intl, so server and client render the same string).
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/** "2024-09-11" or a Date -> "September 11, 2024" */
export function formatDate(d: string | Date): string {
  const iso = d instanceof Date ? d.toISOString() : String(d)
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (!m) return String(d)
  return `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`
}
