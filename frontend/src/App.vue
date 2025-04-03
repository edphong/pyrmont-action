<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import ForumSidebar from './components/UserTable.vue'

// We'll use `useRoute()` to check the current path for conditionally rendering the sidebar.
const route = useRoute()
</script>

<template>
  <div id="app">
    <header class="forum-header">
      <div class="container">
        <h1 class="forum-title">Pyrmont Action</h1>
        <nav class="forum-nav">
          <!-- Example home route (uncomment if you have a Home page) -->
          <!-- <RouterLink to="/" class="nav-link">Home</RouterLink> -->

          <!-- About page link -->
          <RouterLink to="/about" class="nav-link">About Us</RouterLink>
        </nav>
      </div>
    </header>

    <!--
      If on the About page, we add a 'full-width' class (to remove the normal container constraints).
      Otherwise, we just use normal .container for layout.
    -->
    <main
        class="forum-content"
        :class="route.path === '/about' ? 'full-width' : 'container'"
    >
      <div class="row">
        <!-- Only show the sidebar if NOT on /about -->
        <aside
            v-if="route.path !== '/about'"
            class="col-md-3"
        >
          <ForumSidebar />
        </aside>

        <!--
          If the sidebar is hidden, let the main content take full width (col-md-12).
          If the sidebar is shown, main content is col-md-9.
        -->
        <section
            :class="route.path === '/about' ? 'col-md-12' : 'col-md-9'"
        >
          <RouterView />
        </section>
      </div>
    </main>

    <footer class="forum-footer">
      <div class="container">
        <p>&copy; 2025 My Forum. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/*
  We remove "scoped" so that our grid classes (.row, .col-md-*)
  apply properly to elements in this template.
*/

/* Container mimic (like Bootstrap) */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* A full-width class for pages like /about that need the entire width */
.full-width {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 0;
}

/* Basic row setup */
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem; /* negative margins to offset column padding */
}

/* Column classes (default: full width for small screens) */
.col-md-3,
.col-md-9,
.col-md-12 {
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

/* For screens >= 768px, apply the "md" column sizes */
@media (min-width: 768px) {
  .col-md-3 {
    width: 25%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-12 {
    width: 100%;
  }
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
  box-sizing: border-box;
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

/* Responsive tweaks (additional) */
@media (min-width: 768px) {
  .forum-title {
    text-align: left;
  }
  .forum-nav {
    text-align: left;
  }
}
</style>
