<script setup>
import { Check } from 'lucide-vue-next'
import { useToast } from '../composables/useToast'

const { toasts } = useToast()
</script>

<template>
  <div class="toast-stack" aria-live="polite" aria-atomic="false">
    <div v-for="toast in toasts" :key="toast.id" class="toast">
      <Check />
      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>
