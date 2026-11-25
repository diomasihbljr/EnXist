<script setup>
import { computed, ref } from 'vue'
import { courses, levels, topics } from '../data/courses'
import CourseItem from '../components/CourseItem.vue'

const level = ref('All')
const topic = ref('All')

const filtered = computed(() => courses.filter((course) => (
  (level.value === 'All' || course.level === level.value) &&
  (topic.value === 'All' || course.topic === topic.value)
)))
</script>

<template>
  <div class="courses">
    <header class="page-head">
      <span class="eyebrow">Katalog jalur</span>
      <h1>Belajar mengikuti jalur, bukan kerumuman.</h1>
      <p class="lede">Setiap jalur membawa satu topik dari pengenalan kata hingga sesi dengar. Pilih level dan topik untuk menyempitkan daftar.</p>
    </header>

    <div class="filters">
      <div>
        <span class="filter-label">Level</span>
        <div class="seg-control" role="group" aria-label="Filter level">
          <button v-for="item in levels" :key="item" type="button" :class="{ active: level === item }" :aria-pressed="level === item" @click="level = item">{{ item === 'All' ? 'Semua' : item }}</button>
        </div>
      </div>
      <div>
        <span class="filter-label">Topik</span>
        <div class="seg-control" role="group" aria-label="Filter topik">
          <button v-for="item in topics" :key="item" type="button" :class="{ active: topic === item }" :aria-pressed="topic === item" @click="topic = item">{{ item === 'All' ? 'Semua' : item }}</button>
        </div>
      </div>
    </div>

    <p class="result-count small muted">Menampilkan {{ filtered.length }} dari {{ courses.length }} jalur</p>

    <div v-if="filtered.length" class="course-list surface surface-pad">
      <CourseItem v-for="course in filtered" :key="course.id" :course="course" />
    </div>
    <div v-else class="empty-state">
      <h3>Tidak ada jalur yang cocok</h3>
      <p class="small">Coba kombinasi level dan topik lain.</p>
      <button type="button" class="btn btn-outline btn-sm" @click="level = 'All'; topic = 'All'">Hapus filter</button>
    </div>
  </div>
</template>

<style scoped>
.filters { display: flex; flex-wrap: wrap; gap: 1.25rem 2rem; padding: 1rem 0 0.5rem; }
.filters > div { display: grid; gap: 0.5rem; }
.filter-label { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: var(--text-soft); }
.result-count { margin-top: 0.75rem; }
.course-list { margin-top: 1rem; padding-inline: clamp(1rem, 2.5vw, 2rem); }
</style>
