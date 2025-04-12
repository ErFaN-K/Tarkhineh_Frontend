<script setup>
// Components
import Header from '@/components/layout/SiteHeader.vue'
import Footer from "@/components/layout/SiteFooter.vue";
import MobileMenu from "@/components/ui/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import Overlay from "@/components/ui/Overlay.vue";
</script>

<template>
  <!-- Faq Page Page -->
  <!----------------------->
  <!-- Faq Page | Header -->
  <Header />

  <!-- Faq Page | Main -->
  <main>
    <router-view></router-view>
  </main>

  <!-- Faq Page | Footer -->
  <Footer />

  <!----------------------->
  
  <!-- Hamburger Menu -->
  <MobileMenu />
  <!-- Login Form -->
  <LoginForm />
  <!-- Choose Branch Modal -->
  <ChooseBranchModal />
  <!-- Overlay -->
  <Overlay />
</template>