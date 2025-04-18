<!-- src/components/Navigation.vue -->
<template>
  <header class="site-header">
    <nav>
      <!-- Logo – click → home -->
      <div class="logo">
        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/logo.png" alt="Pyrmont logo" />
        </RouterLink>
      </div>

      <!-- Main navigation -->
      <ul class="navigation">
        <li><RouterLink class="link" :to="{ name: 'admin'    }">Admin</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'projects' }">Projects</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'about'    }">About&nbsp;Us</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'news'     }">News</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'gallery'  }">Gallery</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'contact'  }">Contact</RouterLink></li>

        <!-- UI‑only items (no real routes yet) -->
        <li><a class="link"  href="#">Join&nbsp;Us</a></li>
        <li><a class="login" href="#">Login</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
/* purely presentational – no script logic needed */
</script>

<style scoped>
header {
  background-color: #fff;
  height: 85px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: 0.5s ease all;
}

nav {
  display: flex;
  align-items: center;
  width: 96%;
  margin: 0 auto;
  padding: 5px 0;
}

.navigation {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  text-transform: uppercase;
  padding: 10px 16px;
  margin-left: 16px;
}

.link,
.login {
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid transparent;
  transition: 0.3s ease all;
}

.link:hover {
  color: #3498db;
  border-color: #3498db;
}

.login {
  border: thin solid #000;
  border-radius: 10px;
  padding: 8px 15px;
}

.login:hover {
  background-color: #2980b9;
  border-color: #2980b9;
  color: #fff;
}

.logo img {
  width: 300px;
  transition: 0.3s ease all;
}
</style>
