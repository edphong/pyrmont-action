<script setup>
import { defineProps, defineEmits } from 'vue'
import placeholder from '@/assets/placeholder.png'

const props = defineProps({ images: Array })
const emit  = defineEmits(['select-image'])

/* --- build‑time asset map ----------------------------------- */
const modules = import.meta.glob('@/assets/Gallery/image_*.png',
    { eager: true, import: 'default' })

const urls = Object.fromEntries(
    Object.entries(modules).map(([p, u]) => [
      Number(p.match(/image_(\d+)\.png$/)[1]), u
    ])
)

/* --- events -------------------------------------------------- */
function handleImageClick(img) {
  emit('select-image', { ...img, src: urls[img.id] ?? placeholder })
}

function handleImageError(e) {
  e.target.src = placeholder
}
</script>

<template>
  <div class="gallery-collage">
    <div
        v-for="(image, i) in images"
        :key="image.id"
        class="collage-item"
        :style="{ '--animation-order': i }"
        role="button"
        tabindex="0"
        @click="handleImageClick(image)"
        @keydown.enter="handleImageClick(image)"
        @keydown.space.prevent="handleImageClick(image)"
        :aria-label="image.alt"
    >
      <img
          :src="urls[image.id] ?? placeholder"
          :alt="image.alt"
          class="collage-image"
          loading="lazy"
          @error="handleImageError"
      />
      <div class="image-overlay">
        <span v-if="image.caption" class="image-caption">
          {{ image.caption }}
        </span>
      </div>
    </div>
  </div>
</template>


<template>
  <div class="gallery-collage">
    <div
        v-for="(image, index) in images"
        :key="image.id"
        class="collage-item"
        :style="{ '--animation-order': index }"
        @click="handleImageClick(image)"
        role="button"
        tabindex="0"
        @keydown.enter="handleImageClick(image)"
        @keydown.space.prevent="handleImageClick(image)"
    >
      <!-- ✅ use the resolved map -->
      <img
          :src="urls[image.id]"
          :alt="image.alt"
          class="collage-image"
          loading="lazy"
          @error="handleImageError"
      />
      <div class="image-overlay">
        <span v-if="image.caption" class="image-caption">
          {{ image.caption }}
        </span>
      </div>
    </div>
  </div>
</template>


<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.gallery-collage {
  column-count: 3;
  column-gap: 1.5rem;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.collage-item {
  display: inline-block;
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #e0e0e0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px) scale(0.98);
  animation: fadeInUp 0.5s ease-out forwards;
  will-change: transform, box-shadow, opacity;
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
}

.collage-image {
  width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease-out, filter 0.4s ease-out;
  will-change: transform, filter;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.2rem;
  pointer-events: none;
}

.image-caption {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-out 0.15s,
  transform 0.3s ease-out 0.15s;
  will-change: opacity, transform;
}

.collage-item:hover {
  transform: scale(1.03) rotate(1deg);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}

.collage-item:hover .collage-image {
  transform: scale(1.1);
  filter: brightness(0.9) saturate(1.1);
}

.collage-item:hover .image-overlay {
  opacity: 1;
  transform: translateY(0);
}

.collage-item:hover .image-caption {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .gallery-collage {
    column-count: 2;
  }
}

@media (max-width: 600px) {
  .gallery-collage {
    column-count: 1;
    padding: 0.5rem;
  }
}
</style>
