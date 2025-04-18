<!-- src/views/NewsView.vue -->
<template>
  <div class="news-page">
    <LatestNews />
    <AllNews />
  </div>
</template>

<script setup>
import LatestNews from '@/features/news/components/NewsLatestNews.vue'
import AllNews from '@/features/news/components/NewsAllNewsSection.vue'
</script>

<style scoped>
.news-page {
}
</style>
