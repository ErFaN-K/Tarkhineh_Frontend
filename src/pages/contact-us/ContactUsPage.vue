<script setup>
import Header from '@/components/layout/SiteHeader.vue'
import HeroSection from '@/components/ui/HeroSectionWithoutSlider.vue'
import BranchSection from './components/BranchSection.vue'
import Footer from '@/components/layout/SiteFooter.vue'
import MobileMenu from "@/components/ui/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import SearchBoxModal from "@/components/shared/SearchBoxModal.vue";
import Overlay from "@/components/ui/Overlay.vue";
</script>

<template>
    <!-- Contact Us Page -->
    <!----------------------->
    <!-- Contact Us | Header -->
    <Header />

    <!-- Contact Us | Main -->
    <main>
        <!-- Contact Us | Hero Section -->
        <HeroSection sectionTitle="با ترخینه در تماس باشید." backgroundName="hero__background--contact-us"/>
        <!-- Contact Us | Branch Section -->
        <BranchSection />
    </main>

    <!-- Contact Us | FOoter -->
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