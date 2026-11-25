<script setup>
import { ChevronDown, Check, ArrowUpRight } from 'lucide-vue-next'

defineProps({
  lesson: { type: Object, required: true },
  expanded: { type: Boolean, default: false },
  completed: { type: Boolean, default: false }
})
const emit = defineEmits(['toggle', 'complete'])
</script>

<template>
  <article class="grammar-lesson surface" :class="{ completed }">
    <button type="button" class="lesson-head" :aria-expanded="expanded" @click="emit('toggle')">
      <span class="lesson-number">{{ lesson.number }}</span>
      <span class="lesson-title">
        <strong>{{ lesson.title }}</strong>
        <small>{{ lesson.summary }}</small>
      </span>
      <span v-if="completed" class="tag tag-done"><Check /> Selesai</span>
      <ChevronDown class="lesson-chevron" :class="{ open: expanded }" />
    </button>

    <div v-if="expanded" class="lesson-body">
      <p class="prose">{{ lesson.explanation }}</p>

      <div class="pattern">
        <span>Pola</span>
        <strong>{{ lesson.pattern }}</strong>
      </div>

      <div class="examples">
        <p v-for="(example, index) in lesson.examples" :key="index" class="example-row">
          <span class="example-plus">+</span><span>{{ example.positive }}</span>
          <span class="example-minus">−</span><span>{{ example.negative }}</span>
          <span class="example-question">?</span><span>{{ example.question }}</span>
        </p>
      </div>

      <div class="note-block">
        <strong>Catatan penggunaan</strong>
        <p>{{ lesson.notes }}</p>
      </div>

      <div class="mistakes">
        <strong>Kesalahan umum</strong>
        <p v-for="(item, index) in lesson.mistakes" :key="index">
          <span class="wrong">✕ {{ item.wrong }}</span>
          <span class="right">✓ {{ item.right }}</span>
        </p>
      </div>

      <div class="lesson-actions">
        <button
          type="button" class="btn btn-sm"
          :class="completed ? 'btn-outline' : 'btn-primary'"
          @click="emit('complete')"
        >
          <Check v-if="completed" />
          {{ completed ? 'Tandai belum selesai' : 'Tandai selesai' }}
        </button>
        <RouterLink :to="lesson.practice" class="link-arrow">Latihan bab ini <ArrowUpRight /></RouterLink>
      </div>
    </div>
  </article>
</template>

<style scoped>
.grammar-lesson { overflow: hidden; }
.grammar-lesson.completed { border-color: color-mix(in srgb, var(--success) 45%, var(--border)); }
.lesson-head {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  background: transparent;
  border: 0;
  text-align: left;
  color: var(--text);
  min-height: 66px;
}
.lesson-head:hover { background: var(--surface-soft); }
.lesson-number { font-family: var(--font-display); font-size: 1.3rem; color: var(--success); width: 34px; flex: none; }
.lesson-title { flex: 1; min-width: 0; display: grid; gap: 0.1rem; }
.lesson-title strong { font-family: var(--font-display); font-size: 1.08rem; }
.lesson-title small { color: var(--text-soft); font-size: 0.8rem; }
.lesson-chevron { width: 18px; height: 18px; color: var(--text-soft); transition: transform 160ms ease; flex: none; }
.lesson-chevron.open { transform: rotate(180deg); }
.lesson-body { border-top: 1px solid var(--border); padding: 1.4rem 1.2rem 1.5rem; display: grid; gap: 1.25rem; }
.pattern { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: baseline; padding: 0.85rem 1rem; background: var(--surface-sand); border-radius: var(--radius-sm); }
.pattern span { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: var(--text-soft); }
.pattern strong { font-family: var(--font-display); font-weight: 600; }
.examples { display: grid; gap: 0.55rem; }
.example-row { display: grid; grid-template-columns: 18px 1fr; gap: 0.2rem 0.55rem; font-size: 0.88rem; line-height: 1.5; }
.example-row span:nth-child(3), .example-row span:nth-child(5) { grid-column: 1; margin-top: 0.35rem; }
.example-plus { color: var(--success); font-weight: 700; }
.example-minus { color: var(--danger); font-weight: 700; }
.example-question { color: var(--accent); font-weight: 700; }
.note-block, .mistakes { font-size: 0.88rem; line-height: 1.65; }
.note-block { border-left: 2px solid var(--accent); padding-left: 0.9rem; }
.note-block p { margin-top: 0.3rem; color: var(--text-soft); }
.mistakes p { display: flex; flex-wrap: wrap; gap: 0.35rem 1rem; margin-top: 0.35rem; font-size: 0.84rem; }
.wrong { color: var(--danger); }
.right { color: var(--success); }
.lesson-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; padding-top: 0.3rem; }
@media (max-width: 480px) { .lesson-head { padding: 0.9rem; gap: 0.6rem; } .lesson-body { padding: 1.1rem 0.9rem; } }
</style>
