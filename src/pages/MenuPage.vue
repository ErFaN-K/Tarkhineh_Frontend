<script setup>
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSectionWithSlider.vue";
import MenuCategorySection from "../components/PagesComponent/MenuPage/MenuCategorySection.vue";
import FoodFilterSection from "../components/PagesComponent/MenuPage/FoodFilterSection.vue";
import FoodCategorySection from "../components/PagesComponent/MenuPage/FoodCategorySection.vue";
import Footer from "../components/Footer.vue";
import HamburgerMenu from "../components/HamburgerMenu.vue";
import Overlay from "../components/Overlay.vue";
import FoodInfoCard from "../components/FoodInfoCard.vue";
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
  <!-- Hamburger Menu -->
  <HamburgerMenu />
  <!-- Food Information Card -->
  <FoodInfoCard />
  <!-- Overlay -->
  <Overlay />
</template>
