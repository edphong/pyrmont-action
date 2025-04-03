<template>
  <!-- We simply stack all the sections below -->
  <HeroSection />
  <ObjectivesSection />
  <HistorySection />
  <RulesAndByLawsSection />
  <BecomeMemberSection />
</template>

<script setup>
import HeroSection from '@/components/About/HeroSection.vue'
import ObjectivesSection from '@/components/About/ObjectivesSection.vue'
import HistorySection from '@/components/About/HistorySection.vue'
import RulesAndByLawsSection from '@/components/About/RulesAndByLawsSection.vue'
import BecomeMemberSection from '@/components/About/BecomeMemberSection.vue'
</script>

<style scoped>
/* The AboutUsView remains minimal. Any overarching styles are handled in the layout or sections. */
</style>
