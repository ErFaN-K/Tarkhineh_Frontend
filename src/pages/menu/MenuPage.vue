<script setup>
// Components
import Header from "@/components/layout/SiteHeader.vue";
import HeroSection from "@/components/ui/HeroSectionWithSlider.vue";
import RestaurantMenuSection from "./components/RestaurantMenuSection.vue";
import FoodFilterSection from "./components/FoodFilterSection.vue";
import RestaurantMenuPreviewSection from "./components/RestaurantMenuPreviewSection.vue";
import Footer from "@/components/layout/SiteFooter.vue";
import MobileMenu from "@/components/ui/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import FoodDetailsModal from "@/components/shared/FoodDetailsModal.vue";
import SearchBoxModal from "@/components/shared/SearchBoxModal.vue";
import Overlay from "@/components/ui/Overlay.vue";
</script>

<template>
  <!-- Menu Page -->
  <!----------------------->
  <!-- Menu | Header -->
  <Header />

  <!-- Menu | Main -->
  <main>
    <!-- Menu | Hero Section -> !mb-0 ( Design ) -->
    <HeroSection class="!mb-0" />
    <!-- Menu | Restaurant Menu Section -->
    <RestaurantMenuSection />
    <!-- Menu | Food Filter Section -->
    <FoodFilterSection />
    <!-- Menu | Restaurant Menu Preview Section -->
    <RestaurantMenuPreviewSection sectionTitle="غذاهای ایرانی" />
    <!-- Menu | Restaurant Menu Preview Section -->
    <RestaurantMenuPreviewSection sectionTitle="غذاهای غیر ایرانی" />
  </main>

  <!-- Menu | Footer -->
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
  <!-- Overlay -->
  <Overlay />
</template>
