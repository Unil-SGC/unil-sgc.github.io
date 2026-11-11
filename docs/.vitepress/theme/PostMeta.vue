<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { formatDate } from '../format'

const { frontmatter } = useData()
const date = computed(() => (frontmatter.value.date ? formatDate(frontmatter.value.date) : ''))
const author = computed<string>(() => frontmatter.value.author ?? '')
const tags = computed<string[]>(() => frontmatter.value.tags ?? [])
</script>

<template>
  <div v-if="date" class="post-meta">
    <span class="post-date">{{ date }}</span>
    <span v-if="author" class="post-author">by {{ author }}</span>
    <span v-if="tags.length" class="post-tags">
      <span v-for="t in tags" :key="t" class="post-tag">{{ t }}</span>
    </span>
  </div>
</template>
