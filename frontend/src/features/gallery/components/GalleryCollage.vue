<!-- src/features/gallery/components/GalleryCollage.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue'
import placeholder from '@/assets/placeholder.png'   // single fallback

/* ---------- props / emit ---------- */
const props = defineProps({
  /* each item: { id, src, alt?, caption? } */
  images: { type: Array, required: true }
})
const emit = defineEmits(['select-image'])

/* ---------- events ---------- */
function handleImageClick (img) {
  emit('select-image', img)               // img already contains its src
}
function handleImageError (e) {
  e.target.src = placeholder
}
</script>

<template>
  <div class="gallery-collage">
    <div
        v-for="(img, index) in images"
        :key="img.id"
        class="collage-item"
        :style="{ '--animation-order': index }"
        role="button"
        tabindex="0"
        :aria-label="img.alt"
        @click="handleImageClick(img)"
        @keydown.enter="handleImageClick(img)"
        @keydown.space.prevent="handleImageClick(img)"
    >
      <img
          :src="img.src ?? placeholder"
          :alt="img.alt"
          class="collage-image"
          loading="lazy"
          @error="handleImageError"
      />
      <div class="image-overlay">
        <span v-if="img.caption" class="image-caption">{{ img.caption }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px) scale(.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);  }
}

.gallery-collage {
  column-count: 3;
  column-gap: 1.5rem;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}
@media (max-width: 900px){ .gallery-collage{ column-count: 2 } }
@media (max-width: 600px){ .gallery-collage{ column-count: 1; padding: .5rem } }

.collage-item{
  display:inline-block;width:100%;margin-bottom:1.5rem;border-radius:12px;
  position:relative;overflow:hidden;cursor:pointer;background:#e0e0e0;
  box-shadow:0 5px 15px rgba(0,0,0,.1);opacity:0;
  transform:translateY(20px) scale(.98);
  animation:fadeInUp .5s ease-out forwards;
  transition:transform .4s, box-shadow .4s;
}
.collage-item:hover{
  transform:scale(1.03) rotate(.5deg);
  box-shadow:0 12px 28px rgba(0,0,0,.2);
}

.collage-image{
  width:100%;display:block;object-fit:cover;
  transition:transform .4s, filter .4s;
}
.collage-item:hover .collage-image{
  transform:scale(1.1);
  filter:brightness(.9) saturate(1.1);
}

.image-overlay{
  position:absolute;bottom:0;left:0;width:100%;height:60%;
  background:linear-gradient(to top,rgba(0,0,0,.8),transparent);
  opacity:0;transform:translateY(20px);
  transition:opacity .4s, transform .4s;
  display:flex;align-items:flex-end;padding:1.2rem;pointer-events:none;
}
.collage-item:hover .image-overlay{
  opacity:1;transform:translateY(0);
}

.image-caption{
  color:#fff;font-size:1rem;font-weight:600;text-shadow:1px 1px 4px rgba(0,0,0,.9);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;
  opacity:0;transform:translateY(10px);
  transition:opacity .3s ease-out .15s, transform .3s ease-out .15s;
}
.collage-item:hover .image-caption{
  opacity:1;transform:translateY(0);
}
</style>
