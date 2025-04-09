<script setup>
// Components
import Header from '@/components/layout/SiteHeader.vue'
import HeroSection from '@/components/shared/HeroSectionWithoutSlider.vue'
import AboutSection from './components/AboutSection.vue';
import RestaurantAttributeSection from './components/RestaurantAttributeSection.vue'
import Footer from '@/components/layout/SiteFooter.vue'
import MobileMenu from "@/components/shared/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import SearchBoxModal from "@/components/shared/SearchBoxModal.vue";
import Overlay from "@/components/shared/Overlay.vue";
</script>

<template>
    <!-- About Us Page -->
    <!----------------------->
    <!-- About Us | Header -->
    <Header />

    <!-- About Us | Main -->
    <main>
        <!-- About Us | Hero Section -->
        <HeroSection sectionTitle="درباره ترخینه بیشتر بدانید!" backgroundName="hero__background--about-us"/>
        <!-- About Us | About Section -->
        <AboutSection />
        <!-- About Us | Restaurant Attribute Section -->
        <RestaurantAttributeSection />
    </main>

    <!-- Menu | Footer -->
    <Footer />

    <!----------------------->

    <!-- Hamburger Menu -->
    <MobileMenu />
    <!-- Login Form -->
    <LoginForm />
    <!-- Search Box Modal ( For Desktop ) -->
    <SearchBoxModal />
    <!-- Overlay -->
    <Overlay />
</template>