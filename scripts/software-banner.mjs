// Generates the Software page banner: a Julia GPU snippet highlighted with the
// site's own highlighter (Shiki, GitHub themes), one HTML file per theme.
//
//   node scripts/software-banner.mjs /path/to/outdir
//   firefox --headless --window-size=1600,320 --screenshot outdir/software-banner-light.png file://outdir/software-banner-light.html
//
// then convert the PNGs to docs/public/images/software-banner-{light,dark}.webp.
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { codeToHtml } from 'shiki'

const code = `using ParallelStencil, ParallelStencil.FiniteDifferences2D
@init_parallel_stencil(CUDA, Float64, 2)

@parallel function diffusion!(T2, T, D, dt, dx, dy)
    @inn(T2) = @inn(T) + dt * D * (@d2_xi(T) / dx^2 + @d2_yi(T) / dy^2)
    return
end`

const variants = [
  ['light', 'github-light', '#f6f6f7'],
  ['dark', 'github-dark', '#161618'],
]
const out = process.argv[2] ?? '.'
for (const [name, theme, bg] of variants) {
  const html = await codeToHtml(code, { lang: 'julia', theme })
  writeFileSync(
    join(out, `software-banner-${name}.html`),
    `<!doctype html><meta charset="utf-8"><style>
html, body { margin: 0; width: 1600px; height: 320px; overflow: hidden; background: ${bg}; }
/* Wide side margins: the banner is shown with object-fit: cover, which
   crops up to ~150px on each side at some window widths. */
pre { margin: 0; padding: 27px 180px; background: transparent !important;
      font: 27px/1.4 "DejaVu Sans Mono", monospace; white-space: pre; }
</style>${html}`,
  )
  console.log(`software-banner-${name}.html`)
}
