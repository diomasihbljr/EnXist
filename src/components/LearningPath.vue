<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  items: { type: Array, required: true }
})

const pathEl = ref(null)
const points = ref([])
const width = 1000
const height = 240

const doneCount = computed(() => props.items.filter((item) => item.done).length)
const trailProgress = computed(() => props.items.length > 1 ? Math.round((doneCount.value / props.items.length) * 100) : 0)

onMounted(() => {
  if (!pathEl.value) return
  const length = pathEl.value.getTotalLength()
  points.value = props.items.map((_, index) => {
    const point = pathEl.value.getPointAtLength(length * (index / Math.max(1, props.items.length - 1)))
    return { x: (point.x / width) * 100, y: (point.y / height) * 100 }
  })
})
</script>

<template>
  <div class="trail">
    <div class="trail-map" aria-hidden="false">
      <svg viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
        <path
          ref="pathEl" id="trail-curve"
          d="M 30 178 C 140 30, 250 25, 350 130 S 560 220, 660 95 S 880 30, 970 120"
          fill="none" stroke="var(--border)" stroke-width="2.5" stroke-linecap="round"
        />
        <path
          d="M 30 178 C 140 30, 250 25, 350 130 S 560 220, 660 95 S 880 30, 970 120"
          fill="none" stroke="var(--success)" stroke-width="3" stroke-linecap="round"
          pathLength="100" :stroke-dasharray="`${trailProgress} 100`"
        />
      </svg>
      <RouterLink
        v-for="(item, index) in items" :key="item.label"
        :to="item.to"
        class="trail-node"
        :class="{ done: item.done, current: item.current }"
        :style="points[index] ? { left: `${points[index].x}%`, top: `${points[index].y}%` } : { display: 'none' }"
        :aria-label="`${item.label}${item.done ? ', selesai' : item.current ? ', sedang dipelajari' : ''}`"
      >
        <span class="trail-dot">{{ item.done ? '✓' : index + 1 }}</span>
        <span class="trail-label">{{ item.label }}</span>
      </RouterLink>
    </div>

    <ol class="trail-list">
      <li v-for="(item, index) in items" :key="item.label" :class="{ done: item.done, current: item.current }">
        <RouterLink :to="item.to">
          <span class="trail-index">{{ item.done ? '✓' : String(index + 1).padStart(2, '0') }}</span>
          <span>{{ item.label }}</span>
          <span class="small muted">{{ item.done ? 'Selesai' : item.current ? 'Lanjutkan' : 'Belum dimulai' }}</span>
        </RouterLink>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.trail-map { position: relative; height: 250px; }
.trail-map svg { width: 100%; height: 100%; display: block; }
.trail-node {
  position: absolute;
  transform: translate(-50%, -50%);
  display: grid;
  justify-items: center;
  gap: 0.3rem;
  width: max-content;
  max-width: 130px;
}
.trail-dot {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--border);
  color: var(--text-soft);
  font-family: var(--font-display);
  font-weight: 700;
  transition: transform 150ms ease, background-color 150ms ease;
}
.trail-node:hover .trail-dot { transform: scale(1.12); }
.trail-node.done .trail-dot { background: var(--success); border-color: var(--success); color: var(--success-on); }
.trail-node.current .trail-dot { border-color: var(--accent); background: var(--accent); color: var(--accent-on); }
.trail-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  padding: 0.12rem 0.3rem;
  border-radius: 4px;
  text-align: center;
}
.trail-list { display: none; list-style: none; margin: 0; padding: 0; }
.trail-list li { border-bottom: 1px solid var(--border); }
.trail-list a {
  display: grid;
  grid-template-columns: 32px 1fr auto;
  gap: 0.6rem;
  align-items: center;
  padding: 0.85rem 0.2rem;
  min-height: 52px;
  font-weight: 600;
}
.trail-index { font-family: var(--font-display); color: var(--success); }
.trail-list li.done .trail-index { color: var(--success); }
@media (max-width: 700px) {
  .trail-map { display: none; }
  .trail-list { display: block; }
}
</style>
