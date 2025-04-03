<!-- src/views/ContactView.vue -->
<template>
  <div class="contact-page">
    <ContactHeroSection />
    <ContactFollowUsSection />
    <ContactLocationSection />
    <ContactFormSection />

  </div>
</template>

<script setup>
import ContactHeroSection from '@/components/Contact/ContactHeroSection.vue'
import ContactFormSection from '@/components/Contact/ContactFormSection.vue'
import ContactFollowUsSection from '@/components/Contact/ContactFollowUsSection.vue'
import ContactLocationSection from '@/components/Contact/ContactLocationSection.vue'


</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
}
</style>
