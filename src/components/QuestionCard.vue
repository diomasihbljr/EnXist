<script setup>
import { computed } from 'vue'
import { ArrowRight, CircleCheck, CircleX } from 'lucide-vue-next'
import AnswerOption from './AnswerOption.vue'

const props = defineProps({
  question: { type: Object, required: true },
  index: { type: Number, required: true },
  total: { type: Number, required: true },
  selected: { type: Number, default: null },
  submitted: { type: Boolean, default: false }
})
const emit = defineEmits(['select', 'submit', 'next'])

const isCorrect = computed(() => props.selected === props.question.answer)
const canSubmit = computed(() => props.selected !== null && !props.submitted)
</script>

<template>
  <article class="question-card surface surface-pad">
    <div class="q-top">
      <span class="eyebrow">Soal {{ index + 1 }} dari {{ total }}</span>
      <span class="tag">{{ question.type || question.topic }}</span>
    </div>
    <div class="progress-track" :aria-label="`Soal ${index + 1} dari ${total}`">
      <div class="progress-fill" :style="{ width: `${((index + 1) / total) * 100}%` }" />
    </div>
    <h2 class="q-prompt">{{ question.prompt }}</h2>

    <div class="q-options">
      <AnswerOption
        v-for="(option, optionIndex) in question.options"
        :key="optionIndex"
        :option="option"
        :index="optionIndex"
        :selected="selected === optionIndex"
        :revealed="submitted"
        :correct-index="question.answer"
        :disabled="submitted"
        @select="emit('select', $event)"
      />
    </div>

    <div v-if="submitted" class="feedback" :class="isCorrect ? 'feedback-good' : 'feedback-bad'" role="status">
      <component :is="isCorrect ? CircleCheck : CircleX" />
      <div>
        <strong>{{ isCorrect ? 'Benar' : 'Belum tepat' }}</strong>
        <p>{{ question.explanation }}</p>
        <p v-if="!isCorrect" class="small">Jawaban yang benar: {{ String.fromCharCode(65 + question.answer) }}. {{ question.options[question.answer] }}</p>
      </div>
    </div>

    <div class="q-actions">
      <button v-if="!submitted" type="button" class="btn btn-primary" :disabled="!canSubmit" @click="emit('submit')">
        Kirim jawaban <ArrowRight />
      </button>
      <button v-else type="button" class="btn btn-primary" @click="emit('next')">
        {{ index === total - 1 ? 'Lihat hasil' : 'Soal berikutnya' }} <ArrowRight />
      </button>
    </div>
  </article>
</template>

<style scoped>
.q-top { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap; }
.q-prompt { margin-top: 1.5rem; font-size: clamp(1.3rem, 2.5vw, 1.8rem); }
.q-options { display: grid; gap: 0.65rem; margin-top: 1.25rem; }
.q-actions { margin-top: 1.5rem; display: flex; justify-content: flex-end; }
.feedback {
  margin-top: 1.25rem;
  padding: 0.9rem 1rem;
  border-radius: var(--radius-sm);
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  border: 1px solid transparent;
}
.feedback svg { width: 20px; height: 20px; flex: none; margin-top: 2px; }
.feedback strong { display: block; font-size: 0.9rem; }
.feedback p { font-size: 0.85rem; line-height: 1.55; margin-top: 0.2rem; }
.feedback-good { background: color-mix(in srgb, var(--success) 12%, var(--surface)); color: var(--success); border-color: color-mix(in srgb, var(--success) 30%, transparent); }
.feedback-bad { background: color-mix(in srgb, var(--danger) 10%, var(--surface)); color: var(--danger); border-color: color-mix(in srgb, var(--danger) 28%, transparent); }
.feedback-bad strong, .feedback-good strong { color: inherit; }
.feedback-bad p, .feedback-good p { color: var(--text); }
@media (max-width: 480px) { .q-actions .btn { width: 100%; } }
</style>
