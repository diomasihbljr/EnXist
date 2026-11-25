import { ref, computed, unref } from 'vue'
import { useStore } from './useStore'

export function useTestRunner({ questions, type, onFinish = null }) {
  const store = useStore()
  const list = computed(() => unref(questions) || [])
  const index = ref(0)
  const selected = ref(null)
  const submitted = ref(false)
  const answers = ref([])
  const finished = ref(false)

  const current = computed(() => list.value[index.value])
  const total = computed(() => list.value.length)
  const score = computed(() => answers.value.reduce((sum, answer, questionIndex) => (
    sum + (answer === list.value[questionIndex].answer ? 1 : 0)
  ), 0))
  const correct = computed(() => score.value === total.value)

  function choose(optionIndex) {
    if (!submitted.value) selected.value = optionIndex
  }

  function submit() {
    if (selected.value === null || submitted.value) return
    submitted.value = true
    answers.value[index.value] = selected.value
  }

  function next() {
    if (!submitted.value) return
    if (index.value < total.value - 1) {
      index.value += 1
      const previous = answers.value[index.value]
      selected.value = previous === undefined ? null : previous
      submitted.value = previous !== undefined
    } else {
      finish()
    }
  }

  function finish() {
    finished.value = true
    store.saveTestResult(type, { score: score.value, total: total.value, detail: correct.value ? 'Sempurna' : 'Perlu diulang' })
    if (onFinish) onFinish()
  }

  function restart() {
    index.value = 0
    selected.value = null
    submitted.value = false
    answers.value = []
    finished.value = false
  }

  return { index, selected, submitted, answers, finished, current, total, score, correct, choose, submit, next, restart }
}
