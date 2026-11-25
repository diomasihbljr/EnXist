<script setup>
import { computed } from 'vue'
import { ArrowUpRight, Check } from 'lucide-vue-next'
import { useStore } from '../composables/useStore'

const props = defineProps({ course: { type: Object, required: true } })

const { state, stats } = useStore()

const progress = computed(() => {
  switch (props.course.topic) {
    case 'Vocabulary': return Math.round((state.progress.vocabularyLearned.length / 42) * 100)
    case 'Grammar': return Math.round((state.progress.grammarCompleted.length / 8) * 100)
    case 'Listening': return Math.round((state.progress.listeningDone.length / 3) * 100)
    default: return stats.value.overall
  }
})

const status = computed(() => {
  if (progress.value >= 100) return { label: 'Selesai', class: 'tag-done' }
  if (progress.value > 0) return { label: 'Sedang dipelajari', class: 'tag-solid' }
  return { label: 'Belum dimulai', class: '' }
})

const completedSteps = computed(() => Math.round((progress.value / 100) * props.course.trail.length))
</script>

<template>
  <article class="course-item">
    <div class="course-index">
      <span>{{ course.number }}</span>
      <div class="course-rail" aria-hidden="true"><i v-for="step in course.trail" :key="step" :class="{ on: course.trail.indexOf(step) < completedSteps }" /></div>
    </div>
    <div class="course-body">
      <div class="course-topline">
        <span class="tag">{{ course.level }}</span>
        <span class="tag">{{ course.topic }}</span>
        <span :class="['tag', status.class]"><Check v-if="status.label === 'Selesai'" />{{ status.label }}</span>
      </div>
      <h3>{{ course.title }}</h3>
      <p class="course-desc">{{ course.description }}</p>
      <div class="course-meta small muted">
        <span>{{ course.lessons }} pelajaran</span><span aria-hidden="true">·</span>
        <span>± {{ course.minutes }} menit</span><span aria-hidden="true">·</span>
        <span>{{ course.trail.join(' → ') }}</span>
      </div>
    </div>
    <div class="course-progress">
      <div class="stat-line"><span class="stat-value">{{ progress }}%</span><span class="stat-label">selesai</span></div>
      <div class="progress-track"><div class="progress-fill" :style="{ width: `${progress}%` }" /></div>
      <RouterLink :to="course.startRoute" class="btn btn-outline btn-sm">
        {{ progress > 0 ? 'Lanjutkan' : 'Mulai jalur' }} <ArrowUpRight />
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.course-item {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr) 190px;
  gap: clamp(1rem, 2vw, 1.75rem);
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--border);
  align-items: start;
}
.course-item:last-child { border-bottom: 0; }
.course-index { display: grid; gap: 0.75rem; justify-items: center; }
.course-index > span { font-family: var(--font-display); font-size: 1.3rem; color: var(--success); }
.course-rail { display: grid; gap: 5px; }
.course-rail i { width: 7px; height: 7px; border-radius: 50%; border: 1px solid var(--border); }
.course-rail i.on { background: var(--success); border-color: var(--success); }
.course-topline { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.course-item h3 { font-size: 1.5rem; margin-top: 0.8rem; }
.course-desc { font-size: 0.9rem; color: var(--text-soft); line-height: 1.65; margin-top: 0.45rem; max-width: 60ch; }
.course-meta { margin-top: 0.7rem; display: flex; flex-wrap: wrap; gap: 0.45rem; }
.course-progress { display: grid; gap: 0.75rem; padding: 1rem; background: var(--surface-soft); border-radius: var(--radius); }
.course-progress .btn { margin-top: 0.2rem; }
@media (max-width: 860px) {
  .course-item { grid-template-columns: 40px minmax(0, 1fr); }
  .course-progress { grid-column: 2; }
}
@media (max-width: 480px) {
  .course-item { grid-template-columns: minmax(0, 1fr); }
  .course-index { display: flex; align-items: center; gap: 0.8rem; }
  .course-rail { display: flex; }
  .course-progress { grid-column: 1; }
}
</style>
