<template>
  <dialog
      ref="dlg"
      class="rounded-xl backdrop:bg-black/50 w-fit max-w-[90vw]"
      @close="emitClose"
  >
    <div class="relative">
      <img
          :src="img?.url"
          :alt="img?.name"
          class="max-h-[70vh] object-contain"
      />
      <button
          class="absolute top-2 right-2 bg-white p-2 rounded-full shadow
               hover:bg-gray-100"
          @click="handleClose"
      >
        ✕
      </button>
    </div>
  </dialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, nextTick } from 'vue'

const props = defineProps({
  img: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const dlg = ref(null)

// Whenever img changes, show or close the modal
watch(
    () => props.img,
    async (val) => {
      if (val) {
        // ensure the dialog is in the DOM
        await nextTick()
        dlg.value?.showModal()
      } else {
        dlg.value?.close()
      }
    }
)

function handleClose() {
  dlg.value?.close()
  emit('close')
}

function emitClose() {
  emit('close')
}
</script>
