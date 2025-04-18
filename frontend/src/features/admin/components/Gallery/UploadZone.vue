<template>
  <div
      class="relative flex flex-col items-center justify-center text-center mb-8
           border-2 border-dashed rounded-2xl p-10 cursor-pointer transition
           duration-200"
      :class="dragActive
      ? 'border-blue-600 bg-blue-50'
      : 'border-gray-300 hover:border-blue-400'"
      @click="browse"
      @dragover.prevent="dragActive = true"
      @dragleave.prevent="dragActive = false"
      @drop.prevent="onDrop"
  >
    <ArrowUpTrayIcon class="w-12 h-12 mb-3 text-blue-600" />
    <p class="font-medium">
      Click or drag image(s) here to upload
      <span class="block text-xs text-gray-500">Max 10 MB each</span>
    </p>

    <input
        ref="input"
        type="file"
        accept="image/*"
        multiple
        class="hidden"
        @change="onBrowse"
    />

    <!-- progress bar -->
    <div
        v-if="uploadPct"
        class="absolute left-0 bottom-0 h-1 bg-blue-600 transition-all"
        :style="{ width: uploadPct + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import ArrowUpTrayIcon from '@/assets/svg_icons/arrow_up_square_icon.svg'

const props = defineProps({
  uploadPct : { type: Number, default: 0 },
  dragActive: { type: Boolean, default: false }
})
const emit = defineEmits(['files-picked', 'update:dragActive'])

const dragActive = ref(props.dragActive)

watch(() => props.dragActive, (val) => {
  dragActive.value = val
})
watch(dragActive, (val) => {
  emit('update:dragActive', val)
})

const input = ref(null)

function browse() {
  input.value?.click()
}

function onBrowse(e) {
  emit('files-picked', e.target.files)
  // reset input so user can pick the same file again if needed
  e.target.value = ''
}

function onDrop(e) {
  dragActive.value = false
  emit('files-picked', e.dataTransfer.files)
}
</script>
