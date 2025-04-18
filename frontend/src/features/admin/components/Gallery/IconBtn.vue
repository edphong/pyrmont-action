<template>
  <button
      v-bind="$attrs"
      @click="$emit('click')"
      class="bg-white/80 backdrop-blur p-2 rounded-full
           text-gray-800 hover:bg-white focus:outline-none focus:ring-2
           focus:ring-blue-500 disabled:opacity-40"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineEmits } from 'vue'

// Re-emit the click event
const emit = defineEmits(['click'])
</script>
