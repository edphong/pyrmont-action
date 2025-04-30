<!-- src/components/Navigation.vue -->
<template>
  <header class="site-header">
    <nav>
      <div class="logo">
        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/logo.png" alt="Pyrmont logo" />
        </RouterLink>
      </div>

      <ul class="navigation">
        <li><RouterLink class="link" :to="{ name: 'projects' }">Projects</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'about'    }">About&nbsp;Us</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'news'     }">News</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'gallery'  }">Gallery</RouterLink></li>
        <li><RouterLink class="link" :to="{ name: 'contact'  }">Contact</RouterLink></li>
        <li><a class="link"  href="#">Join&nbsp;Us</a></li>
        <li><a class="login" href="#">Login</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// No script logic needed
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
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  transition: 0.4s ease all;
}

nav {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 48px;
  width: auto;
  transition: 0.3s ease all;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: flex;
  align-items: center;
}

.link,
.login {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: #222;
  border-bottom: 2px solid transparent;
  transition: 0.25s ease;
}

.link:hover {
  color: #2c74d8;
  border-color: #2c74d8;
}

.login {
  border: 1px solid #2c74d8;
  border-radius: 6px;
  padding: 6px 14px;
  font-weight: 600;
  transition: 0.25s ease;
}

.login:hover {
  background-color: #2c74d8;
  color: #fff;
  border-color: #2c74d8;
}
</style>
