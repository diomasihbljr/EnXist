<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, Flame } from 'lucide-vue-next'
import { useProfile } from '../composables/useProfile'
import { useStore } from '../composables/useStore'

defineEmits(['open-menu'])

const route = useRoute()
const { initials } = useProfile()
const { stats } = useStore()
const title = computed(() => route.meta.title || 'Belajar')
const group = computed(() => route.meta.group || 'EnXist')
</script>

<template>
  <header class="app-header">
    <button class="btn btn-quiet menu-toggle" type="button" aria-label="Buka daftar halaman" @click="$emit('open-menu')">
      <Menu />
    </button>
    <div class="header-crumb">
      <span>{{ group }}</span>
      <strong>{{ title }}</strong>
    </div>
    <div class="header-spacer" />
    <span class="header-streak" :title="`${stats.activeDays} hari aktif tercatat`">
      <Flame /> {{ stats.activeDays }} hari aktif
    </span>
    <RouterLink to="/profile" class="header-avatar" :aria-label="`Buka profil ${initials}`">{{ initials }}</RouterLink>
  </header>
</template>

<style scoped>
.menu-toggle { display: none; padding: 0.5rem; min-height: 40px; }
@media (max-width: 860px) { .menu-toggle { display: inline-flex; } }
</style>
