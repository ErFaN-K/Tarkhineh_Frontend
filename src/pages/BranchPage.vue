<script setup>

import Header from '../components/Header.vue'
import HeroSection from "../components/HeroSectionWithSlider.vue";
import SpecialOfferSection from '../components/PagesComponent/BranchPage/SpecialOfferSection.vue';
import PopularFoodSection from '../components/PagesComponent/BranchPage/PopularFoodSection.vue';
import Footer from "../components/Footer.vue";
import HamburgerMenu from "../components/HamburgerMenu.vue";
import Overlay from '../components/Overlay.vue'

</script>

<template>

    <!-- Branch Page -->
    <Header />
    <!-- Branch | Hero Section -->
    <HeroSection /> 
    <!-- Branch | Special Offer Section -->
    <SpecialOfferSection />
    <!-- Branch | Popular Food Section -->
    <PopularFoodSection />

    <!----------------------->

    <!-- Footer -->
    <Footer />
    <!-- Hamburger Menu -->
    <HamburgerMenu />
    <!-- Overlay -->
    <Overlay />

</template>