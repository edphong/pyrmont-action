<template>
  <section class="hero-section">
    <div class="hero-text">
      <!-- "Connect with us" -->
      <h3 class="hero-subtitle">Connect with us</h3>

      <!-- "About Us" -->
      <h1 class="hero-title">About Us</h1>

      <!-- Body text -->
      <p class="hero-description">
        Descriptiam ligula scelerisque suscipit. Sed convallis at sem commodo dap
      </p>
    </div>

    <!-- Right-side image -->
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
/* If you haven’t already, load Inter via @import or a link in your main CSS or index.html:
   e.g., @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
*/

/* 1) Container spanning the full width */
.hero-section {
  display: flex;
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
  background-color: #DFF4FF;
}

/* 2) Left-side text container */
.hero-text {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
}

/* 2a) "Connect with us" - Inter Regular, size 28 */
.hero-subtitle {
  color: #3498DB;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;    /* regular */
  font-size: 28px;
}

/* 2b) "About Us" - bold, size 70, Inter */
.hero-title {
  color: #4F76B1;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;    /* bold */
  font-size: 70px;
}

/* 2c) Body text: size 20, Medium (500) Inter */
.hero-description {
  color: #333;
  line-height: 1.4;
  max-width: 400px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;    /* medium */
  font-size: 20px;
}

/* 3) Right-side image container */
.hero-image-wrapper {
  flex: 0 0 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

/* 4) Curved image on the right side */
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: ellipse(100% 100% at 100% 50%);
}
</style>
