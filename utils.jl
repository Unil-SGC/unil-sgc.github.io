using Dates
import Hyperscript as HS

node = HS.m

# March 5, 2019
dfmt(d) = Dates.format(d, "U d, yyyy")

function hfun_dfmt(p::Vector{String})
    d = getlvar(Symbol(p[1]))
    return dfmt(d)
end

# ===============================================
# Logic to show the list of tags for a page
# ===============================================

function hfun_page_tags()
    tags = get_page_tags()
    base = globvar(:tags_prefix)
    return join(
        (
            node("span", class="tag",
                node("a", href="/$base/$id/", name)
            )
            for (id, name) in tags
        ),
        node("span", class="separator", "•")
    )
end

# ===============================================
# Logic to show the list of tags for a page
#
# Assumes that 'date' and 'title' are defined for
# all posts.
# ===============================================

function hfun_taglist()
    current_tag = getlvar(:tag_name)

    connected_rps = [
        rpi
        for (rpi, lci) in cur_gc().children_contexts
        if current_tag in values(get_page_tags(lci))
    ]
    posts = [
        (
            date  = getvarfrom(:date, rp),
            title = getvarfrom(:title, rp),
            href  = "/$(splitext(rp)[1])",
            tags  = get_page_tags(rp)
        )
        for rp in connected_rps
    ]

    return string(
        node("ul",
            (
                node("li",
                    node("span", class="date", Dates.format(p.date, "U d, yyyy") * "  — "),
                    node("a", class="title", href=p.href, p.title)
                )
                for p in posts
            )...
        )
    )
end

# ===============================================
# Logic to retrieve posts in posts/ and display
# them as a list sorted by anti-chronological
# order.
#
# Assumes that 'date' and 'title' are defined for
# all posts.
# ===============================================

function hfun_list_posts()
    path = dirname(cur_lc().rpath)
    startswith(path, "tags") && return ""

    dir = splitpath(cur_lc().rpath)[end-1]
    return string(
        node("ul",
                (
                    node("li",
                        node("span", class="date", Dates.format(p.date, "U d, yyyy") * "  — "),
                        node("a", class="title", href=p.href, p.title)
                    )
                    for p in get_posts(dir)
                )...
            )
        )
end

function get_posts(dir::String)
    # find all valid "posts/xxx.md" files, exclude the index which is where
    # the post-list gets placed
    paths = joinpath.(
        dir,
        filter!(
            p -> endswith(p, ".md") && p != "index.md",
            readdir(dir)
        )
    )
    # for each of those posts, retrieve date and title, both are expected
    # to be there
    posts = [
        (
            date  = getvarfrom(:date, rp),
            title = getvarfrom(:title, rp),
            href  = "/$(splitext(rp)[1])",
            tags  = get_page_tags(rp)
        )
        for rp in paths
    ]
    sort!(posts, by = x -> x.date, rev=true)
    return posts
end
