<!-- src/components/AboutUs/RulesAndByLawsSection.vue -->
<template>
  <section class="rules-section">
    <!-- Left-side text -->
    <div class="rules-text">
      <h2 class="rules-title">Rules and By Laws</h2>
      <hr class="blue-underline" />

      <p>
        ExDescriptiam ligula scelerisque suscipit. Sed convallis at sem commodo
        dapfdsfasdfsadfsdasfdsafdsadfsdasfdsafdsafsda fdsafdfsda
      </p>

      <p>
        ExDescriptiam ligula scelerisque suscipit. Sed convallis at sem commodo
        dapfdsfasdfsadfsdasfdsafdsadfsdasfdsafdsafsda fdsafdfsda
      </p>

      <p>
        ExDescriptiam ligula scelerisque suscipit. Sed convallis at sem commodo
        dapfdsfasdfsadfsdasfdsafdsadfsdasfdsafdsafsda fdsafdfsda
      </p>
    </div>

    <!-- Right-side image in a CCE8FF box -->
    <div class="rules-image-wrapper">
      <div class="rules-image-background">
        <!-- Replace the src below with your actual image path -->
        <img
            src="@/assets/pyrmont-house.png"
            alt="By-laws building"
            class="rules-image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed unless you want props or other data
</script>

<style scoped>
/*
  The main container: 2 columns, wrapping if screen is narrow.
  We add a media query so that on screens >= 768px, it won't wrap.
*/
.rules-section {
  display: flex;
  flex-wrap: wrap;     /* allows stacking on very small screens */
  gap: 2rem;
  align-items: flex-start; /* top-align columns instead of center */
  padding: 3rem 7%;    /* top/bottom: 3rem, left/right: ~7% */
  box-sizing: border-box;
  background-color: #fff;
}

/* Force no wrap (side by side) only on medium+ screens */
@media (min-width: 768px) {
  .rules-section {
    flex-wrap: nowrap; /* keep text and image side by side on tablets+ */
  }
}

/* LEFT SIDE TEXT */
.rules-text {
  flex: 1 1 50%;
  font-family: 'Inter', sans-serif;
  color: #333;
  min-width: 280px; /* give a sensible minimum width, optional */
}

.rules-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

/* A short blue horizontal rule under the heading */
.blue-underline {
  width: 80px;
  height: 5px;
  background-color: #3498DB;
  border: none;
  margin: 0 0 1.5rem;
}

.rules-text p {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
}

/* RIGHT SIDE IMAGE WRAPPER */
.rules-image-wrapper {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  min-width: 280px; /* give a sensible minimum width, optional */
}

/* Light-blue box (#CCE8FF) behind the image for the "peek" effect */
.rules-image-background {
  background-color: #CCE8FF;
  position: relative;
  display: inline-block;
  padding: 1.5rem 2rem 2rem 1rem;  /* offset to let color peek out more at bottom/left */
  box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* optional subtle shadow */
}

/* The actual image */
.rules-image {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
