export function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return structuredClone(fallback)
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : structuredClone(fallback)
  } catch {
    return structuredClone(fallback)
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function removeStorage(key) {
  try {
    window.localStorage.removeItem(key)
  } catch {
    /* storage tidak tersedia — abaikan dengan aman */
  }
}
