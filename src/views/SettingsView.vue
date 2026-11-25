<script setup>
import { computed, reactive, ref } from 'vue'
import { Moon, Sun, Bell, BookOpen, RotateCcw, X } from 'lucide-vue-next'
import { useStore } from '../composables/useStore'
import { useToast } from '../composables/useToast'

const { state, stats, updateSettings, updateGoals, resetProgress } = useStore()
const { notify } = useToast()

const confirmOpen = ref(false)
const goalDraft = reactive({
  dailyGoal: state.progress.dailyGoal,
  weeklyGoal: state.progress.weeklyGoal
})
const goalError = ref('')

const theme = computed(() => state.settings.theme)

function setTheme(value) {
  if (theme.value === value) return
  updateSettings({ theme: value })
  notify(value === 'dark' ? 'Tema gelap diterapkan.' : 'Tema terang diterapkan.')
}

function toggleNotifications() {
  const next = !state.settings.notifications
  updateSettings({ notifications: next })
  notify(next ? 'Pengingat demo diaktifkan.' : 'Pengingat demo dimatikan.')
}

function setReminder(event) {
  updateSettings({ reminder: event.target.value })
  notify('Waktu pengingat diperbarui.')
}

function setPace(event) {
  updateSettings({ pace: event.target.value })
  notify('Preferensi belajar diperbarui.')
}

function saveGoals() {
  const daily = Number(goalDraft.dailyGoal)
  const weekly = Number(goalDraft.weeklyGoal)
  if (!Number.isInteger(daily) || daily < 1 || daily > 100 || !Number.isInteger(weekly) || weekly < 1 || weekly > 100) {
    goalError.value = 'Isi target dengan bilangan bulat antara 1 dan 100.'
    return
  }
  goalError.value = ''
  updateGoals({ dailyGoal: daily, weeklyGoal: weekly })
  notify('Target belajar disimpan.')
}

function confirmReset() {
  resetProgress()
  confirmOpen.value = false
  goalDraft.dailyGoal = state.progress.dailyGoal
  goalDraft.weeklyGoal = state.progress.weeklyGoal
  notify('Progres latihan direset. Profil dan pengaturan tetap tersimpan.')
}
</script>

