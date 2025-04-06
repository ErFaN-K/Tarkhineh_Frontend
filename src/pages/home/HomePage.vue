<script setup>
import Header from "@/components/layout/Header.vue";
import HeroSection from "@/components/shared/HeroSectionWithSlider.vue";
import MenuSection from "./components/MenuSection.vue";
import AboutSection from "./components/AboutSection.vue";
import BranchSection from "./components/BranchSection.vue";
import Footer from "@/components/layout/Footer.vue";
import HamburgerMenu from "@/components/shared/HamburgerMenu.vue"
import Overlay from "@/components/shared/Overlay.vue"
</script>

<template>
  <!-- Home Page -->
  <Header />

  <!-- Home | Main -->
  <main>
    <!-- Home | Hero Section -->
    <HeroSection />
    <!-- Home | Menu Section -->
    <MenuSection />
    <!-- Home | About Section -->
    <AboutSection />
    <!-- Home | Branch Section -->
    <BranchSection />
  </main>

  <!----------------------->

  <!-- Footer -->
  <Footer />
  <!-- Hamburger Menu -->
  <HamburgerMenu />
  <!-- Overlay -->
  <Overlay />
</template>
