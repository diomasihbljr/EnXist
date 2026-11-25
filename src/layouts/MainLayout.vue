<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { X } from 'lucide-vue-next'
import AppSidebar from '../components/AppSidebar.vue'
import AppHeader from '../components/AppHeader.vue'
import AppBottomNav from '../components/AppBottomNav.vue'
import BrandMark from '../components/BrandMark.vue'
import { navGroups } from '../data/navigation'
import { useTheme } from '../composables/useTheme'

useTheme()
const route = useRoute()
const menuOpen = ref(false)
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <div class="app-shell">
    <AppSidebar />

    <div class="app-main">
      <AppHeader @open-menu="menuOpen = true" />
      <main id="main" class="app-content">
        <div class="content-wrap">
          <RouterView />
        </div>
      </main>
      <footer class="app-footer">
        <span>EnXist · Kebun Bahasa</span>
        <span>Data belajar disimpan di perangkat ini.</span>
        <RouterLink to="/settings">Pengaturan</RouterLink>
      </footer>
    </div>

    <AppBottomNav />

    <div v-if="menuOpen" class="drawer-backdrop" @click.self="menuOpen = false">
      <nav class="drawer" aria-label="Semua halaman">
        <div class="drawer-head">
          <BrandMark />
          <strong>Daftar halaman</strong>
          <button type="button" class="btn btn-quiet" aria-label="Tutup daftar halaman" @click="menuOpen = false"><X /></button>
        </div>
        <section v-for="group in navGroups" :key="group.label" class="drawer-group">
          <p class="nav-group-label">{{ group.label }}</p>
          <RouterLink v-for="item in group.items" :key="item.to" :to="item.to" class="nav-link">
            <component :is="item.icon" />
            <span>{{ item.label }}</span>
          </RouterLink>
        </section>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(21, 30, 23, 0.45);
  display: flex;
}
.drawer {
  width: min(320px, 86vw);
  height: 100%;
  overflow-y: auto;
  background: var(--bg-alt);
  border-right: 1px solid var(--border);
  padding: 1rem 0.9rem 6rem;
}
.drawer-head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.5rem 0.4rem 1rem;
  border-bottom: 1px solid var(--border);
}
.drawer-head strong { font-family: var(--font-display); font-size: 1.15rem; flex: 1; }
.drawer-group { padding-top: 0.6rem; }
.drawer-group .nav-link { min-height: 44px; }
</style>
