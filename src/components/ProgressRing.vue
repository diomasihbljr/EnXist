<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: { type: Number, default: 0 },
  label: { type: String, default: '' },
  size: { type: Number, default: 150 }
})

const radius = computed(() => (props.size - 16) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const offset = computed(() => circumference.value * (1 - Math.min(100, Math.max(0, props.value)) / 100))
</script>

<template>
  <div class="ring" :style="{ width: `${size}px`, height: `${size}px` }" role="img" :aria-label="`${label}: ${value}%`">
    <svg :width="size" :height="size" viewBox="0 0 160 160" aria-hidden="true">
      <circle cx="80" cy="80" :r="radius" fill="none" stroke="var(--border)" stroke-width="11" />
      <circle
        cx="80" cy="80" :r="radius" fill="none" stroke="var(--success)" stroke-width="11"
        stroke-linecap="round" :stroke-dasharray="circumference" :stroke-dashoffset="offset"
        transform="rotate(-90 80 80)"
      />
    </svg>
    <div class="ring-value">
      <strong>{{ value }}%</strong>
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<style scoped>
.ring { position: relative; flex: none; }
.ring svg { width: 100%; height: 100%; }
.ring-value {
  position: absolute;
  inset: 0;
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
  gap: 0.1rem;
}
.ring-value strong { font-family: var(--font-display); font-size: 1.65rem; line-height: 1; }
.ring-value span { font-size: 0.7rem; color: var(--text-soft); }
</style>
