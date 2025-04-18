<!-- src/features/admin/pages/GalleryView.vue -->
<template>
  <h1 class="text-2xl font-semibold mb-6">Gallery</h1>

  <!-- drag‑and‑drop / click‑to‑upload -->
  <UploadZone
      v-model:dragActive="dragActive"
      :uploadPct="uploadPct"
      @files-picked="handleFiles"
  />

  <!-- loading skeleton -->
  <template v-if="loadingList">
    <div class="grid gap-3 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
      <div
          v-for="n in 8"
          :key="n"
          class="animate-pulse h-32 bg-gray-200 rounded-xl"
      />
    </div>
  </template>

  <!-- plain filename list (no thumbnails) -->
  <FileList
      v-else
      :files="files"
      @delete="removeFile"
      @copy="copyUrl"
  />

  <p
      v-if="!loadingList && files.length === 0"
      class="mt-6 text-gray-500"
  >
    No images yet.
  </p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { uploadImage, listImages, deleteImage } from '@/api.js'

import UploadZone from '../components/Gallery/UploadZone.vue'
import FileList   from '../components/Gallery/FileList.vue'

/* ───────────── state ───────────── */
const files       = ref([])
const dragActive  = ref(false)
const uploadPct   = ref(0)
const loadingList = ref(true)

/* ─────────── lifecycle ─────────── */
onMounted(refresh)

/* ──────────── methods ──────────── */
async function refresh () {
  loadingList.value = true
  const { data }    = await listImages()
  files.value       = data.sort((a, b) => a.name.localeCompare(b.name))
  loadingList.value = false
}

async function handleFiles (list) {
  const queue = Array.from(list)
  if (!queue.length) return

  for (const file of queue) {
    uploadPct.value = 0
    const formData  = new FormData()
    formData.append('file', file)

    await uploadImage(formData, {
      onUploadProgress: (e) => {
        uploadPct.value = Math.round((e.loaded * 100) / e.total)
      }
    })
    uploadPct.value = 100
    await refresh()
  }

  // smooth‑out the progress bar
  setTimeout(() => { uploadPct.value = 0 }, 600)
}

async function removeFile (name) {
  if (!confirm(`Delete "${name}" permanently?`)) return
  await deleteImage(name)
  await refresh()
}

function copyUrl (url) {
  navigator.clipboard.writeText(url).then(() => toast('URL copied!'))
}

function toast (msg) {
  const t = document.createElement('div')
  t.textContent = msg
  t.className =
      'fixed bottom-6 left-1/2 -translate-x-1/2 ' +
      'px-4 py-2 rounded-full shadow-lg animate-fade-out ' +
      'bg-green-600 text-white'
  document.body.appendChild(t)

  setTimeout(() => { t.remove() }, 2000)
}
</script>

<style scoped>
@keyframes fade-out {
  0%   { opacity: 0; transform: translateY(30px) translateX(-50%); }
  10%  { opacity: 1; transform: translateY(0)    translateX(-50%); }
  90%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(-10px) translateX(-50%); }
}
.animate-fade-out { animation: fade-out 2s forwards; }
</style>
