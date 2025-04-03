<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import ForumSidebar from './components/UserTable.vue'
import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"

// We'll use `useRoute()` to check the current path for conditionally rendering the sidebar.
const route = useRoute()
</script>

<!-- Universal page for entire website (logo, navbar etc) -->

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
          <!-- <RouterLink to="/" class="nav-link">Home</RouterLink> Handles links to other parts of website -->
          <Navigation/>
        </nav>
      </div>
    </header>

    <main
        class="forum-content"
        :class="route.path === '/about' ? 'full-width' : 'container'"
    >
      <div class="row">
        <!-- Only show sidebar if NOT on /about -->
        <aside v-if="route.path !== '/about'" class="col-md-3">
          <ForumSidebar />
        </aside>

        <!-- If sidebar is hidden => col-md-12; otherwise col-md-9 -->
        <section :class="route.path === '/about' ? 'col-md-12' : 'col-md-9'">
          <RouterView />
        </section>
      </div>
    </main>


    <footer class="forum-footer">
      <div class="container">
        <Footer/>
        <!-- <p>&copy; 2025 My Forum. All Rights Reserved.</p> -->
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
  /* box-sizing from about-us */
  box-sizing: border-box;

  /* Keep the 85px top padding from dev */
  padding-top: 85px;

  /* Also keep the bottom padding (and possibly side padding) from about-us.
     For example, you can do: */
  padding-bottom: 2rem;

  /* If you want some horizontal padding as well, do e.g. */
  /* padding: 0 2rem; */

  /* Or if you prefer the entire "2rem 0" from about-us plus your custom top:
     padding: 2rem 0;        // from about-us
     padding-top: 85px;      // overrides the top to 85px
  */
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
