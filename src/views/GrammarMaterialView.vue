<script setup>
import { computed, onMounted, ref } from 'vue'
import { Check, ArrowRight } from 'lucide-vue-next'
import GrammarLesson from '../components/GrammarLesson.vue'
import { grammarLessons } from '../data/grammar'
import { useStore } from '../composables/useStore'
import { useToast } from '../composables/useToast'

const { state, toggleGrammar, setLastMaterial } = useStore()
const { notify } = useToast()

const openId = ref(grammarLessons[0].id)
const completed = computed(() => state.progress.grammarCompleted)

onMounted(() => setLastMaterial('/materials/grammar', 'Grammar Material'))

function open(id) {
  openId.value = openId.value === id ? null : id
}

function toggleComplete(id) {
  const done = toggleGrammar(id)
  notify(done ? 'Bab ditandai selesai.' : 'Tanda selesai pada bab dihapus.')
}
</script>

<template>
  <div class="grammar-material">
    <header class="page-head">
      <span class="eyebrow">Buku pandangan · Grammar</span>
      <h1>Delapan bab untuk kalimat yang jelas.</h1>
      <p class="lede">Baca polanya, lihat contohnya, lalu tandai bab yang sudah kamu pahami. Setiap bab mengarah ke latihan singkat di Grammar Test.</p>
    </header>

    <div class="material-layout">
      <aside class="chapter-rail" aria-label="Daftar bab grammar">
        <p class="rail-label">Isi buku</p>
        <button
          v-for="lesson in grammarLessons" :key="lesson.id" type="button"
          :class="{ active: openId === lesson.id, done: completed.includes(lesson.id) }"
          @click="open(lesson.id)"
        >
          <span class="chapter-num">{{ lesson.number }}</span>
          <span class="chapter-name">{{ lesson.title }}</span>
          <Check v-if="completed.includes(lesson.id)" class="chapter-check" />
        </button>
        <RouterLink to="/tests/grammar" class="rail-test">Ke Grammar Test <ArrowRight /></RouterLink>
      </aside>

      <div class="chapter-main">
        <div class="chapter-progress">
          <span>{{ completed.length }} dari {{ grammarLessons.length }} bab selesai</span>
          <div class="progress-track"><div class="progress-fill" :style="{ width: `${(completed.length / grammarLessons.length) * 100}%` }" /></div>
        </div>
        <GrammarLesson
          v-for="lesson in grammarLessons" :key="lesson.id"
          :lesson="lesson" :expanded="openId === lesson.id" :completed="completed.includes(lesson.id)"
          @toggle="open(lesson.id)" @complete="toggleComplete(lesson.id)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.material-layout { display: grid; grid-template-columns: 250px minmax(0, 1fr); gap: clamp(1rem, 2.5vw, 2rem); align-items: start; }
.chapter-rail { position: sticky; top: calc(var(--header-h) + 1rem); border-left: 1px solid var(--border); padding-left: 0.85rem; display: grid; gap: 2px; }
.rail-label { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: var(--text-soft); margin-bottom: 0.4rem; }
.chapter-rail button { display: grid; grid-template-columns: 26px minmax(0, 1fr) 16px; gap: 0.5rem; align-items: center; border: 0; background: transparent; color: var(--text-soft); text-align: left; padding: 0.55rem 0.6rem; min-height: 44px; border-radius: 7px; font-size: 0.83rem; }
.chapter-rail button:hover { background: var(--surface-soft); color: var(--text); }
.chapter-rail button.active { background: var(--brand); color: var(--brand-on); font-weight: 600; }
.chapter-num { font-family: var(--font-display); opacity: 0.8; }
.chapter-name { line-height: 1.3; }
.chapter-check { width: 15px; height: 15px; color: var(--success); }
.chapter-rail button.active .chapter-check { color: var(--brand-on); }
.rail-test { margin-top: 0.8rem; padding: 0.6rem; font-size: 0.8rem; font-weight: 600; color: var(--brand); border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
.rail-test svg { width: 15px; height: 15px; }
.chapter-main { display: grid; gap: 0.8rem; min-width: 0; }
.chapter-progress { display: grid; gap: 0.5rem; font-size: 0.8rem; color: var(--text-soft); background: var(--surface-sand); padding: 0.8rem 1rem; border-radius: var(--radius-sm); }
@media (max-width: 860px) {
  .material-layout { grid-template-columns: minmax(0, 1fr); }
  .chapter-rail { position: static; display: flex; overflow-x: auto; border-left: 0; border-bottom: 1px solid var(--border); padding: 0 0 0.6rem; }
  .chapter-rail button { flex: none; min-width: max-content; }
  .rail-label, .rail-test { display: none; }
}
</style>