<template>
  <div class="settings-page">
    <header class="page-head">
      <span class="eyebrow">Preferensi</span>
      <h1>Atur ruang belajarmu.</h1>
      <p class="lede">Semua pengaturan disimpan lokal di browser ini. Perubahan langsung terasa tanpa memuat ulang halaman.</p>
    </header>

    <section class="settings-section surface surface-pad">
      <div class="setting-head">
        <div class="setting-icon"><component :is="theme === 'dark' ? Moon : Sun" /></div>
        <div><h2>Tampilan</h2><p>Pilih nuansa yang nyaman untuk sesi panjang.</p></div>
      </div>
      <div class="seg-control" role="group" aria-label="Pilih tema">
        <button type="button" :class="{ active: theme === 'light' }" :aria-pressed="theme === 'light'" @click="setTheme('light')">Terang</button>
        <button type="button" :class="{ active: theme === 'dark' }" :aria-pressed="theme === 'dark'" @click="setTheme('dark')">Gelap</button>
      </div>
    </section>

    <section class="settings-section surface surface-pad">
      <div class="setting-head">
        <div class="setting-icon"><Bell /></div>
        <div><h2>Pengingat demo</h2><p>Pengingat ini hanya simulasi; tidak ada notifikasi sistem yang dikirim.</p></div>
      </div>
      <div class="setting-row">
        <div><strong>Aktifkan pengingat</strong><span class="small muted">Tampilkan ajakan belajar di catatan harian.</span></div>
        <button type="button" class="switch" :class="{ on: state.settings.notifications }" role="switch" :aria-checked="state.settings.notifications" aria-label="Aktifkan pengingat demo" @click="toggleNotifications"><span /></button>
      </div>
      <div class="field setting-field">
        <label for="settings-reminder">Waktu pengingat</label>
        <select id="settings-reminder" v-model="state.settings.reminder" class="input" :disabled="!state.settings.notifications" @change="setReminder">
          <option value="morning">Pagi</option>
          <option value="afternoon">Siang</option>
          <option value="evening">Sore</option>
        </select>
      </div>
    </section>

    <section class="settings-section surface surface-pad">
      <div class="setting-head">
        <div class="setting-icon"><BookOpen /></div>
        <div><h2>Preferensi belajar</h2><p>Target dan ritme yang sesuai dengan catatan progresmu.</p></div>
      </div>
      <div class="field setting-field">
        <label for="settings-pace">Ritme belajar</label>
        <select id="settings-pace" v-model="state.settings.pace" class="input" @change="setPace">
          <option value="gentle">Santai — beberapa menit setiap hari</option>
          <option value="steady">Teratur — satu topik setiap sesi</option>
          <option value="intensive">Intensif — beberapa topik dalam satu sesi</option>
        </select>
      </div>
      <div class="goal-grid">
        <div class="field">
          <label for="settings-daily">Target kata harian</label>
          <input id="settings-daily" v-model="goalDraft.dailyGoal" class="input" type="number" min="1" max="100" />
          <small>Saat ini {{ stats.vocabularyCount }} kata tercatat.</small>
        </div>
        <div class="field">
          <label for="settings-weekly">Target sesi mingguan</label>
          <input id="settings-weekly" v-model="goalDraft.weeklyGoal" class="input" type="number" min="1" max="100" />
          <small>Saat ini {{ stats.activeDays }} hari aktif tercatat.</small>
        </div>
      </div>
      <span v-if="goalError" class="field-error" role="alert">{{ goalError }}</span>
      <button type="button" class="btn btn-outline btn-sm" @click="saveGoals">Simpan target</button>
    </section>

    <section class="settings-section danger-zone surface surface-pad">
      <div class="setting-head">
        <div class="setting-icon"><RotateCcw /></div>
        <div><h2>Reset progres</h2><p>Hapus kata, bab, hasil tes, dan catatan aktivitas. Profil serta pengaturan tidak berubah.</p></div>
      </div>
      <button type="button" class="btn btn-danger btn-sm" @click="confirmOpen = true">Reset progres belajar</button>
    </section>

    <div v-if="confirmOpen" class="modal-backdrop" @click.self="confirmOpen = false">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="reset-title">
        <button type="button" class="modal-close" aria-label="Tutup dialog" @click="confirmOpen = false"><X /></button>
        <span class="eyebrow">Konfirmasi</span>
        <h2 id="reset-title">Reset semua progres?</h2>
        <p class="prose">Tindakan ini menghapus kata yang ditandai, bab yang selesai, hasil tes, dan riwayat aktivitas. Profil dan preferensi tetap disimpan.</p>
        <div class="modal-actions">
          <button type="button" class="btn btn-outline" @click="confirmOpen = false">Batal</button>
          <button type="button" class="btn btn-danger" @click="confirmReset">Ya, reset progres</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-page { max-width: 860px; }
.settings-section { margin-bottom: 1rem; display: grid; gap: 1.1rem; }
.setting-head { display: flex; gap: 0.9rem; align-items: flex-start; }
.setting-icon { width: 40px; height: 40px; flex: none; display: grid; place-items: center; border-radius: 10px; background: var(--surface-sage); color: var(--brand); }
.setting-icon svg { width: 19px; height: 19px; }
.setting-head h2 { font-size: 1.2rem; }
.setting-head p { font-size: 0.84rem; color: var(--text-soft); margin-top: 0.2rem; line-height: 1.55; }
.setting-row { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.setting-row strong { display: block; font-size: 0.9rem; }
.setting-field { max-width: 360px; }
.goal-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-zone { border-color: color-mix(in srgb, var(--danger) 35%, var(--border)); }
.modal { position: relative; }
.modal-close { position: absolute; top: 0.8rem; right: 0.8rem; border: 0; background: transparent; color: var(--text-soft); min-height: 36px; min-width: 36px; display: grid; place-items: center; }
@media (max-width: 560px) { .goal-grid { grid-template-columns: minmax(0, 1fr); } }
</style>
