<script setup lang="ts">
import FaqMenuItem from "@/components/shared/MenuItem.vue";
</script>

<template>
  <section class="mb-2 md:mb-4 faq-menu-section">
    <div class="bg-gray-300">
      <div class="container">
        <div
          class="h-10 md:h-16 flex items-center jusity-start md:gap-x-8 gap-x-4"
        >
          <FaqMenuItem menuName="سوالات متداول" link="Faq|Questions" />
          <FaqMenuItem menuName="قوانین ترخینه" link="Faq|Rules" />
          <FaqMenuItem menuName="حریم خصوصی" link="Faq|Privacy" />
        </div>
      </div>
    </div>
  </section>
</template>
