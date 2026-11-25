<script setup>
import QuestionCard from '../components/QuestionCard.vue'
import TestResult from '../components/TestResult.vue'
import { vocabularyQuestions } from '../data/tests'
import { useTestRunner } from '../composables/useTestRunner'
import { useStore } from '../composables/useStore'

const { state } = useStore()
const { index, selected, submitted, finished, current, total, score, choose, submit, next, restart } = useTestRunner({
  questions: vocabularyQuestions,
  type: 'vocabulary'
})

const lastScore = () => state.progress.testResults.find((result) => result.type === 'vocabulary')
</script>

<template>
  <div class="test-page">
    <header class="page-head">
      <span class="eyebrow">Latihan · Vocabulary</span>
      <h1>Uji kata yang sudah kamu kumpulkan.</h1>
      <p class="lede">Dua belas pertanyaan pendek: arti kata, konteks, sinonim, dan antonim. Pilih satu jawaban, kirim, lalu baca penjelasannya.</p>
    </header>

    <p v-if="lastScore()" class="small muted previous">Hasil terakhir: {{ lastScore().score }}/{{ lastScore().total }} benar.</p>

    <div v-if="!finished" class="test-area">
      <QuestionCard
        :question="current" :index="index" :total="total"
        :selected="selected" :submitted="submitted"
        @select="choose" @submit="submit" @next="next"
      />
      <p class="small muted practice-note">Hasil latihan tersimpan di perangkat ini dan muncul pada halaman Progress.</p>
    </div>
    <TestResult v-else title="Vocabulary Test" :score="score" :total="total" @restart="restart" />
  </div>
</template>

<style scoped>
.test-page { max-width: 820px; margin-inline: auto; }
.test-area { display: grid; gap: 0.75rem; }
.previous { margin-top: -0.75rem; margin-bottom: 1rem; }
.practice-note { text-align: center; }
</style>
