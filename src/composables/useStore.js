import { reactive, computed } from 'vue'
import { readStorage, writeStorage, removeStorage } from './useLocalStorage'
import { vocabulary } from '../data/vocabulary'
import { grammarLessons } from '../data/grammar'

const STORAGE_KEY = 'enxist:state:v1'

function todayISO(offset = 0) {
  const date = new Date()
  date.setDate(date.getDate() + offset)
  return date.toISOString().slice(0, 10)
}

function defaults() {
  return {
    profile: {
      name: 'Alya',
      email: 'alya@example.com',
      level: 'Elementary',
      startDate: todayISO(-18),
      about: 'Belajar satu halaman setiap hari.'
    },
    settings: {
      theme: 'light',
      notifications: true,
      reminder: 'evening',
      pace: 'gentle'
    },
    progress: {
      vocabularyLearned: ['w01', 'w02', 'w07', 'w13', 'w25', 'w37'],
      grammarCompleted: ['simple-present', 'present-continuous'],
      listeningDone: [],
      testResults: [],
      activity: [
        { id: 'seed-1', label: 'Menyelesaikan materi Simple Present', type: 'grammar', minutes: 8, at: new Date(Date.now() - 86400000).toISOString() },
        { id: 'seed-2', label: 'Menandai 6 kata pertama', type: 'vocabulary', minutes: 6, at: new Date(Date.now() - 2 * 86400000).toISOString() }
      ],
      lastMaterial: null,
      dailyGoal: 10,
      weeklyGoal: 5
    }
  }
}

function hydrate() {
  const base = defaults()
  const saved = readStorage(STORAGE_KEY, base)
  return {
    profile: { ...base.profile, ...(saved.profile || {}) },
    settings: { ...base.settings, ...(saved.settings || {}) },
    progress: { ...base.progress, ...(saved.progress || {}) }
  }
}

const state = reactive(hydrate())

function persist() {
  writeStorage(STORAGE_KEY, state)
}

const vocabularyTotal = vocabulary.length
const grammarTotal = grammarLessons.length

const stats = computed(() => {
  const p = state.progress
  const vocabCount = p.vocabularyLearned.length
  const grammarCount = p.grammarCompleted.length
  const listeningCount = p.listeningDone.length
  const testCount = p.testResults.length
  const materialPart = (vocabCount / vocabularyTotal + grammarCount / grammarTotal) / 2
  const testPart = Math.min(testCount / 6, 1)
  const overall = Math.round((materialPart * 0.55 + testPart * 0.25 + (listeningCount / 3) * 0.2) * 100)

  const minutes = p.activity.reduce((sum, item) => sum + (Number(item.minutes) || 0), 0)
  const days = [...new Set(p.activity.map((item) => String(item.at).slice(0, 10)))].sort().reverse()

  return {
    vocabularyCount: vocabCount,
    vocabularyTotal,
    grammarCount,
    grammarTotal,
    listeningCount,
    testCount,
    minutes,
    activeDays: days.length,
    lastActiveDay: days[0] || null,
    overall: Math.min(100, Math.max(0, overall))
  }
})

function logActivity(label, type, minutes = 5) {
  state.progress.activity.unshift({
    id: `a-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label,
    type,
    minutes,
    at: new Date().toISOString()
  })
  if (state.progress.activity.length > 120) state.progress.activity.length = 120
  persist()
}

function toggleWord(id) {
  const list = state.progress.vocabularyLearned
  const index = list.indexOf(id)
  if (index >= 0) {
    list.splice(index, 1)
    logActivity('Menghapus tanda kata', 'vocabulary', 1)
    return false
  }
  list.push(id)
  logActivity('Menandai kata baru', 'vocabulary', 2)
  return true
}

function markWords(ids) {
  const added = ids.filter((id) => !state.progress.vocabularyLearned.includes(id))
  state.progress.vocabularyLearned.push(...added)
  if (added.length) logActivity(`Menandai ${added.length} kata`, 'vocabulary', added.length * 2)
  return added.length
}

function completeGrammar(id) {
  if (state.progress.grammarCompleted.includes(id)) return false
  state.progress.grammarCompleted.push(id)
  logActivity(`Menyelesaikan materi ${id.replaceAll('-', ' ')}`, 'grammar', 8)
  return true
}

function toggleGrammar(id) {
  const list = state.progress.grammarCompleted
  const index = list.indexOf(id)
  if (index >= 0) {
    list.splice(index, 1)
    persist()
    return false
  }
  return completeGrammar(id)
}

function saveTestResult(type, result) {
  state.progress.testResults.unshift({
    id: `t-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type,
    score: result.score,
    total: result.total,
    detail: result.detail || null,
    at: new Date().toISOString()
  })
  if (state.progress.testResults.length > 60) state.progress.testResults.length = 60
  logActivity(`Menyelesaikan tes ${type}`, `test-${type}`, 10)
}

function markListening(id) {
  if (state.progress.listeningDone.includes(id)) return false
  state.progress.listeningDone.push(id)
  logActivity('Menyelesaikan latihan listening', 'listening', 7)
  return true
}

function setLastMaterial(route, title) {
  state.progress.lastMaterial = { route, title, at: new Date().toISOString() }
  persist()
}

function updateProfile(patch) {
  Object.assign(state.profile, patch)
  persist()
}

function updateSettings(patch) {
  Object.assign(state.settings, patch)
  persist()
}

function updateGoals(patch) {
  Object.assign(state.progress, patch)
  persist()
}

function resetProgress() {
  const fresh = defaults()
  state.progress = fresh.progress
  persist()
}

function resetAll() {
  const fresh = defaults()
  state.profile = fresh.profile
  state.settings = fresh.settings
  state.progress = fresh.progress
  removeStorage(STORAGE_KEY)
  persist()
}

export function useStore() {
  return {
    state,
    stats,
    toggleWord,
    markWords,
    completeGrammar,
    toggleGrammar,
    saveTestResult,
    markListening,
    logActivity,
    setLastMaterial,
    updateProfile,
    updateSettings,
    updateGoals,
    resetProgress,
    resetAll,
    todayISO
  }
}
