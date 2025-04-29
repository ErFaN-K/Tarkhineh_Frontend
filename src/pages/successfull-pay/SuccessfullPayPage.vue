<script setup>
// Components 
import Header from '@/components/layout/SiteHeader.vue'
import SuccessSection from './components/SuccessSection.vue'
import Footer from "@/components/layout/SiteFooter.vue";
import MobileMenu from "@/components/ui/MobileMenu.vue";
import Overlay from "@/components/ui/Overlay.vue";
</script>

<template>
  <!-- Success Pay Page -->
  <!----------------------->
  <!-- Success Pay | Header -->
  <Header />

  <!-- Success Pay | Main -->
  <main>
    <!-- Success Section -->
    <SuccessSection />
  </main>

  <!-- Success Pay | Footer ( md : Show )-->
  <Footer class="max-md:hidden"/>

  <!----------------------->
  
  <!-- Hamburger Menu -->
  <MobileMenu />
  <!-- Overlay -->
  <Overlay />
</template>