import { watch } from 'vue'
import { useStore } from './useStore'

export function useTheme() {
  const store = useStore()
  function apply(theme) {
    const root = document.documentElement
    root.dataset.theme = theme === 'dark' ? 'dark' : 'light'
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1B261F' : '#FEFAE0')
  }
  watch(() => store.state.settings.theme, apply, { immediate: true })
  return { apply }
}
