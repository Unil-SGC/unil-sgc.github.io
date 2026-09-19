+++

# Pages temporarily hidden while the site is being rebuilt after migration.
# Remove entries from this list to bring a page back online.
ignore = [
  "website-memo.md",
  "about.md",
  "geodata.md",
  "people.md",
  "resources.md",
  "software.md",
  "news/",
  "events/",
]

# Layout information

author = "Geocomputing Centre"
author_blurb = "A platform for geocomputing, data science and machine learning"
author_short = "Geocomputing Centre"

meta_descr = "FGSE Geocomputing Centre website"
meta_kw = "Geocomputing, GPU, Earth-sciences, Supercomputing"

tw_card = "summary"
tw_title = author_short
tw_descr = meta_descr

website_url = "https://unil-sgc.github.io/"

footer_notice = """
  © $(Dates.year(Dates.now())) $author · Powered by
    <a href="https://franklin.jl">Franklin.jl</a> &
    <a href="https://github.com/luizdepra/hugo-coder/">Coder</a>."""

# nav_items = [
#   "About" => "/about/",
#   "News" => "/news/",
#   "Events" => "/events/",
#   "People" => "/people/",
#   "Software" => "/software/",
#   "Geodata" => "/geodata/",
#   "Resources" => "/resources/",
# ]

nav_items = []

# Social URLs for the home page

social_github = "https://github.com/Unil-SGC/"

# Layout / Franklin specifics

content_tag = ""
heading_link = false
heading_post = """
  <a class="heading-link" href="#HEADING_ID">
    <i class="fa fa-link" aria-hidden="true"></i>
  </a>
  """
fn_title = ""
+++

\newcommand{\html}[1]{~~~#1~~~}
