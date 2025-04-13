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
      <img
          :src="getImageUrl(image.id)"
          :alt="image.alt"
          class="collage-image"
          loading="lazy"
          @error="handleImageError"
      />
      <div class="image-overlay">
        <span
            v-if="image.caption"
            class="image-caption"
        >
          {{ image.caption }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select-image'])

function handleImageClick(image) {
  const resolvedSrc = getImageUrl(image.id)
  emit('select-image', { ...image, src: resolvedSrc })
}

function getImageUrl(id) {
  try {
    return new URL(`../../assets/Gallery/image_${id}.png`, import.meta.url).href
  } catch (e) {
    console.error(`Error generating URL for image ID ${id}:`, e)
    return '/path/to/placeholder.png'
  }
}

function handleImageError(event) {
  console.warn('Image failed to load:', event.target.src)
  event.target.src = '/path/to/placeholder.png'
}
</script>

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
