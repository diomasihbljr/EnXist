import { computed } from 'vue'
import { useStore } from './useStore'

export function useProfile() {
  const store = useStore()
  const profile = computed(() => store.state.profile)
  const initials = computed(() => {
    const parts = profile.value.name.trim().split(/\s+/).filter(Boolean)
    return (parts.slice(0, 2).map((part) => part[0]).join('') || 'E').toUpperCase()
  })
  const memberSince = computed(() => {
    const value = profile.value.startDate
    if (!value) return '—'
    const date = new Date(value)
    return Number.isNaN(date.getTime())
      ? '—'
      : date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
  })
  return { profile, initials, memberSince, updateProfile: store.updateProfile }
}
