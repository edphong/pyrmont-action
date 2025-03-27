<template>
  <section class="hero-section">
    <div class="hero-text">
      <h3 class="hero-subtitle">Connect with us</h3>
      <h1 class="hero-title">About Us</h1>
      <p class="hero-description">
        Descriptiam ligula scelerisque suscipit. Sed convallis at sem commodo dap
      </p>
    </div>
    <div class="hero-image-wrapper">
      <img
          :src="buildingImage"
          alt="Pyrmont building"
          class="hero-image"
      />
    </div>
  </section>
</template>

<script setup>
import buildingImage from '@/assets/pyrmont-building.jpg'
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
  background-color: #DFF4FF;
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero-section {
    flex-direction: row;
  }
}

.hero-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .hero-text {
    padding: 2rem 0 2rem 7%;
  }
}

.hero-subtitle {
  color: #3498DB;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 28px;
}

.hero-title {
  color: #4F76B1;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 70px;
}

.hero-description {
  color: #333;
  line-height: 1.4;
  max-width: 400px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
}

.hero-image-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: ellipse(100% 100% at 100% 50%);
  display: block;
}
</style>
