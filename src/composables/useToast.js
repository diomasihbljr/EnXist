import { ref } from 'vue'

const toasts = ref([])
let counter = 0

export function useToast() {
  function notify(message) {
    const id = ++counter
    toasts.value.push({ id, message })
    window.setTimeout(() => {
      toasts.value = toasts.value.filter((item) => item.id !== id)
    }, 3200)
  }
  return { toasts, notify }
}
