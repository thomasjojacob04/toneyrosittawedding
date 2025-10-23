<template>
  <div class="wedding-page">
    <HeroSection />
    <BibleQuote />
    <CoupleIntroduction />
    <WeddingDetails />
    <!-- <ScheduleSection /> -->
    <GallerySection />
    <CountdownSection />
    <FooterPrayer />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import CoupleIntroduction from '../components/CoupleIntroduction.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import CountdownSection from '../components/CountdownSection.vue'
import GallerySection from '../components/GallerySection.vue'
import BibleQuote from '../components/BibleQuote.vue'
import FooterPrayer from '../components/FooterPrayer.vue'
import WeddingDetails from '@/components/WeddingDetails.vue'
</script>

<style scoped>
.wedding-page {
  width: 100%;
  overflow-x: hidden;
}
</style>