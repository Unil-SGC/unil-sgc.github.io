#!/usr/bin/env julia
# Generate the Software page banner: a scalar field on a coarse grid with a
# 5-point stencil outlined, in the brand blues. Writes
# docs/public/images/software-banner-{light,dark}.png (1600 x 320).
#
#   julia --project=scripts -e 'using Pkg; Pkg.instantiate()'   # once
#   julia --project=scripts scripts/software-banner.jl
using PNGFiles, ColorTypes, FixedPointNumbers

const NX, NY, CELL, GAP = 80, 16, 20, 2      # 80 x 16 cells of 20 px -> 1600 x 320
const SOURCES = [(12, 6, 1.0, 5.5), (30, 13, 0.8, 4.2), (47, 3, 0.9, 6.0),
                 (64, 10, 1.0, 5.0), (76, 2, 0.5, 3.5), (20, 15, 0.4, 3.0)]
const STOPS = [(0.0, (8, 28, 54)), (0.3, (11, 61, 110)), (0.62, (21, 101, 192)),
               (0.88, (127, 211, 255)), (1.0, (227, 244, 255))]
const STENCIL = (52, 8)                      # cell at the centre of the outlined stencil
const OUT = normpath(joinpath(@__DIR__, "..", "docs", "public", "images"))

"Brand colour map on [0, 1]: navy to light blue."
function colour(t)
    for k in 1:length(STOPS)-1
        (t0, c0), (t1, c1) = STOPS[k], STOPS[k+1]
        if t <= t1
            u = (t - t0) / (t1 - t0)
            return RGB{N0f8}((clamp((c0[i] + (c1[i] - c0[i]) * u) / 255, 0, 1) for i in 1:3)...)
        end
    end
    return RGB{N0f8}((STOPS[end][2] ./ 255)...)
end

"A few diffused sources on a gentle wave, normalised to [0, 1]."
function field()
    vals = [0.04 + 0.08 * i / NX + 0.10 * sin(i / 4.5) * cos(j / 2.6) +
            sum(a * exp(-((i - sx)^2 + (j - sy)^2) / (2 * w^2)) for (sx, sy, a, w) in SOURCES)
            for j in 0:NY-1, i in 0:NX-1]
    return vals ./ maximum(vals)
end

function banner()
    img = fill(RGB{N0f8}(6 / 255, 20 / 255, 40 / 255), NY * CELL, NX * CELL)
    vals = field()
    for j in 0:NY-1, i in 0:NX-1
        x0, y0 = i * CELL, j * CELL
        img[y0+1:y0+CELL-GAP+1, x0+1:x0+CELL-GAP+1] .= colour(vals[j+1, i+1])
    end
    ci, cj = STENCIL
    white = RGB{N0f8}(1, 1, 1)
    for (di, dj) in ((0, 0), (1, 0), (-1, 0), (0, 1), (0, -1))
        x0, y0 = (ci + di) * CELL, (cj + dj) * CELL
        xs, ys = x0:x0+CELL-GAP+2, y0:y0+CELL-GAP+2   # box with a 2 px white border
        img[ys[1:2], xs] .= white; img[ys[end-1:end], xs] .= white
        img[ys, xs[1:2]] .= white; img[ys, xs[end-1:end]] .= white
    end
    return img
end

dim(c, f) = RGB{N0f8}(f * red(c), f * green(c), f * blue(c))

img = banner()
PNGFiles.save(joinpath(OUT, "software-banner-light.png"), img)
PNGFiles.save(joinpath(OUT, "software-banner-dark.png"), dim.(img, 0.72))
println("wrote ", joinpath(OUT, "software-banner-{light,dark}.png"))
