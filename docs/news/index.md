---
title: News
---

<script setup>
import { data as posts } from '../.vitepress/news.data'
</script>

# News

Announcements from the Geocomputing Centre, newest first. Older items are kept as an archive.

<PostList :posts="posts" />
