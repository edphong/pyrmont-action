<!-- src/features/admin/AdminLayout.vue -->
<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <router-link to="/admin"           class="item">Dashboard</router-link>
      <router-link to="/admin/users"     class="item">Users</router-link>
      <router-link to="/admin/gallery"   class="item">Gallery</router-link>
    </aside>

    <main class="admin-main">
      <router-view />   <!-- child pages render here -->
    </main>
  </div>
</template>

<script setup>/* presentational only */</script>

<style scoped>
.admin-layout {display:flex;min-height:100vh;font-family:Inter,sans-serif;}
.sidebar      {width:230px;background:#0f2537;color:#fff;padding:1rem 0;}
.item         {display:block;color:#fff;padding:.75rem 2rem;text-decoration:none;}
.item.router-link-active {background:#17466b;}
.admin-main   {flex:1;padding:2rem;}
</style>
