<script setup>
import { computed } from 'vue'
import { ArrowRight, BookOpen, ScrollText, Headphones, Clock3 } from 'lucide-vue-next'
import LearningPath from '../components/LearningPath.vue'
import ProgressRing from '../components/ProgressRing.vue'
import EmptyState from '../components/EmptyState.vue'
import { useStore } from '../composables/useStore'
import { useProfile } from '../composables/useProfile'

const { state, stats } = useStore()
const { profile } = useProfile()

const hour = new Date().getHours()
const greeting = hour < 11 ? 'Selamat pagi' : hour < 15 ? 'Selamat siang' : hour < 18 ? 'Selamat sore' : 'Selamat malam'

const resume = computed(() => state.progress.lastMaterial || { route: '/materials/vocabulary', title: 'Vocabulary Material' })

const pathItems = computed(() => [
  { label: 'First Words', to: '/materials/vocabulary', done: stats.value.vocabularyCount > 0 },
  { label: 'Sentence Ground', to: '/materials/grammar', done: stats.value.grammarCount > 0 },
  { label: 'Vocabulary Test', to: '/tests/vocabulary', done: state.progress.testResults.some((r) => r.type === 'vocabulary') },
  { label: 'Grammar Test', to: '/tests/grammar', done: state.progress.testResults.some((r) => r.type === 'grammar') },
  { label: 'Listening', to: '/tests/listening', done: stats.value.listeningCount > 0 }
])

const currentStep = computed(() => pathItems.value.findIndex((item) => !item.done))

const pathWithCurrent = computed(() => pathItems.value.map((item, index) => ({ ...item, current: index === currentStep.value })))

const goals = computed(() => ({
  target: state.progress.dailyGoal,
  done: Math.min(stats.value.vocabularyCount, state.progress.dailyGoal)
}))

const activities = computed(() => state.progress.activity.slice(0, 5))

const suggestions = [
  { title: 'Enam kata baru', note: 'Tambah kosakata dari tema Nature.', to: '/materials/vocabulary', icon: BookOpen },
  { title: 'Satu bab grammar', note: 'Lanjutkan ke Simple Past Tense.', to: '/materials/grammar', icon: ScrollText },
  { title: 'Sesi listening', note: 'Tiga pertanyaan dari percakapan pendek.', to: '/tests/listening', icon: Headphones }
]

function timeAgo(value) {
  const diff = Date.now() - new Date(value).getTime()
  const hours = Math.floor(diff / 3600000)
  if (hours < 1) return 'baru saja'
  if (hours < 24) return `${hours} jam lalu`
  const days = Math.floor(hours / 24)
  return days === 1 ? 'kemarin' : `${days} hari lalu`
}
</script>

