<script setup>
import { navGroups } from '../data/navigation'
import BrandMark from './BrandMark.vue'
import { useStore } from '../composables/useStore'

const { stats } = useStore()
</script>

<template>
  <aside class="app-sidebar" aria-label="Navigasi utama">
    <RouterLink to="/" class="brand">
      <BrandMark />
      <span>
        <span class="brand-name">EnXist</span>
        <span class="brand-sub">Language Garden</span>
      </span>
    </RouterLink>

    <nav v-for="group in navGroups" :key="group.label" aria-label="">
      <p class="nav-group-label">{{ group.label }}</p>
      <ul class="nav-list">
        <li v-for="item in group.items" :key="item.to">
          <RouterLink :to="item.to" class="nav-link">
            <component :is="item.icon" />
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="sidebar-note">
      <strong>{{ stats.overall }}% dari jalur belajar</strong>
      <span>{{ stats.vocabularyCount }} kata tercatat · {{ stats.grammarCount }} bab selesai</span>
    </div>
  </aside>
</template>
