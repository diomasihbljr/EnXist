<script setup>
import { computed, reactive, ref } from 'vue'
import { Save, CalendarDays, BookOpen, ClipboardCheck } from 'lucide-vue-next'
import { useStore } from '../composables/useStore'
import { useProfile } from '../composables/useProfile'
import { useToast } from '../composables/useToast'

const { stats, updateProfile } = useStore()
const { profile, initials, memberSince } = useProfile()
const { notify } = useToast()

const levels = ['Beginner', 'Elementary', 'Intermediate']

const form = reactive({
  name: profile.value.name,
  email: profile.value.email,
  level: profile.value.level,
  startDate: profile.value.startDate,
  about: profile.value.about
})

const errors = reactive({ name: '', email: '', startDate: '' })
const saved = ref(false)

const summary = computed(() => [
  { icon: CalendarDays, value: memberSince.value, label: 'Mulai belajar' },
  { icon: BookOpen, value: stats.value.vocabularyCount, label: 'Kata dipelajari' },
  { icon: ClipboardCheck, value: stats.value.testCount, label: 'Tes dikerjakan' },
  { icon: CalendarDays, value: stats.value.activeDays, label: 'Hari aktif' }
])

function validate() {
  errors.name = form.name.trim() ? '' : 'Nama tidak boleh kosong.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Masukkan alamat email yang valid.'
  errors.startDate = form.startDate ? '' : 'Pilih tanggal mulai belajar.'
  return !errors.name && !errors.email && !errors.startDate
}

function save() {
  saved.value = false
  if (!validate()) return
  updateProfile({
    name: form.name.trim(),
    email: form.email.trim(),
    level: form.level,
    startDate: form.startDate,
    about: form.about.trim()
  })
  saved.value = true
  notify('Profil berhasil disimpan di perangkat ini.')
}
</script>

<template>
  <div class="profile-page">
    <header class="page-head">
      <span class="eyebrow">Identitas belajar</span>
      <h1>Profil demo kamu.</h1>
      <p class="lede">Data ini hanya disimpan di browser. Tidak ada kata sandi, tidak ada akun server — cukup identitas yang membantu catatan belajarmu terasa personal.</p>
    </header>

    <section class="profile-hero surface surface-sand surface-pad">
      <div class="avatar">{{ initials }}</div>
      <div>
        <h2>{{ profile.name }}</h2>
        <p class="muted">{{ profile.level }} · Bergabung {{ memberSince }}</p>
        <p class="prose">{{ profile.about || 'Belum ada catatan singkat tentang perjalanan belajarmu.' }}</p>
      </div>
    </section>

    <div class="summary-grid">
      <div v-for="item in summary" :key="item.label" class="surface surface-pad summary-item">
        <component :is="item.icon" />
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </div>
    </div>

    <section class="section-block">
      <div class="section-head"><h2>Edit profil</h2><p>Perubahan langsung tersimpan setelah tombol ditekan</p></div>
      <form class="surface surface-pad profile-form" novalidate @submit.prevent="save">
        <div class="form-grid">
          <div class="field">
            <label for="profile-name">Nama</label>
            <input id="profile-name" v-model="form.name" class="input" type="text" autocomplete="name" :aria-invalid="Boolean(errors.name)" />
            <span v-if="errors.name" class="field-error" role="alert">{{ errors.name }}</span>
          </div>
          <div class="field">
            <label for="profile-email">Email contoh</label>
            <input id="profile-email" v-model="form.email" class="input" type="email" autocomplete="email" :aria-invalid="Boolean(errors.email)" />
            <span v-if="errors.email" class="field-error" role="alert">{{ errors.email }}</span>
          </div>
          <div class="field">
            <label for="profile-level">Level bahasa Inggris</label>
            <select id="profile-level" v-model="form.level" class="input">
              <option v-for="level in levels" :key="level" :value="level">{{ level }}</option>
            </select>
          </div>
          <div class="field">
            <label for="profile-start">Tanggal mulai belajar</label>
            <input id="profile-start" v-model="form.startDate" class="input" type="date" :aria-invalid="Boolean(errors.startDate)" />
            <span v-if="errors.startDate" class="field-error" role="alert">{{ errors.startDate }}</span>
          </div>
        </div>
        <div class="field">
          <label for="profile-about">Catatan singkat</label>
          <textarea id="profile-about" v-model="form.about" class="input" rows="3" maxlength="160" />
          <small>{{ form.about.length }}/160 karakter</small>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary"><Save /> Simpan profil</button>
          <span v-if="saved" class="small muted" role="status">Tersimpan.</span>
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped>
.profile-hero { display: flex; gap: 1.3rem; align-items: center; }
.avatar { width: 82px; height: 82px; flex: none; border-radius: 20px; display: grid; place-items: center; background: var(--brand); color: var(--brand-on); font-family: var(--font-display); font-size: 2rem; font-weight: 700; }
.profile-hero h2 { font-size: 1.7rem; }
.profile-hero .prose { margin-top: 0.5rem; font-size: 0.9rem; }
.summary-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.75rem; margin-top: 1rem; }
.summary-item { display: grid; gap: 0.3rem; }
.summary-item svg { width: 19px; height: 19px; color: var(--success); }
.summary-item strong { font-family: var(--font-display); font-size: 1.25rem; }
.summary-item span { font-size: 0.75rem; color: var(--text-soft); }
.profile-form { display: grid; gap: 1.1rem; }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.form-actions { display: flex; align-items: center; gap: 1rem; }
@media (max-width: 700px) { .summary-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .form-grid { grid-template-columns: minmax(0, 1fr); } .profile-hero { align-items: flex-start; } }
</style>
