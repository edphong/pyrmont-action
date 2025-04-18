<!-- src/layouts/NewsLayout.vue -->
<template>
  <div class="news-layout">
    <header class="news-header">
      <!-- Could be empty or have a custom banner -->
    </header>

    <main class="news-main">
      <!-- This is where child routes get rendered -->
      <router-view />
    </main>

  </div>
</template>

<script setup>
// nothing special here unless you want dynamic data
</script>

<style scoped>
.news-layout {
  font-family: 'League Spartan', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F5F9FC;
  color: #333;
}

.news-header {
  background-color: #fff;
  min-height: 50px;
  /* or add your own custom styling */
}

.news-main {
  flex: 1;
}

.news-footer {
  background-color: #ffffff;
  text-align: center;
  padding: 0.5rem;
}

.footer-text {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}
</style>