<template>
  <div class="dashboard">
    <section class="welcome">
      <div class="welcome-copy">
        <span class="eyebrow">Halaman pembuka · Jalur belajar</span>
        <h1>{{ greeting }}, {{ profile.name }}.</h1>
        <p class="lede">Setiap kata yang kamu tandai dan setiap kalimat yang kamu pahami adalah langkah kecil di kebun bahasa ini. Mulai dari mana pun kamu berhenti kemarin.</p>
        <div class="welcome-actions">
          <RouterLink :to="resume.route" class="btn btn-primary">Lanjutkan {{ resume.title }} <ArrowRight /></RouterLink>
          <RouterLink to="/courses" class="link-arrow">Lihat semua jalur <ArrowRight /></RouterLink>
        </div>
      </div>
      <div class="welcome-leaf" aria-hidden="true">
        <svg viewBox="0 0 320 280" fill="none">
          <path d="M18 246C18 130 92 38 286 20C274 156 190 242 18 246Z" fill="var(--surface-sage)" />
          <path d="M40 244C112 190 176 124 250 42" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" />
          <path d="M96 208c-4-30 12-50 40-58M158 156c-2-28 14-46 42-54M208 100c-2-24 12-40 36-48" stroke="var(--success)" stroke-width="2" stroke-linecap="round" />
          <circle cx="250" cy="42" r="6" fill="var(--accent)" />
        </svg>
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <h2>Jalur taman belajar</h2>
        <p>{{ pathItems.filter((item) => item.done).length }} dari {{ pathItems.length }} titik sudah dilalui</p>
      </div>
      <div class="split">
        <div class="surface surface-sand surface-pad">
          <p class="small muted">Ikuti lengkung jalur di bawah, atau pilih titik untuk membuka materinya.</p>
          <LearningPath :items="pathWithCurrent" />
        </div>
        <div class="stack">
          <div class="surface surface-pad summary-card">
            <ProgressRing :value="stats.overall" label="Progres jalur" :size="140" />
            <p class="small muted">Gabungan materi, latihan, dan sesi dengar yang sudah kamu kerjakan.</p>
          </div>
          <div class="surface surface-pad goal-card">
            <span class="eyebrow">Target hari ini</span>
            <div class="stat-line"><span class="stat-value">{{ goals.done }}/{{ goals.target }}</span><span class="stat-label">kata</span></div>
            <div class="progress-track"><div class="progress-fill clay" :style="{ width: `${(goals.done / goals.target) * 100}%` }" /></div>
            <p class="small muted">{{ goals.done >= goals.target ? 'Target hari ini tercapai.' : `Tersisa ${goals.target - goals.done} kata untuk mencapai target.` }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <h2>Pilihan berikutnya</h2>
        <p>Disusun dari kegiatan terakhir kamu</p>
      </div>
      <div class="suggestions">
        <RouterLink v-for="item in suggestions" :key="item.title" :to="item.to" class="suggestion">
          <span class="suggestion-icon"><component :is="item.icon" /></span>
          <span><strong>{{ item.title }}</strong><small>{{ item.note }}</small></span>
          <ArrowRight class="suggestion-arrow" />
        </RouterLink>
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <h2>Catatan terbaru</h2>
        <p>{{ stats.activeDays }} hari aktif · ± {{ stats.minutes }} menit latihan tercatat</p>
      </div>
      <div v-if="activities.length" class="surface surface-pad timeline">
        <div v-for="item in activities" :key="item.id" class="timeline-row">
          <span class="timeline-dot" :class="item.type" />
          <div>
            <strong>{{ item.label }}</strong>
            <span class="small muted">± {{ item.minutes }} menit</span>
          </div>
          <time class="small muted">{{ timeAgo(item.at) }}</time>
        </div>
      </div>
      <EmptyState v-else title="Belum ada aktivitas" message="Tandai satu kata atau kerjakan satu latihan untuk memulai catatan." action-to="/materials/vocabulary" action-label="Buka Vocabulary" />
    </section>
  </div>
</template>

<style scoped>
.welcome { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.6fr); gap: 2rem; align-items: center; padding-bottom: 2rem; border-bottom: 1px solid var(--border); }
.welcome h1 { margin-top: 0.9rem; }
.welcome .lede { margin-top: 1rem; }
.welcome-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.2rem; margin-top: 1.8rem; }
.welcome-leaf { display: grid; place-items: center; }
.welcome-leaf svg { width: 100%; max-width: 320px; }
.summary-card { display: grid; justify-items: center; gap: 0.8rem; text-align: center; }
.goal-card { display: grid; gap: 0.7rem; }
.suggestions { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.85rem; }
.suggestion { display: grid; grid-template-columns: 40px minmax(0, 1fr) 18px; gap: 0.8rem; align-items: center; padding: 1rem; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface); transition: transform 150ms ease, border-color 150ms ease; }
.suggestion:hover { transform: translateY(-2px); border-color: var(--success); }
.suggestion-icon { width: 40px; height: 40px; border-radius: 10px; display: grid; place-items: center; background: var(--surface-sage); color: var(--brand); }
.suggestion-icon svg { width: 19px; height: 19px; }
.suggestion strong { display: block; font-family: var(--font-display); font-size: 1rem; }
.suggestion small { display: block; font-size: 0.76rem; color: var(--text-soft); margin-top: 0.15rem; line-height: 1.4; }
.suggestion-arrow { width: 16px; height: 16px; color: var(--success); }
.timeline-row { display: grid; grid-template-columns: 12px minmax(0, 1fr) auto; gap: 0.9rem; align-items: start; padding: 0.75rem 0; border-bottom: 1px solid var(--border); }
.timeline-row:last-child { border-bottom: 0; padding-bottom: 0; }
.timeline-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--success); margin-top: 7px; }
.timeline-dot.test-vocabulary, .timeline-dot.test-grammar { background: var(--accent); }
.timeline-dot.listening { background: var(--danger); }
.timeline-row strong { display: block; font-size: 0.9rem; }
@media (max-width: 860px) { .welcome { grid-template-columns: minmax(0, 1fr); } .welcome-leaf { display: none; } .suggestions { grid-template-columns: minmax(0, 1fr); } }
</style>
