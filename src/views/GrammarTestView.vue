<script setup>
import QuestionCard from '../components/QuestionCard.vue'
import TestResult from '../components/TestResult.vue'
import { grammarQuestions } from '../data/tests'
import { useTestRunner } from '../composables/useTestRunner'
import { useStore } from '../composables/useStore'

const { state } = useStore()
const { index, selected, submitted, finished, current, total, score, choose, submit, next, restart } = useTestRunner({
  questions: grammarQuestions,
  type: 'grammar'
})

const lastScore = () => state.progress.testResults.find((result) => result.type === 'grammar')
</script>

<template>
  <div class="test-page">
    <header class="page-head">
      <span class="eyebrow">Latihan · Grammar</span>
      <h1>Pilih bentuk yang paling pas.</h1>
      <p class="lede">Empat belas soal dari delapan bab: tense, agreement, articles, prepositions, dan urutan kalimat. Setiap jawaban disertai alasan singkat.</p>
    </header>

    <p v-if="lastScore()" class="small muted previous">Hasil terakhir: {{ lastScore().score }}/{{ lastScore().total }} benar.</p>

    <div v-if="!finished" class="test-area">
      <QuestionCard
        :question="current" :index="index" :total="total"
        :selected="selected" :submitted="submitted"
        @select="choose" @submit="submit" @next="next"
      />
      <p class="small muted practice-note">Bab yang relevan bisa dibuka lagi di Grammar Material.</p>
    </div>
    <TestResult v-else title="Grammar Test" :score="score" :total="total" @restart="restart" />
  </div>
</template>

<style scoped>
.test-page { max-width: 820px; margin-inline: auto; }
.test-area { display: grid; gap: 0.75rem; }
.previous { margin-top: -0.75rem; margin-bottom: 1rem; }
.practice-note { text-align: center; }
</style>
