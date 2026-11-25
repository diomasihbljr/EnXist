<script setup>
import { ref, computed } from 'vue'
import { Play, Pause, Volume2, FileAudio } from 'lucide-vue-next'

const props = defineProps({
  src: { type: String, default: '' },
  title: { type: String, required: true },
  setting: { type: String, default: '' }
})

const audioEl = ref(null)
const playing = ref(false)
const current = ref(0)
const total = ref(0)
const failed = ref(false)
const hasAudio = computed(() => Boolean(props.src) && !failed.value)

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${String(secs).padStart(2, '0')}`
}

function toggle() {
  if (!audioEl.value || !hasAudio.value) return
  if (audioEl.value.paused) audioEl.value.play().catch(() => { failed.value = true })
  else audioEl.value.pause()
}

function seek(event) {
  if (!audioEl.value) return
  audioEl.value.currentTime = Number(event.target.value)
}
</script>

<template>
  <div class="audio-player">
    <div class="audio-head">
      <div>
        <span class="eyebrow">Sesi dengar</span>
        <h3>{{ title }}</h3>
        <p v-if="setting" class="small muted">{{ setting }}</p>
      </div>
      <span class="tag">{{ hasAudio ? 'Audio tersedia' : 'Transkrip tersedia' }}</span>
    </div>

    <template v-if="hasAudio">
      <div class="audio-controls">
        <button type="button" class="audio-play" :aria-label="playing ? 'Jeda audio' : 'Putar audio'" @click="toggle">
          <Pause v-if="playing" />
          <Play v-else />
        </button>
        <div class="audio-timeline">
          <input
            type="range" min="0" :max="total || 1" step="0.1" :value="current"
            :aria-label="`Posisi audio ${title}`" @input="seek"
          />
          <div class="audio-times small muted">
            <span>{{ formatTime(current) }}</span>
            <span>{{ formatTime(total) }}</span>
          </div>
        </div>
        <Volume2 class="audio-volume" aria-hidden="true" />
      </div>
      <audio
        ref="audioEl" :src="src" preload="metadata"
        @loadedmetadata="total = audioEl?.duration || 0"
        @timeupdate="current = audioEl?.currentTime || 0"
        @play="playing = true" @pause="playing = false" @ended="playing = false"
        @error="failed = true"
      />
      <p class="small muted">Dengarkan dua kali bila perlu, lalu jawab pertanyaan di bawah.</p>
    </template>

    <div v-else class="audio-fallback">
      <FileAudio />
      <div>
        <strong>Belum ada berkas audio untuk sesi ini.</strong>
        <p>Bahan dengar belum disertakan dalam versi ini. Transkrip lengkap tersedia di bawah — bacalah, lalu jawab pertanyaan yang mengikuti. Tidak ada tombol putar palsu.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.audio-player { display: grid; gap: 1.1rem; }
.audio-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; }
.audio-head h3 { margin-top: 0.45rem; font-size: 1.3rem; }
.audio-controls { display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--surface-soft); border-radius: var(--radius); border: 1px solid var(--border); }
.audio-play {
  width: 52px; height: 52px; flex: none;
  border-radius: 50%; border: 0;
  background: var(--brand); color: var(--brand-on);
  display: grid; place-items: center;
  transition: transform 140ms ease;
}
.audio-play:hover { transform: scale(1.05); }
.audio-play svg { width: 21px; height: 21px; }
.audio-timeline { flex: 1; min-width: 0; display: grid; gap: 0.3rem; }
.audio-timeline input { width: 100%; accent-color: var(--success); cursor: pointer; min-height: 24px; }
.audio-times { display: flex; justify-content: space-between; }
.audio-volume { width: 18px; height: 18px; color: var(--text-soft); flex: none; }
.audio-fallback { display: flex; gap: 0.8rem; align-items: flex-start; padding: 1rem; border: 1px dashed var(--border); border-radius: var(--radius); background: var(--surface-sand); }
.audio-fallback svg { width: 22px; height: 22px; color: var(--danger); flex: none; margin-top: 2px; }
.audio-fallback strong { font-size: 0.88rem; color: var(--text); }
.audio-fallback p { font-size: 0.82rem; color: var(--text-soft); line-height: 1.6; margin-top: 0.25rem; }
@media (max-width: 480px) { .audio-volume { display: none; } }
</style>
