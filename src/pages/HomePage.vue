<script setup>
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSection.vue";
import MenuSection from "../components/PagesComponent/HomePage/MenuSection.vue"
import AboutSection from "../components/PagesComponent/HomePage/AboutSection.vue";
import BranchSection from "../components/PagesComponent/HomePage/BranchSection.vue"
import Footer from "../components/Footer.vue";
import HamburgerMenu from "../components/HamburgerMenu.vue";
import Overlay from '../components/Overlay.vue'

</script>

<template>
  <!-- Home Page -->
  <Header />
  <!-- Home | Hero Section -->
  <HeroSection />
  <!-- Home | Menu Section -->
  <MenuSection />
  <!-- Home | About Section -->
  <AboutSection />
  <!-- Home | Branch Section -->
  <BranchSection />
  <!-- Home | Footer -->
  <Footer />
  <!-- Hamburger Menu -->
  <HamburgerMenu />
  <!-- Home | Overlay -->
  <Overlay />
</template>

