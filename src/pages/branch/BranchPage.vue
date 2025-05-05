<script setup lang="ts">
// Components
import Header from "@/components/layout/SiteHeader.vue";
import HeroSection from "@/components/ui/HeroSectionWithSlider.vue";
import SpecialOfferSection from "./components/SpecialOfferSection.vue";
import PopularFoodSection from "./components/PopularFoodSection.vue";
import NotIranianFoodSection from "./components/NotIranianFoodSection.vue";
import AboutBranchSection from "./components/AboutBranchSection.vue";
import UserCommentSection from "./components/UserCommentSection.vue";
import Footer from "@/components/layout/SiteFooter.vue";
import MobileMenu from "@/components/ui/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import FoodDetailsModal from "@/components/shared/FoodDetailsModal.vue";
import SearchBoxModal from "@/components/shared/SearchBoxModal.vue";
import Overlay from "@/components/ui/Overlay.vue";
</script>

<template>
  <!-- Branch Page -->
  <!----------------------->
  <!-- Branch | Header -->
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
    <!-- Branch | User Comment Section -->
    <UserCommentSection />
  </main>

  <!-- Branch | Footer -->
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
