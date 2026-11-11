<script setup lang="ts">
import { withBase } from 'vitepress'

// Thin decorative banner for the top of a page. `dark` is optional; when
// given, it replaces `light` in dark mode.
defineProps<{ light: string; dark?: string; alt?: string }>()
</script>

<template>
  <p class="page-banner">
    <img :src="withBase(light)" :alt="alt ?? ''" :class="{ 'light-only': dark }" />
    <img v-if="dark" :src="withBase(dark)" :alt="alt ?? ''" class="dark-only" />
  </p>
</template>
