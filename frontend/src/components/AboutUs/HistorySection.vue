<!-- src/components/HistorySection.vue -->
<template>
  <section class="history-section">
    <div class="history-overlay">
      <div class="history-content">
        <h2 class="history-title">Our History</h2>
        <hr class="blue-underline" />
        <h3 class="history-subtitle">Title of Description</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida metus aliquam
          ligula scelerisque suscipit. Sed convallis at sem commodo dapibus...
        </p>

        <p>
          Pellentesque nisi enim, fringilla sed condimentum vitae, consectetur id ex. In luctus
          massa sodales enim convallis porta. Sed accumsan, ligula hendrerit imperdiet lobortis...
        </p>
      </div>

      <div class="history-floating-image">
        <img
            src="../../assets/train.png"
            alt="Historic Train"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.history-section {
  position: relative;
  width: 100%;
  min-height: 600px;
  background: url("@/assets/history-bg.png") center center / cover no-repeat;
}

.history-overlay {
  width: 100%;
  min-height: 600px;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 3rem 7%;
  box-sizing: border-box;
  position: relative;
}

.history-content {
  font-family: 'Inter', sans-serif;
  color: #fff;


  padding-right: 45vw;
}

.history-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.blue-underline {
  width: 80px;
  height: 5px;
  background-color: #3498DB;
  border: none;
  margin: 0 0 1rem 0;
}

.history-subtitle {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1rem;
}

.history-content p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.history-floating-image {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  width: 45vw;
  max-width: 90%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

.history-floating-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
</style>
