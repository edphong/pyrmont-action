<template>
  <ul class="space-y-3">
    <FileRow
        v-for="f in files"
        :key="f.name"
        :file="f"
        @delete="$emit('delete', $event)"
        @copy="$emit('copy', $event)"
    />
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import FileRow from './FileRow.vue'

defineProps({ files: { type: Array, required: true } })
defineEmits(['delete', 'copy'])
</script>
