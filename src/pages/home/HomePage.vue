<script setup>
// Components
import Header from "@/components/layout/SiteHeader.vue";
import HeroSection from "@/components/ui/HeroSectionWithSlider.vue";
import MenuSection from "./components/RestaurantMenuSection.vue";
import AboutRestaurantSection from "./components/AboutRestaurantSection.vue";
import BranchSection from "./components/BranchSection.vue";
import Footer from "@/components/layout/SiteFooter.vue";
import MobileMenu from "@/components/ui/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import FoodDetailsModal from "@/components/shared/FoodDetailsModal.vue";
import SearchBoxModal from "@/components/shared/SearchBoxModal.vue";
import ChooseBranchModal from './components/ChooseBranchModal.vue'
import Overlay from "@/components/ui/Overlay.vue";
console.log(import.meta.env.API)
</script>

<template>
  <!-- Home Page -->
  <!----------------------->
  <!-- Home | Header -->
  <Header />

  <!-- Home | Main -->
  <main>
    <!-- Home | Hero Section -->
    <HeroSection />
    <!-- Home | Menu Section -->
    <MenuSection />
    <!-- Home | About Restaurant Section -->
    <AboutRestaurantSection />
    <!-- Home | Branch Section -->
    <BranchSection />
  </main>

  <!-- Home | Footer -->
  <Footer />

  <!----------------------->

  <!-- Hamburger Menu -->
  <MobileMenu />
  <!-- Login Form -->
  <LoginForm />
  <!-- Food Details Modal -->
  <FoodDetailsModal />
  <!-- Search Box Modal ( For Desktop ) -->
  <SearchBoxModal />
  <!-- Choose Branch Modal -->
  <ChooseBranchModal />
  <!-- Overlay -->
  <Overlay />
</template>
