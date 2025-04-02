<script setup>
import { RouterLink, RouterView} from 'vue-router'
import ForumSidebar from './components/UserTable.vue'
import TestView from './views/TestView.vue'
</script>

<!-- Universal page for entire website (logo, navbar etc) -->

<template>
  <div id="app">

    <router-view></router-view>

    <!-- <header class="forum-header">
      <div class="container">
        <h1 class="forum-title">Pyrmont Action</h1>
        <nav class="forum-nav">
          
        </nav>
      </div>
    </header> -->

    <!-- <main class="container forum-content">
      <div class="row">
        <aside class="col-md-3">
          <ForumSidebar />
        </aside>
        <section class="col-md-9">
          <RouterView />
        </section>
      </div>
      <button @click="activeComp = 'test-view'">test-view</button>

      <div>
        <router-view></router-view>
      </div>
    </main> -->
<!-- 
    <footer class="forum-footer">
      <div class="container">
        <p>&copy; 2025 My Forum. All Rights Reserved.</p>
      </div>
    </footer> -->
  </div>
</template>

<style scoped>

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header styles */
.forum-header {
  background-color: #f8f9fa;
  padding: 1rem 0;
  border-bottom: 1px solid #dee2e6;
}

.forum-title {
  margin: 0;
  font-size: 2rem;
  text-align: center;
  color: #333;
}

.forum-nav {
  text-align: center;
  margin-top: 1rem;
}

.nav-link {
  margin: 0 0.75rem;
  color: #007bff;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Main content area */
.forum-content {
  padding: 2rem 0;
}

/* Footer styles */
.forum-footer {
  background-color: #f1f1f1;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

/* Responsive tweaks */
@media (min-width: 768px) {
  .forum-title {
    text-align: left;
  }
  .forum-nav {
    text-align: left;
  }
}
</style>
