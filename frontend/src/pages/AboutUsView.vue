<!-- src/views/AboutUsView.vue -->
<template>
  <!-- Hero Section -->
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

  <!-- Objectives/Values Section -->
  <section class="objectives-section">
    <div class="objectives-content">
      <!-- Headline -->
      <h2 class="objectives-title">Our Objectives</h2>
      <!-- Blue underline -->
      <hr class="blue-underline" />

      <!-- Subheadline -->
      <h3 class="objectives-subtitle">Description of Values</h3>

      <!-- Body text -->
      <p class="objectives-description">
        ExDescriptiam ligula scelerisque suscipit. Sed convallis at sem commodo
        dapfdsfasdfsadfsdasfdsafdsadfsdasfdsafdsafsda fdsafdfsda
      </p>

      <!-- Icons and their captions in a row -->
      <div class="objectives-grid">
        <!-- 1) Democratic -->
        <div class="objective-item">
          <img
              src="@/assets/democratic.png"
              alt="Democratic"
              class="objective-icon"
          />
          <h4>Democratic</h4>
          <p>dfdsfdsajklfdsjfd saklfjdlks</p>
        </div>

        <!-- 2) Future Thinking -->
        <div class="objective-item">
          <img
              src="@/assets/future-thinking.png"
              alt="Future Thinking"
              class="objective-icon"
          />
          <h4>Future Thinking</h4>
          <p>dfdsfdsajklfdsjfd saklfjdlks</p>
        </div>

        <!-- 3) Determined -->
        <div class="objective-item">
          <img
              src="@/assets/determined.png"
              alt="Determined"
              class="objective-icon"
          />
          <h4>Determined</h4>
          <p>dfdsfdsajklfdsjfd saklfjdlks</p>
        </div>

        <!-- 4) Welcoming -->
        <div class="objective-item">
          <img
              src="@/assets/welcoming.png"
              alt="Welcoming"
              class="objective-icon"
          />
          <h4>Welcoming</h4>
          <p>dfdsfdsajklfdsjfd saklfjdlks</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import buildingImage from '@/assets/pyrmont-building.jpg'
</script>

<style scoped>
/* ----------------------------------------------
   1) Hero Section
----------------------------------------------- */
.hero-section {
  display: flex;
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
  background-color: #DFF4FF;
}

.hero-text {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
}

.hero-subtitle {
  color: #3498DB;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400; /* regular */
  font-size: 28px;
}

.hero-title {
  color: #4F76B1;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700; /* bold */
  font-size: 70px;
}

.hero-description {
  color: #333;
  line-height: 1.4;
  max-width: 400px;
  font-family: 'Inter', sans-serif;
  font-weight: 500; /* medium */
  font-size: 20px;
}

.hero-image-wrapper {
  flex: 0 0 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: ellipse(100% 100% at 100% 50%);
}

/* ----------------------------------------------
   2) Objectives/Values Section
----------------------------------------------- */
.objectives-section {
  padding: 2rem 1rem;
  background-color: #fff; /* or your preferred color */
}

.objectives-content {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  text-align: left;
}

/* Our Objectives: 48px, bold, Inter */
.objectives-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
}

/* Blue underline: #3498DB */
.blue-underline {
  width: 80px;
  height: 5px;
  background-color: #3498DB;
  border: none;
  margin: 0 0 1rem 0;
}

/* Description of Values: 28px, bold, Inter */
.objectives-subtitle {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #444;
}

/* Body text: 20px, regular, Inter */
.objectives-description {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 2rem;
  font-weight: 400;
  color: #666;
}

/* The grid of icons/text */
.objectives-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
}

.objective-item {
  flex: 1 1 200px;
  max-width: 220px;
  text-align: center;
}

.objective-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;
  object-fit: contain;
}

/* Democratic, Future Thinking, Determined, Welcoming text:
   30px, semibold (600), Inter
*/
.objective-item h4 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

/* The text under each heading can remain smaller if you want:
   adjust to your preference
*/
.objective-item p {
  font-size: 14px;
  line-height: 1.3;
  color: #555;
}
</style>
