<template>
  <section class="objectives-section">
    <div class="objectives-text">
      <h2 class="objectives-title">Our Objectives</h2>
      <hr class="blue-underline" />
      <h3 class="objectives-subtitle">Description of Values</h3>
      <p class="objectives-description">
        ExDescriptiam ligula scelerisque suscipit. Sed convallis at sem commodo
        dapfdsfasdfsadfsdasfdsafdsadfsdasfdsafdsafsda fdsafdfsda
      </p>
    </div>

    <div class="objectives-grid">
      <div class="objective-item">
        <img
            src="@/assets/democratic.png"
            alt="Democratic"
            class="objective-icon"
        />
        <h4>Democratic</h4>
        <p>dfdsfdsajklfdsjfd saklfjdlks</p>
      </div>

      <div class="objective-item">
        <img
            src="@/assets/future-thinking.png"
            alt="Future Thinking"
            class="objective-icon"
        />
        <h4>Future Thinking</h4>
        <p>dfdsfdsajklfdsjfd saklfjdlks</p>
      </div>

      <div class="objective-item">
        <img
            src="@/assets/determined.png"
            alt="Determined"
            class="objective-icon"
        />
        <h4>Determined</h4>
        <p>dfdsfdsajklfdsjfd saklfjdlks</p>
      </div>

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
  </section>
</template>

<script setup>
</script>

<style scoped>
.objectives-section {
  width: 100%;
  padding: 3rem 7%;
  background-color: #fff;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.objectives-text {
  margin-bottom: 2rem;
  text-align: left;
  color: #333;
}

.objectives-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
}

.blue-underline {
  width: 80px;
  height: 5px;
  background-color: #3498DB;
  border: none;
  margin: 0 0 1rem 0;
}

.objectives-subtitle {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #444;
}

.objectives-description {
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: #666;
}

.objectives-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
}

.objective-item {
  flex: 1 1 200px;
  max-width: 220px;
  text-align: left;
}

.objective-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;
  object-fit: contain;
}

.objective-item h4 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.objective-item p {
  font-size: 14px;
  line-height: 1.3;
  color: #555;
}
</style>
