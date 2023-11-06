+++

ignore = ["website-memo.md"]

# Layout information

author = "Swiss Geocomputing Centre"
author_blurb = "UNIL Centre for Computation and Modelling in Geosciences"
author_short = "Unil-SGC"

meta_descr = "Swiss Geocomputing Centre website"
meta_kw = "Geocomputing, GPU, Earth-sciences, Supercomputing"

tw_card = "summary"
tw_title = author_short
tw_descr = meta_descr

website_url = "https://unil-sgc.github.io/"

footer_notice = """
  © 2022 $author · Powered by
    <a href="https://franklin.jl">Franklin.jl</a> &
    <a href="https://github.com/luizdepra/hugo-coder/">Coder</a>."""

nav_items = [
  "About" => "/about/",
  "News" => "/posts/",
  "Events" => "/events/",
  "People" => "/people/",
  "Software" => "/software/",
]

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
