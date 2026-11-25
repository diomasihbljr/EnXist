import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'dashboard', component: () => import('../views/DashboardView.vue'), meta: { title: 'Learning Home', group: 'Kebun Bahasa' } },
  { path: '/courses', name: 'courses', component: () => import('../views/CoursesView.vue'), meta: { title: 'Courses', group: 'Jalur Belajar' } },
  { path: '/materials/vocabulary', name: 'vocabulary-material', component: () => import('../views/VocabularyMaterialView.vue'), meta: { title: 'Vocabulary Material', group: 'Jalur Belajar' } },
  { path: '/materials/grammar', name: 'grammar-material', component: () => import('../views/GrammarMaterialView.vue'), meta: { title: 'Grammar Material', group: 'Jalur Belajar' } },
  { path: '/tests/vocabulary', name: 'vocabulary-test', component: () => import('../views/VocabularyTestView.vue'), meta: { title: 'Vocabulary Test', group: 'Latihan' } },
  { path: '/tests/grammar', name: 'grammar-test', component: () => import('../views/GrammarTestView.vue'), meta: { title: 'Grammar Test', group: 'Latihan' } },
  { path: '/tests/listening', name: 'listening-test', component: () => import('../views/ListeningTestView.vue'), meta: { title: 'Listening Test', group: 'Latihan' } },
  { path: '/progress', name: 'progress', component: () => import('../views/ProgressView.vue'), meta: { title: 'Progress', group: 'Catatan Belajar' } },
  { path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue'), meta: { title: 'Profile', group: 'Catatan Belajar' } },
  { path: '/settings', name: 'settings', component: () => import('../views/SettingsView.vue'), meta: { title: 'Settings', group: 'Catatan Belajar' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title || 'Belajar'} — EnXist`
})
