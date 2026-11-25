<script setup>
import { computed } from 'vue'
import { RotateCcw, ArrowRight } from 'lucide-vue-next'
import ProgressRing from './ProgressRing.vue'

const props = defineProps({
  title: { type: String, required: true },
  score: { type: Number, required: true },
  total: { type: Number, required: true },
  note: { type: String, default: '' }
})
const emit = defineEmits(['restart'])

const percent = computed(() => Math.round((props.score / props.total) * 100))
</script>

<template>
  <article class="result surface surface-pad">
    <span class="eyebrow">Hasil latihan</span>
    <h2>{{ title }} selesai</h2>
    <div class="result-body">
      <ProgressRing :value="percent" label="Skor" :size="150" />
      <div class="result-copy">
        <p class="stat-line"><span class="stat-value">{{ score }}/{{ total }}</span><span class="stat-label">jawaban benar</span></p>
        <p class="prose">
          {{ percent >= 80 ? 'Kerja bagus. Materi ini sudah cukup kuat untuk dilanjutkan.' : percent >= 50 ? 'Mulai baik. Ulangi beberapa soal untuk memperkuat polanya.' : 'Tidak apa-apa. Baca materinya lagi, lalu coba sekali lagi.' }}
        </p>
        <p v-if="note" class="small muted">{{ note }}</p>
        <div class="result-actions">
          <button type="button" class="btn btn-primary" @click="emit('restart')"><RotateCcw /> Ulangi tes</button>
          <RouterLink to="/progress" class="link-arrow">Lihat progres <ArrowRight /></RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.result { max-width: 760px; }
.result h2 { margin-top: 0.6rem; }
.result-body { display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; margin-top: 1.5rem; }
.result-copy { flex: 1; min-width: 240px; display: grid; gap: 0.8rem; }
.result-actions { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-top: 0.5rem; }
</style>
