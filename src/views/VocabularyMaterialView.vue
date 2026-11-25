<script setup>
import { computed, onMounted, ref } from 'vue'
import { Search, X, Check, CheckCheck } from 'lucide-vue-next'
import VocabularyEntry from '../components/VocabularyEntry.vue'
import EmptyState from '../components/EmptyState.vue'
import { vocabulary, vocabularyThemes } from '../data/vocabulary'
import { useStore } from '../composables/useStore'
import { useToast } from '../composables/useToast'

const { state, toggleWord, markWords, setLastMaterial } = useStore()
const { notify } = useToast()

const query = ref('')
const activeTheme = ref('all')
const selectedId = ref(null)

onMounted(() => setLastMaterial('/materials/vocabulary', 'Vocabulary Material'))

const learned = computed(() => state.progress.vocabularyLearned)

const selectedEntry = computed(() => vocabulary.find((entry) => entry.id === selectedId.value) || null)

const filtered = computed(() => {
  const needle = query.value.trim().toLowerCase()
  return vocabulary.filter((entry) => {
    const themeMatch = activeTheme.value === 'all' || entry.theme === activeTheme.value
    const textMatch = !needle || [entry.word, entry.meaning, entry.example, entry.translation].some((value) => value.toLowerCase().includes(needle))
    return themeMatch && textMatch
  })
})

const themeName = (id) => vocabularyThemes.find((theme) => theme.id === id)?.name || id

function toggle(id) {
  const added = toggleWord(id)
  notify(added ? 'Kata ditandai sebagai dipelajari.' : 'Tanda kata dihapus.')
}

function markTheme() {
  const ids = filtered.value.map((entry) => entry.id)
  const added = markWords(ids)
  notify(added ? `${added} kata ditandai sebagai dipelajari.` : 'Semua kata di filter ini sudah dipelajari.')
}
</script>

<template>
  <div class="vocab-material">
    <header class="page-head">
      <span class="eyebrow">Catatan lapangan · Kosakata</span>
      <h1>Indeks kata yang bisa kamu rawat.</h1>
      <p class="lede">Cari kata, pilih tema, lalu tandai yang sudah kamu kuasai. Status kata muncul kembali di Dashboard dan Progress.</p>
    </header>

    <div v-if="selectedEntry" class="word-detail surface surface-sand surface-pad">
      <button type="button" class="detail-close" aria-label="Tutup detail kata" @click="selectedId = null"><X /></button>
      <span class="eyebrow">Detail kata</span>
      <h2>{{ selectedEntry.word }} <small>{{ selectedEntry.type }}</small></h2>
      <p class="detail-meaning">{{ selectedEntry.meaning }}</p>
      <div class="detail-grid">
        <div><span>Contoh</span><p>{{ selectedEntry.example }}</p></div>
        <div><span>Terjemahan</span><p>{{ selectedEntry.translation }}</p></div>
        <div><span>Tema</span><p>{{ themeName(selectedEntry.theme) }}</p></div>
      </div>
      <button type="button" class="btn btn-sm" :class="learned.includes(selectedEntry.id) ? 'btn-outline' : 'btn-primary'" @click="toggle(selectedEntry.id)">
        <Check v-if="learned.includes(selectedEntry.id)" />
        {{ learned.includes(selectedEntry.id) ? 'Sudah dipelajari' : 'Tandai dipelajari' }}
      </button>
    </div>

    <div class="material-layout">
      <aside class="theme-rail" aria-label="Tema kosakata">
        <p class="rail-label">Tema</p>
        <button type="button" :class="{ active: activeTheme === 'all' }" @click="activeTheme = 'all'">
          <span>Semua kata</span><small>{{ vocabulary.length }}</small>
        </button>
        <button v-for="theme in vocabularyThemes" :key="theme.id" type="button" :class="{ active: activeTheme === theme.id }" @click="activeTheme = theme.id">
          <span>{{ theme.name }}</span><small>{{ vocabulary.filter((entry) => entry.theme === theme.id).length }}</small>
        </button>
      </aside>

      <div class="material-main">
        <div class="search-bar">
          <label class="input-wrap">
            <Search />
            <span class="sr-only">Cari kata</span>
            <input v-model="query" class="input" type="search" placeholder="Cari kata atau arti…" />
          </label>
          <button type="button" class="btn btn-outline btn-sm" :disabled="!filtered.length" @click="markTheme"><CheckCheck /> Tandai filter ini</button>
        </div>

        <p class="result-line small muted">
          {{ filtered.length }} entri · {{ learned.length }} dari {{ vocabulary.length }} kata dipelajari
        </p>

        <div v-if="filtered.length" class="entries surface surface-pad">
          <VocabularyEntry
            v-for="entry in filtered" :key="entry.id"
            :entry="entry" :learned="learned.includes(entry.id)"
            @toggle="toggle" @select="selectedId = $event"
          />
        </div>
        <EmptyState v-else title="Kata tidak ditemukan" message="Ubah kata kunci atau pilih tema lain." />
      </div>
    </div>
  </div>
</template>

<style scoped>
.word-detail { position: relative; margin-bottom: 1.5rem; }
.detail-close { position: absolute; top: 1rem; right: 1rem; border: 0; background: transparent; color: var(--text-soft); min-height: 36px; min-width: 36px; display: grid; place-items: center; }
.word-detail h2 { font-size: 2rem; margin-top: 0.6rem; }
.word-detail h2 small { font-family: var(--font-body); font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-soft); }
.detail-meaning { font-size: 1rem; color: var(--text-soft); margin-top: 0.3rem; }
.detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin: 1.2rem 0; }
.detail-grid span { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: var(--text-soft); }
.detail-grid p { font-size: 0.9rem; margin-top: 0.25rem; line-height: 1.6; }
.material-layout { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: clamp(1rem, 2.5vw, 2rem); align-items: start; }
.theme-rail { position: sticky; top: calc(var(--header-h) + 1rem); display: grid; gap: 2px; border-left: 1px solid var(--border); padding-left: 0.85rem; }
.rail-label { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: var(--text-soft); margin-bottom: 0.4rem; }
.theme-rail button { display: flex; justify-content: space-between; gap: 0.5rem; border: 0; background: transparent; color: var(--text-soft); text-align: left; padding: 0.5rem 0.6rem; min-height: 40px; border-radius: 7px; font-size: 0.83rem; }
.theme-rail button:hover { background: var(--surface-soft); color: var(--text); }
.theme-rail button.active { background: var(--brand); color: var(--brand-on); font-weight: 600; }
.theme-rail button small { opacity: 0.75; }
.search-bar { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; justify-content: space-between; }
.input-wrap { position: relative; display: block; flex: 1; min-width: 220px; }
.input-wrap svg { position: absolute; left: 0.8rem; top: 50%; transform: translateY(-50%); width: 17px; height: 17px; color: var(--text-soft); }
.input-wrap .input { padding-left: 2.4rem; }
.result-line { margin: 0.9rem 0 0.5rem; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 860px) {
  .material-layout { grid-template-columns: minmax(0, 1fr); }
  .theme-rail { position: static; display: flex; overflow-x: auto; border-left: 0; border-bottom: 1px solid var(--border); padding: 0 0 0.6rem; }
  .theme-rail button { white-space: nowrap; flex: none; }
  .rail-label { display: none; }
}
</style>
