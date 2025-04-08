<script setup>
// Components 
import Header from '@/components/layout/SiteHeader.vue'
import ResultSection from './components/ResultSection.vue'
import Footer from "@/components/layout/SiteFooter.vue";
import MobileMenu from "@/components/shared/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import FoodDetailsModal from "@/components/shared/FoodDetailsModal.vue";
import Overlay from "@/components/shared/Overlay.vue";
</script>

<template>
  <!-- Search Page -->
  <!----------------------->
  <!-- Search | Header -->
  <Header />

  <!-- Serach | Main -->
  <main>
    <!-- Result Section -->
    <ResultSection />
  </main>

  <!-- Search | Footer ( md : Show )-->
  <Footer class="max-md:hidden"/>

  <!----------------------->
  
  <!-- Hamburger Menu -->
  <MobileMenu />
  <!-- Login Form -->
  <LoginForm />
  <!-- Food Details Modal -->
  <FoodDetailsModal />
  <!-- Overlay -->
  <Overlay />
</template>