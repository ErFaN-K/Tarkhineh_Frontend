<script setup lang="ts">
import Header from '@/components/layout/SiteHeader.vue'
import HeroSection from '@/components/ui/HeroSectionWithoutSlider.vue'
import RestaurantAttributeSection from './components/RestaurantAttributeSection.vue'
import ConsultationRequestSection from './components/ConsultationRequestSection.vue';
import RepresentationRequestSection from './components/RepresentationRequestSection.vue'
import Footer from '@/components/layout/SiteFooter.vue'
import MobileMenu from "@/components/ui/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import SearchBoxModal from "@/components/shared/SearchBoxModal.vue";
import ChooseBranchModal from '@/components/shared/ChooseBranchModal.vue'
import Overlay from "@/components/ui/Overlay.vue";
import DistributorBenefitsSection from './components/DistributorBenefitsSection.vue';
</script>

<template>
    <!-- Dealer Agreement Page -->
    <!----------------------->
    <!-- Dealer Agreement | Header -->
    <Header />

    <!-- Dealer Agreement | Main -->
    <main>
        <!-- Dealer Agreement | Hero Section -->
        <HeroSection sectionTitle="همین الان به خانواده بزرگ ترخینه بپیوندید!" backgroundName="hero__background--dealer-agreement"/>
        <!-- Dealer Agreement | Restaurant Attributes Section -->
        <RestaurantAttributeSection />
        <!-- Dealer Agreement | Distributor Benefits Section -->
        <DistributorBenefitsSection />
        <!-- Dealer Agreement | Consulation Request Section -->
        <ConsultationRequestSection />
        <!-- Dealer Agreement | Representation Request Section -->
        <RepresentationRequestSection />
    </main>

    <!-- Dealer Agreement | FOoter -->
    <Footer />

        <!----------------------->

    <!-- Hamburger Menu -->
    <MobileMenu />
    <!-- Login Form -->
    <LoginForm />
    <!-- Search Box Modal ( For Desktop ) -->
    <SearchBoxModal />
    <!-- Choose Branch Modal -->
    <ChooseBranchModal />
    <!-- Overlay -->
    <Overlay />
</template>