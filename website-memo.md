# website-memo

The website is build using [Xranklin](https://github.com/tlienart/Xranklin.jl),
the dev version of the next major release of [Franklin](https://github.com/tlienart/Franklin.jl) Julia-powered static website generator.

## How-to

Make sure to have the Xranklin package added:
```julia-repl
julia> ]

(@v1.10) pkg> add https://github.com/tlienart/Xranklin.jl
```

To test the website locally (or after making a pull from Git), `cd` to the local unil-sgc.github.io repo and:
```julia-repl
julia> using Xranklin

julia> serve(clear=true)
```

_If nothing shows up, open a browser and head to `http://localhost:8000/`._

## Publishing workflow

Most of the publishing workflow will result in adding markdown `.md` files in the [/events](events) and [/news](news) folders. These markdown files will be displayed as "posts" in the [News](https://unil-sgc.github.io/news/) and [Events](https://unil-sgc.github.io/events/) pages, respectively.

Make sure to edit the meta data accordingly, from e.g.:
```md
+++
using Dates

title = "Placeholder Text"
date = Date(2019, 3, 9)
reading_time = "2-minute read"

tags = ["markdown", "text"]
+++
```

Assets (mostly `png`, `gif`) should be placed in [/_assets/images](_assets/images) and linked using a relative path **omitting the underscore(s)** (e.g., from a markdown file within the posts folder: `![my_image](../../assets/images/my_image.png)`).


## Misc
- This website builds upon the [coder-xranklin-demo](https://github.com/tlienart/coder-xranklin-demo).
- Site-wide config should be placed and handled in [/config.md](config.md).
- :bulb:This version of the [coder-xranklin-demo](https://github.com/tlienart/coder-xranklin-demo) implements "multi-post" support; folders that should contain the "post" logic should be manually added to [_layout/head.html](/_layout/head.html) (discussed in [this](https://github.com/tlienart/Xranklin.jl/issues/275) GH issue).
- More advanced styling can be tweaked in the [_css](/_css) and [_layout](/_layout) folders.
- [This memo](https://github.com/eth-vaw-glaciology/course-101-0250-00/blob/main/website-memo.md) lists some advanced feature that could apply to this website as well.
