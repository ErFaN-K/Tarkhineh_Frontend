<script setup>
// Components
import Header from '@/components/layout/SiteHeader.vue'
import DesktopProfilePanel from './components/DesktopProfilePanel.vue';
import MobileProfilePanel from './components/MobileProfilePanel.vue'
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
    <section class="md:my-12 mt-6 main-section">
        <div class="container">
            <div class="grid xl:grid-cols-12 lg:grid-cols-9 grid-cols-4 md:gap-x-6 max-lg:gap-y-6 items-start">
                <!-- Profile Panel ( Desktop )-->
                <DesktopProfilePanel class="max-md:hidden col-span-4 lg:col-span-3 xl:col-span-3"/>
                <!-- Profile Panel ( Mobile )-->
                <MobileProfilePanel class="md:hidden"/>
                <!-- Page Content -->
                <router-view class="xl:col-span-9 lg:col-span-6 col-span-4"></router-view>
            </div>
        </div>
    </section>
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