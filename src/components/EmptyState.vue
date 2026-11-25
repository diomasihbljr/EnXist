<script setup>
import { Sprout } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  message: { type: String, default: '' },
  actionLabel: { type: String, default: '' },
  actionTo: { type: String, default: '' }
})
</script>

<template>
  <div class="empty-state">
    <Sprout />
    <h3>{{ title }}</h3>
    <p v-if="message" class="small">{{ message }}</p>
    <RouterLink v-if="actionTo" :to="actionTo" class="btn btn-outline btn-sm">{{ actionLabel }}</RouterLink>
  </div>
</template>
