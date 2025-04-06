<script setup>
// Components
import Header from "@/components/layout/Header.vue";
import HeroSection from "@/components/shared/HeroSectionWithSlider.vue";
import SpecialOfferSection from "./components/SpecialOfferSection.vue";
import PopularFoodSection from "./components/PopularFoodSection.vue";
import NotIranianFoodSection from "./components/NotIranianFoodSection.vue";
import AboutBranchSection from "./components/AboutBranchSection.vue";
import UserCommentsSection from "./components/UserCommentsSection.vue";
import Footer from "@/components/layout/Footer.vue";
import HamburgerMenu from "@/components/shared/HamburgerMenu.vue"
import Overlay from "@/components/shared/Overlay.vue"
</script>

<template>
  <!-- Branch Page -->
  <Header />

  <!-- Branch | Main -->
  <main>
    <!-- Branch | Hero Section -->
    <HeroSection />
    <!-- Branch | Special Offer Section -->
    <SpecialOfferSection />
    <!-- Branch | Popular Food Section -->
    <PopularFoodSection />
    <!-- Branch | Not Iranian Food Section -->
    <NotIranianFoodSection />
    <!-- Branch | About Branch Section -->
    <AboutBranchSection />
    <!-- Branch | User Commnets Section -->
    <UserCommentsSection />
  </main>

  <!----------------------->

  <!-- Footer -->
  <Footer />
  <!-- Hamburger Menu -->
  <HamburgerMenu />
  <!-- Overlay -->
  <Overlay />
</template>
