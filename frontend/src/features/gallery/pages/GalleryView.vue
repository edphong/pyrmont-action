<!-- src/views/GalleryView.vue -->
<template>
  <div class="gallery-container">
    <GalleryHeader />

    <!-- simple loader -->
    <div v-if="loading" class="py-32 text-center text-gray-400">
      Loading images…
    </div>

    <GalleryGrid
        v-else
        :images="galleryImages"
        @select-image="openLightbox"
    />

    <GalleryLightbox
        v-if="selectedImage"
        :image="selectedImage"
        @close="closeLightbox"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { listImages } from '@/api.js'

import GalleryHeader   from '@/features/gallery/components/GalleryHeader.vue'
import GalleryGrid     from '@/features/gallery/components/GalleryCollage.vue'
import GalleryLightbox from '@/features/gallery/components/GalleryLightbox.vue'

/* ───── state ───── */
const galleryImages = ref([])
const selectedImage = ref(null)
const loading       = ref(true)

/* ───── fetch live images ───── */
async function fetchImages () {
  loading.value = true
  const { data } = await listImages()          // GET /api/gallery
  galleryImages.value = data.map((f, idx) => ({
    id     : f.name,                           // use object name as id
    src    : f.url,                            // public GCS link
    alt    : f.name,
    caption: `Image ${idx + 1}`
  }))
  loading.value = false
}

onMounted(fetchImages)

/* ───── light‑box helpers ───── */
function openLightbox (img) { selectedImage.value = img }
function closeLightbox ()   { selectedImage.value = null }
</script>

<style scoped>
.gallery-container {
  padding: 3rem 0;
  width: 100%;
  box-sizing: border-box;
}
</style>
