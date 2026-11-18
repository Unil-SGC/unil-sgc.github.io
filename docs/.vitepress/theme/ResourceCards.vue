<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

interface Resource {
  title: string
  details?: string
  link?: string
  icon?: string
  badge?: string | string[]
}

// A grid of cards, one per entry. Entries come from the `items` prop or, when
// it is omitted, from the `resources` list of the page front matter. `compact`
// renders one row per entry instead of a card, for long lists.
const props = defineProps<{ items?: Resource[]; compact?: boolean }>()
const { frontmatter } = useData()

const list = computed<Resource[]>(() => props.items ?? frontmatter.value.resources ?? [])

const isExternal = (link?: string) => !!link && /^https?:\/\//.test(link)
const href = (link?: string) =>
  !link ? undefined : link.startsWith('/') ? withBase(link) : link
const badges = (b?: string | string[]) => (b == null ? [] : Array.isArray(b) ? b : [b])

// Title split before its last word, so that the external-link arrow can be
// glued to that word instead of wrapping alone onto a new line.
const splitTitle = (t: string) => {
  const i = t.lastIndexOf(' ')
  return i < 0 ? ['', t] : [t.slice(0, i + 1), t.slice(i + 1)]
}
</script>

<template>
  <div class="resource-cards" :class="{ compact }">
    <component
      :is="r.link ? 'a' : 'div'"
      v-for="r in list"
      :key="r.title"
      class="resource-card"
      :href="href(r.link)"
      :target="isExternal(r.link) ? '_blank' : undefined"
      :rel="isExternal(r.link) ? 'noreferrer' : undefined"
    >
      <span class="rc-head">
        <span v-if="r.icon" class="rc-icon" aria-hidden="true">{{ r.icon }}</span>
        <span class="rc-title">
          {{ splitTitle(r.title)[0] }}<span class="rc-last-word">{{ splitTitle(r.title)[1] }}<svg
            v-if="isExternal(r.link)"
            class="rc-external"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg></span>
        </span>
      </span>
      <span v-if="r.details" class="rc-details">{{ r.details }}</span>
      <span v-if="badges(r.badge).length" class="rc-badges">
        <span v-for="b in badges(r.badge)" :key="b" class="rc-badge">{{ b }}</span>
      </span>
    </component>
  </div>
</template>
