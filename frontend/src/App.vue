<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ForumSidebar from './components/UserTable.vue'
import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"
</script>

<!-- Universal page for entire website (logo, navbar etc) -->

<template>
  <div id="app">
    <header class="forum-header">
        <nav class="forum-nav">
          <!-- <RouterLink to="/" class="nav-link">Home</RouterLink> Handles links to other parts of website -->
          <Navigation/>
        </nav>
    </header>

    <main class="forum-content">
      <RouterView />
      <!-- <div class="row">
        <aside class="col-md-3">
          <ForumSidebar />
        </aside>
        <section class="col-md-9">
          <RouterView />
        </section>
      </div> -->
    </main>

    <footer class="forum-footer">
      <div class="container">
        <Footer/>
        <!-- <p>&copy; 2025 My Forum. All Rights Reserved.</p> -->
      </div>
    </footer>
  </div>
</template>


<style scoped>

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Main content area */
.forum-content {
  padding-top: 85px;
  /* padding: 2rem 0; */
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
