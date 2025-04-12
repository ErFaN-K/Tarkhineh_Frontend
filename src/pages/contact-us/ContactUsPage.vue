<script setup>
import Header from '@/components/layout/SiteHeader.vue'
import HeroSection from '@/components/ui/HeroSectionWithoutSlider.vue'
import BranchSection from './components/BranchSection.vue'
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
</template>