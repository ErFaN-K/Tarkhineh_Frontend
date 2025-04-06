<script setup>
import Header from "@/components/layout/Header.vue";
import HeroSection from "@/components/shared/HeroSectionWithSlider.vue";
import MenuCategorySection from "./components/MenuCategorySection.vue";
import FoodFilterSection from "./components/FoodFilterSection.vue";
import FoodCategorySection from "./components/FoodCategorySection.vue";
import Footer from "@/components/layout/Footer.vue";
import Login from "@/components/shared/LoginOtp.vue";
import HamburgerMenu from "@/components/shared/HamburgerMenu.vue"
import FoodInfoCard from "@/components/shared/FoodInfoCard.vue";
import Overlay from "@/components/shared/Overlay.vue"
</script>

<template>
  <!-- Menu Page -->
  <Header />

  <!-- Menu | Main -->
  <main>
    <!-- Menu | Hero Section -> !mb-0 ( Design ) -->
    <HeroSection class="!mb-0" />
    <!-- Menu | Menu Category Section -->
    <MenuCategorySection />
    <!-- Menu | Food Filter Section -->
    <FoodFilterSection />
    <!-- Menu | Food Category Section -->
    <FoodCategorySection sectionTitle="غذاهای ایرانی" />
    <!-- Menu | Food Category Section -->
    <FoodCategorySection sectionTitle="غذاهای غیر ایرانی" />
  </main>

  <!----------------------->

  <!-- Footer -->
  <Footer />
  <!-- Login -->
  <Login />
  <!-- Hamburger Menu -->
  <HamburgerMenu />
  <!-- Food Information Card -->
  <FoodInfoCard />
  <!-- Overlay -->
  <Overlay />
</template>
