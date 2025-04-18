<template>
  <li
      class="flex items-center justify-between gap-3 rounded-lg bg-white shadow p-2
           hover:shadow-md hover:bg-gray-50 transition"
  >
    <!-- filename – opens image in a new tab -->
    <a
        :href="file.url"
        target="_blank"
        rel="noopener"
        class="truncate flex-1 text-sm font-medium text-blue-600 hover:underline"
    >
      {{ file.name }}
    </a>

    <!-- actions -->
    <div class="flex gap-2 shrink-0">
      <!-- copy -->
      <IconBtn @click="$emit('copy', file.url)" title="Copy URL">
        <CopyIcon />
      </IconBtn>

      <!-- delete -->
      <IconBtn
          class="bg-red-600 hover:bg-red-700 text-white"
          @click="$emit('delete', file.name)"
          title="Delete"
      >
        <TrashIcon />
      </IconBtn>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'
import IconBtn   from './IconBtn.vue'
import CopyIcon  from '@/assets/svg_icons/copy_icon.svg'
import TrashIcon from '@/assets/svg_icons/trash_icon.svg'

defineProps({ file: { type: Object, required: true } })
</script>
