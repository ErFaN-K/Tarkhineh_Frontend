<script setup>
// Components 
import Header from '@/components/layout/SiteHeader.vue'
import UnsuccessSection from './components/UnsuccessSection.vue'
import Footer from "@/components/layout/SiteFooter.vue";
import MobileMenu from "@/components/shared/MobileMenu.vue";
import LoginForm from "@/components/shared/OtpLogin.vue";
import Overlay from "@/components/shared/Overlay.vue";
</script>

<template>
  <!-- Unuccess Pay Page -->
  <!----------------------->
  <!-- Unuccess Pay | Header -->
  <Header />

  <!-- Unuccess Pay | Main -->
  <main>
    <!-- ✅ Unuccess Section -->
    <UnsuccessSection />
  </main>

  <!-- Unuccess Pay | Footer ( md : Show )-->
  <Footer class="max-md:hidden"/>

  <!----------------------->
  
  <!-- Hamburger Menu -->
  <MobileMenu />
  <!-- Login Form -->
  <LoginForm />
  <!-- Overlay -->
  <Overlay />
</template>