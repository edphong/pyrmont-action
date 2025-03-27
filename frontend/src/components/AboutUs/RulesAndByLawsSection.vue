<template>
  <section class="rules-section">
    <div class="rules-overlay">
      <div class="rules-content">
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

      <div class="rules-floating-image">
        <div class="rules-image-background">
          <img
              src="@/assets/pyrmont-house.png"
              alt="By-laws building"
              class="rules-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.rules-section {
  position: relative;
  width: 100%;
  min-height: 600px;
  background-color: #fff;
}

.rules-overlay {
  width: 100%;
  min-height: 600px;
  padding: 3rem 7%;
  box-sizing: border-box;
  position: relative;
}

.rules-content {
  font-family: 'Inter', sans-serif;
  color: #333;
  padding-right: 40vw;
  box-sizing: border-box;
}

.rules-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.blue-underline {
  width: 80px;
  height: 5px;
  background-color: #3498DB;
  border: none;
  margin: 0 0 1.5rem;
}

.rules-content p {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
}

.rules-floating-image {
  position: absolute;
  top: 50%;
  right: 7%;
  transform: translateY(-50%);
  width: 40vw;
  max-width: 600px;
}

.rules-image-background {
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, #CCE8FF 0%, #EAF3FF 100%);
  padding: 1.5rem 2rem 2rem 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border-radius: 1rem;
  overflow: hidden;
}

.rules-image-background::before {
  content: "";
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 80px;
  background: inherit;
  clip-path: polygon(0 100%, 25% 80%, 50% 100%, 75% 80%, 100% 100%, 100% 0, 0 0);
}

.rules-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  position: relative;
  z-index: 1;
}

@media (max-width: 767px) {
  .rules-content {
    padding-right: 0;
  }

  .rules-floating-image {
    position: static;
    transform: none;
    width: 100%;
    max-width: none;
    margin-top: 2rem;
  }
}
</style>
