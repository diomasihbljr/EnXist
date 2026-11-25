<script setup>
import { computed } from 'vue'
import { Check, BookOpen, ScrollText, Headphones, ArrowRight } from 'lucide-vue-next'
import ProgressRing from '../components/ProgressRing.vue'
import EmptyState from '../components/EmptyState.vue'
import { useStore } from '../composables/useStore'
import { vocabulary } from '../data/vocabulary'
import { grammarLessons } from '../data/grammar'

const { state, stats } = useStore()

const testResults = computed(() => state.progress.testResults.slice(0, 8))

const bestScores = computed(() => {
  const types = ['vocabulary', 'grammar', 'listening']
  return types.map((type) => {
    const results = state.progress.testResults.filter((result) => result.type === type)
    const best = results.reduce((acc, result) => (result.score > (acc?.score ?? -1) ? result : acc), null)
    return { type, attempts: results.length, best }
  })
})

const weekly = computed(() => {
  const days = Array.from({ length: 7 }, (_, offset) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - offset))
    const key = date.toISOString().slice(0, 10)
    const minutes = state.progress.activity
      .filter((item) => String(item.at).slice(0, 10) === key)
      .reduce((sum, item) => sum + (Number(item.minutes) || 0), 0)
    return { key, label: date.toLocaleDateString('id-ID', { weekday: 'short' }), minutes }
  })
  const max = Math.max(10, ...days.map((day) => day.minutes))
  return days.map((day) => ({ ...day, height: Math.max(day.minutes ? 8 : 3, (day.minutes / max) * 100) }))
})

const materials = computed(() => [
  { label: 'Vocabulary Material', done: stats.value.vocabularyCount, total: vocabulary.length, to: '/materials/vocabulary', icon: BookOpen },
  { label: 'Grammar Material', done: stats.value.grammarCount, total: grammarLessons.length, to: '/materials/grammar', icon: ScrollText },
  { label: 'Listening Sessions', done: stats.value.listeningCount, total: 3, to: '/tests/listening', icon: Headphones }
])

function formatDate(value) {
  return new Date(value).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

const typeLabel = { vocabulary: 'Vocabulary', grammar: 'Grammar', listening: 'Listening' }
</script>

<template>
  <div class="progress-page">
    <header class="page-head">
      <span class="eyebrow">Catatan perjalanan</span>
      <h1>Progres yang tumbuh dari kegiatan nyata.</h1>
      <p class="lede">Semua angka di sini berasal dari kata yang kamu tandai, bab yang kamu selesaikan, dan tes yang kamu kerjakan di perangkat ini.</p>
    </header>

    <section class="overview surface surface-pad">
      <ProgressRing :value="stats.overall" label="Progres keseluruhan" :size="160" />
      <div class="overview-grid">
        <div v-for="item in [
          { value: stats.vocabularyCount, label: `kata dari ${stats.vocabularyTotal}` },
          { value: stats.grammarCount, label: `bab dari ${stats.grammarTotal}` },
          { value: stats.testCount, label: 'tes dikerjakan' },
          { value: stats.activeDays, label: 'hari aktif' }
        ]" :key="item.label" class="overview-stat">
          <span class="stat-value">{{ item.value }}</span>
          <span class="stat-label">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <h2>Waktu latihan tercatat</h2>
        <p>± {{ stats.minutes }} menit dari {{ stats.activeDays }} hari aktif</p>
      </div>
      <div class="surface surface-pad chart">
        <div class="chart-bars">
          <div v-for="day in weekly" :key="day.key" class="chart-col">
            <div class="chart-bar-wrap"><div class="chart-bar" :style="{ height: `${day.height}%` }" :title="`${day.minutes} menit`" /></div>
            <span>{{ day.label }}</span>
          </div>
        </div>
        <p class="small muted">Perkiraan menit dicatat otomatis setiap kali kamu menandai kata, menyelesaikan bab, atau mengerjakan tes.</p>
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <h2>Hasil tes</h2>
        <p>Nilai terbaik dan jumlah percobaan</p>
      </div>
      <div class="score-grid">
        <div v-for="item in bestScores" :key="item.type" class="surface surface-pad score-card">
          <span class="eyebrow">{{ typeLabel[item.type] }}</span>
          <p class="stat-line">
            <span class="stat-value">{{ item.best ? `${item.best.score}/${item.best.total}` : '—' }}</span>
            <span class="stat-label">skor terbaik</span>
          </p>
          <p class="small muted">{{ item.attempts }} percobaan tercatat</p>
        </div>
      </div>

      <div v-if="testResults.length" class="surface surface-pad history">
        <div v-for="result in testResults" :key="result.id" class="history-row">
          <span class="tag tag-solid">{{ typeLabel[result.type] || result.type }}</span>
          <strong>{{ result.score }}/{{ result.total }}</strong>
          <span class="small muted">{{ formatDate(result.at) }}</span>
        </div>
      </div>
      <EmptyState v-else title="Belum ada hasil tes" message="Kerjakan satu latihan untuk mengisi riwayat ini." action-to="/tests/vocabulary" action-label="Mulai tes vocabulary" />
    </section>

    <section class="section-block">
      <div class="section-head">
        <h2>Status materi</h2>
        <p>Buka materi untuk melanjutkan</p>
      </div>
      <div class="surface surface-pad">
        <RouterLink v-for="item in materials" :key="item.label" :to="item.to" class="material-row">
          <component :is="item.icon" />
          <span class="material-name">{{ item.label }}</span>
          <span class="small muted">{{ item.done }}/{{ item.total }}</span>
          <span class="progress-track"><span class="progress-fill" :style="{ width: `${(item.done / item.total) * 100}%` }" /></span>
          <Check v-if="item.done >= item.total" class="material-check" />
          <ArrowRight v-else class="material-arrow" />
        </RouterLink>
      </div>
    </section>

    <section class="section-block reflection surface surface-sand surface-pad">
      <span class="eyebrow">Ringkasan pencapaian</span>
      <h2>{{ stats.overall >= 60 ? 'Jalur belajarnya sudah terasa terbentuk.' : 'Akar pertamanya sudah tertanam.' }}</h2>
      <p class="prose">
        Kamu sudah mengenal {{ stats.vocabularyCount }} kata, menyelesaikan {{ stats.grammarCount }} bab grammar, dan mencatat {{ stats.testCount }} sesi latihan.
        {{ stats.overall >= 60 ? 'Pertahankan ritme ini dengan satu sesi pendek setiap hari.' : 'Lanjutkan dengan satu kata atau satu soal hari ini agar ritmenya terjaga.' }}
      </p>
      <RouterLink to="/courses" class="link-arrow">Lihat jalur berikutnya <ArrowRight /></RouterLink>
    </section>
  </div>
