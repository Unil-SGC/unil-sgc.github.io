<script setup lang="ts">
import type { Post } from '../posts'

defineProps<{ posts: Post[] }>()
</script>

<template>
  <ul class="post-list">
    <li v-for="p in posts" :key="p.url">
      <span class="post-date">{{ p.dateText }}</span>
      <a :href="p.url">{{ p.title }}</a>
      <span v-if="p.tags.length" class="post-tags">
        <span v-for="t in p.tags" :key="t" class="post-tag">{{ t }}</span>
      </span>
    </li>
  </ul>
</template>
