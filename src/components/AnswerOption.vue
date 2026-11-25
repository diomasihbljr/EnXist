<script setup>
import { Check, X } from 'lucide-vue-next'

const props = defineProps({
  option: { type: String, required: true },
  index: { type: Number, required: true },
  selected: { type: Boolean, default: false },
  revealed: { type: Boolean, default: false },
  correctIndex: { type: Number, default: -1 },
  disabled: { type: Boolean, default: false }
})
const emit = defineEmits(['select'])

const isCorrect = () => props.index === props.correctIndex
const showState = () => props.revealed && (props.selected || isCorrect())
</script>

<template>
  <button
    type="button"
    class="answer-option"
    :class="{ selected, correct: revealed && isCorrect(), wrong: revealed && selected && !isCorrect() }"
    :aria-pressed="selected"
    :disabled="disabled"
    @click="emit('select', index)"
  >
    <span class="answer-letter">{{ String.fromCharCode(65 + index) }}</span>
    <span class="answer-text">{{ option }}</span>
    <span v-if="showState()" class="answer-mark" :aria-label="isCorrect() ? 'Benar' : 'Salah'">
      <Check v-if="isCorrect()" />
      <X v-else />
    </span>
  </button>
</template>

<style scoped>
.answer-option {
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-align: left;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  transition: border-color 150ms ease, background-color 150ms ease, transform 140ms ease;
}
.answer-option:not(:disabled):hover { border-color: var(--success); transform: translateY(-2px); }
.answer-option.selected { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, var(--surface)); }
.answer-option.correct { border-color: var(--success); background: color-mix(in srgb, var(--success) 14%, var(--surface)); }
.answer-option.wrong { border-color: var(--danger); background: color-mix(in srgb, var(--danger) 12%, var(--surface)); }
.answer-letter {
  width: 30px;
  height: 30px;
  flex: none;
  display: grid;
  place-items: center;
  border-radius: 7px;
  background: var(--surface-soft);
  color: var(--text-soft);
  font-size: 0.78rem;
  font-weight: 700;
}
.answer-text { flex: 1; line-height: 1.4; }
.answer-mark { width: 18px; height: 18px; color: var(--success); }
.answer-option.wrong .answer-mark { color: var(--danger); }
</style>
