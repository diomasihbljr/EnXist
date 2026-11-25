<script setup>
import { House, Map, BookOpen, SpellCheck2, ChartNoAxesColumn, Ellipsis } from 'lucide-vue-next'
</script>

<template>
  <nav class="bottom-nav" aria-label="Navigasi bawah">
    <RouterLink to="/"><House /><span>Home</span></RouterLink>
    <RouterLink to="/courses"><Map /><span>Courses</span></RouterLink>
    <RouterLink to="/materials/vocabulary"><BookOpen /><span>Vocab</span></RouterLink>
    <RouterLink to="/tests/vocabulary"><SpellCheck2 /><span>Practice</span></RouterLink>
    <RouterLink to="/progress"><ChartNoAxesColumn /><span>Progress</span></RouterLink>
  </nav>
</template>
