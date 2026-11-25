<script setup>
import { Check, Plus } from 'lucide-vue-next'

const props = defineProps({
  entry: { type: Object, required: true },
  learned: { type: Boolean, default: false }
})
const emit = defineEmits(['toggle', 'select'])
</script>

<template>
  <article class="vocab-entry" :class="{ learned }">
    <div class="vocab-main">
      <div>
        <h4><button type="button" class="word-button" @click="emit('select', entry.id)">{{ entry.word }}</button> <span class="vocab-type">{{ entry.type }}</span></h4>
        <p class="vocab-meaning">{{ entry.meaning }}</p>
      </div>
      <button
        type="button" class="btn btn-sm"
        :class="learned ? 'btn-outline' : 'btn-primary'"
        :aria-label="learned ? `Tandai ${entry.word} belum dipelajari` : `Tandai ${entry.word} sudah dipelajari`"
        @click="emit('toggle', entry.id)"
      >
        <Check v-if="learned" />
        <Plus v-else />
        {{ learned ? 'Dipelajari' : 'Tandai' }}
      </button>
    </div>
    <div class="vocab-example">
      <p>{{ entry.example }}</p>
      <p class="small muted">{{ entry.translation }}</p>
    </div>
  </article>
</template>

<style scoped>
.vocab-entry {
  border-bottom: 1px solid var(--border);
  padding: 1.1rem 0;
  display: grid;
  gap: 0.7rem;
}
.vocab-entry:last-child { border-bottom: 0; }
.vocab-main { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
.vocab-main h4 { font-family: var(--font-display); font-size: 1.18rem; }
.word-button { min-height: 24px; border: 0; background: transparent; padding: 0; font: inherit; color: inherit; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px; transition: text-decoration-color 150ms ease; }
.word-button:hover { text-decoration-color: var(--accent); }
.vocab-type { font-family: var(--font-body); font-size: 0.68rem; color: var(--text-soft); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin-left: 0.35rem; }
.vocab-meaning { font-size: 0.9rem; color: var(--text-soft); margin-top: 0.2rem; }
.vocab-example { border-left: 2px solid var(--surface-sage); padding-left: 0.85rem; font-size: 0.88rem; line-height: 1.6; }
.vocab-entry.learned .vocab-example { border-left-color: var(--success); }
@media (max-width: 480px) { .vocab-main { flex-direction: column; } }
</style>
