<template>
  <div class="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
    <ImageCard
        v-for="f in files"
        :key="f.name"
        :file="f"
        @delete="emit('delete', $event)"
        @copy="emit('copy', $event)"
        class="snap-start"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import ImageCard from './ImageCard.vue'

defineProps({ files: { type: Array, required: true } })
// Remove 'preview' from the emitted events
const emit = defineEmits(['delete', 'copy'])
</script>