<script setup>
// Components
import Header from '@/components/layout/SiteHeader.vue'
import StepperSection from './components/StepperSection.vue'
import MainSection from './components/MainSection.vue'
import Footer from '@/components/layout/SiteFooter.vue'
import MobileMenu from "@/components/ui/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import SearchBoxModal from "@/components/shared/SearchBoxModal.vue";
import Overlay from "@/components/ui/Overlay.vue";

// Codes
import { ref } from 'vue';

const step = ref(1)
</script>

<template>
    <!-- Cart Page Page -->
    <!----------------------->
    <!-- Cart Page | Header -->
    <Header />

    <!-- Cart Page | Main -->
    <main>
        <!-- Cart Page | Stepper Section -->
        <StepperSection />
        <!-- Cart Page | Main Section -->
        <MainSection />
    </main>

    <!-- Cart Page | FOoter -->
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