</template>

<style scoped>
.overview { display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; }
.overview-grid { flex: 1; min-width: 260px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
.overview-stat { display: grid; gap: 0.2rem; border-left: 1px solid var(--border); padding-left: 0.9rem; }
.chart { display: grid; gap: 1rem; }
.chart-bars { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.6rem; align-items: end; height: 180px; }
.chart-col { display: grid; grid-template-rows: 1fr auto; gap: 0.5rem; height: 100%; text-align: center; }
.chart-bar-wrap { display: flex; align-items: flex-end; height: 100%; background: color-mix(in srgb, var(--border) 35%, transparent); border-radius: 6px 6px 0 0; overflow: hidden; }
.chart-bar { width: 100%; background: var(--success); border-radius: 6px 6px 0 0; transition: height 400ms ease; }
.chart-col > span { font-size: 0.72rem; color: var(--text-soft); }
.score-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.85rem; }
.score-card { display: grid; gap: 0.6rem; }
.history { margin-top: 1rem; }
.history-row { display: grid; grid-template-columns: auto 1fr auto; gap: 0.75rem; align-items: center; padding: 0.65rem 0; border-bottom: 1px solid var(--border); }
.history-row:last-child { border-bottom: 0; padding-bottom: 0; }
.material-row { display: grid; grid-template-columns: 20px minmax(130px, 1fr) 50px minmax(80px, 1.2fr) 18px; gap: 0.8rem; align-items: center; padding: 0.85rem 0; border-bottom: 1px solid var(--border); min-height: 52px; }
.material-row:last-child { border-bottom: 0; }
.material-row > svg:first-child { width: 18px; height: 18px; color: var(--success); }
.material-name { font-weight: 600; font-size: 0.88rem; }
.material-row .progress-track { display: block; }
.material-check, .material-arrow { width: 17px; height: 17px; color: var(--success); }
.reflection { display: grid; gap: 0.8rem; justify-items: start; }
@media (max-width: 620px) { .score-grid { grid-template-columns: minmax(0, 1fr); } .material-row { grid-template-columns: 20px minmax(0, 1fr) 44px 18px; } .material-row .progress-track { grid-column: 2 / 4; } }
</style>
