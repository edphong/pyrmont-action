<!-- src/views/NewsView.vue -->
<template>
  <div class="news-page">
    <LatestNews />
    <AllNews />
  </div>
</template>

<script setup>
import LatestNews from '@/components/News/NewsLatestNews.vue'
import AllNews from '@/components/News/NewsAllNewsSection.vue'
</script>

<style scoped>
.news-page {
}
</style>
