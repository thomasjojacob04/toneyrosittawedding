<template>
  <div class="engagement-page">
    <HeroSection />
    <CoupleIntroduction />
    <BibleQuote />
    <EngagementDetails />
    <!-- <ScheduleSection /> -->
    <CountdownSection />
    <GallerySection />
    <FooterPrayer />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import CoupleIntroduction from '../components/CoupleIntroduction.vue'
import EngagementDetails from '../components/EngagementDetails.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import CountdownSection from '../components/CountdownSection.vue'
import GallerySection from '../components/GallerySection.vue'
import BibleQuote from '../components/BibleQuote.vue'
import FooterPrayer from '../components/FooterPrayer.vue'
</script>

<style scoped>
.engagement-page {
  width: 100%;
  overflow-x: hidden;
}
</style>