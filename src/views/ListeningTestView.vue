<script setup>
import { computed, ref, watch } from 'vue'
import { ChevronRight, BookOpen, Ear } from 'lucide-vue-next'
import AudioPlayer from '../components/AudioPlayer.vue'
import QuestionCard from '../components/QuestionCard.vue'
import TestResult from '../components/TestResult.vue'
import { listeningTracks } from '../data/listening'
import { useTestRunner } from '../composables/useTestRunner'
import { useStore } from '../composables/useStore'

const { state, markListening } = useStore()

const activeId = ref(listeningTracks[0].id)
const started = ref(false)
const showTranscript = ref(false)
const activeTrack = computed(() => listeningTracks.find((track) => track.id === activeId.value) || listeningTracks[0])
const questions = computed(() => activeTrack.value.questions.map((question) => ({ ...question, type: 'Listening' })))
const transcriptVisible = computed(() => showTranscript.value || !activeTrack.value.audioSrc)

const runner = useTestRunner({
  questions,
  type: 'listening',
  onFinish: () => markListening(activeTrack.value.id)
})

watch(activeId, () => {
  started.value = false
  showTranscript.value = false
  runner.restart()
})

const lastScore = () => state.progress.testResults.find((result) => result.type === 'listening')
const isDone = (id) => state.progress.listeningDone.includes(id)
</script>

<template>
  <div class="listening-page">
    <header class="page-head">
      <span class="eyebrow">Latihan · Listening</span>
      <h1>Dengar dulu, lalu jawab dengan tenang.</h1>
      <p class="lede">Tiga sesi pendek dengan instruksi sebelum pemutaran. Bila berkas audio belum tersedia, transkrip ditampilkan terbuka dan tetap bisa dikerjakan.</p>
    </header>

    <div class="track-picker" role="group" aria-label="Pilih sesi listening">
      <button
        v-for="(track, index) in listeningTracks" :key="track.id" type="button"
        :class="{ active: activeId === track.id }" :aria-pressed="activeId === track.id"
        @click="activeId = track.id"
      >
        <span class="track-num">0{{ index + 1 }}</span>
        <span><strong>{{ track.title }}</strong><small>{{ track.setting }}</small></span>
        <span v-if="isDone(track.id)" class="track-done">Selesai</span>
      </button>
    </div>

    <p v-if="lastScore()" class="small muted previous">Hasil terakhir: {{ lastScore().score }}/{{ lastScore().total }} benar.</p>

    <template v-if="!started">
      <section class="surface surface-sand surface-pad instructions">
        <span class="eyebrow">Sebelum mulai</span>
        <h2>{{ activeTrack.title }}</h2>
        <p class="prose">{{ activeTrack.instructions }}</p>
        <ul class="instruction-list">
          <li><Ear /> Dengarkan atau baca transkrip dengan saksama.</li>
          <li><BookOpen /> Pemutaran ulang diperbolehkan tanpa batas.</li>
          <li><ChevronRight /> Jawab {{ activeTrack.questions.length }} pertanyaan setelah siap.</li>
        </ul>
        <button type="button" class="btn btn-primary" @click="started = true">Mulai sesi <ChevronRight /></button>
      </section>
    </template>

    <template v-else>
      <section class="surface surface-pad listener">
        <AudioPlayer :src="activeTrack.audioSrc" :title="activeTrack.title" :setting="activeTrack.setting" />

        <div class="transcript">
          <button
            v-if="activeTrack.audioSrc" type="button" class="btn btn-quiet btn-sm"
            :aria-expanded="transcriptVisible" @click="showTranscript = !showTranscript"
          >
            {{ transcriptVisible ? 'Sembunyikan transkrip' : 'Tampilkan transkrip' }}
          </button>
          <div v-if="transcriptVisible" class="transcript-lines">
            <p v-for="(line, index) in activeTrack.transcript" :key="index">
              <strong>{{ line.speaker }}</strong> {{ line.text }}
            </p>
          </div>
        </div>
      </section>

      <div v-if="!runner.finished.value" class="test-area">
        <QuestionCard
          :question="runner.current.value" :index="runner.index.value" :total="runner.total.value"
          :selected="runner.selected.value" :submitted="runner.submitted.value"
          @select="runner.choose" @submit="runner.submit" @next="runner.next"
        />
      </div>
      <TestResult v-else title="Listening Test" :score="runner.score.value" :total="runner.total.value" :note="`Sesi: ${activeTrack.title}`" @restart="runner.restart" />
    </template>
  </div>
</template>

<style scoped>
.listening-page { max-width: 860px; margin-inline: auto; }
.track-picker { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.7rem; margin-bottom: 1.5rem; }
.track-picker button { display: grid; grid-template-columns: 30px minmax(0, 1fr); gap: 0.6rem; align-items: start; text-align: left; padding: 0.9rem; min-height: 84px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface); color: var(--text); transition: border-color 150ms ease, transform 150ms ease; }
.track-picker button:hover { transform: translateY(-2px); border-color: var(--success); }
.track-picker button.active { border-color: var(--accent); background: var(--surface-sand); }
.track-num { font-family: var(--font-display); color: var(--success); font-size: 1.1rem; }
.track-picker strong { display: block; font-family: var(--font-display); font-size: 0.95rem; line-height: 1.3; }
.track-picker small { display: block; font-size: 0.74rem; color: var(--text-soft); margin-top: 0.2rem; }
.track-done { grid-column: 2; font-size: 0.7rem; color: var(--success); font-weight: 700; }
.previous { margin-bottom: 1rem; }
.instructions { display: grid; gap: 0.9rem; justify-items: start; }
.instructions h2 { margin-top: 0.3rem; }
.instruction-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.6rem; font-size: 0.88rem; }
.instruction-list li { display: flex; gap: 0.6rem; align-items: center; }
.instruction-list svg { width: 17px; height: 17px; color: var(--success); flex: none; }
.listener { display: grid; gap: 1.2rem; }
.transcript { border-top: 1px solid var(--border); padding-top: 1rem; display: grid; gap: 0.6rem; }
.transcript-lines { display: grid; gap: 0.45rem; font-size: 0.86rem; line-height: 1.6; }
.transcript-lines strong { color: var(--success); margin-right: 0.35rem; }
.test-area { margin-top: 1.25rem; }
@media (max-width: 620px) { .track-picker { grid-template-columns: minmax(0, 1fr); } }
</style>
