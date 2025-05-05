<script setup lang="ts">
// Components
import Header from '@/components/layout/SiteHeader.vue'
import MainSection from './components/MainSection.vue'
import Footer from "@/components/layout/SiteFooter.vue";
import MobileMenu from "@/components/ui/MobileMenu.vue";
import CloseModal from '@/components/shared/closeModal.vue';
import AddressEditorModal from '@/components/shared/AddressEditorModal.vue';
import Overlay from "@/components/ui/Overlay.vue";
</script>

<template>
  <!-- Dashboard Page Page -->
  <!----------------------->
  <!-- Dashboard Page | Header -->
  <Header />

  <!-- Dashboard Page | Main -->
  <main>
    <MainSection />
  </main>

  <!-- Dashboard Page | Footer ( md : Show )-->
  <Footer class="max-md:hidden"/>

  <!----------------------->
  
  <!-- Hamburger Menu -->
  <MobileMenu />
  <!-- Close Modal -->
  <CloseModal />
  <!-- Address Editor -->
  <AddressEditorModal />
  <!-- Overlay -->
  <Overlay />
</template>