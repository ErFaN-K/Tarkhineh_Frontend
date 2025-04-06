<script setup>
import SearchBox from "@/components/shared/SearchBox.vue";
import MenuCard from "./MenuCard.vue";
</script>

<template>
  <section class="mb-11.25 md:mb-18 menu-section">
    <div class="container">
      <!-- Search Box -->
      <div
        class="items-center justify-between hidden h-8 px-4 mb-6 text-gray-800 border border-gray-400 rounded-sm max-lg:flex"
      >
        <SearchBox />
      </div>
      <!-- Section Title -->
      <h2 class="section__title text-center text-gray-800">منوی رستوران</h2>
      <!-- Menu Box Container -->
      <div
        class="grid grid-cols-2 mt-18 md:mt-38 gap-y-26.5 md:gap-y-40 gap-x-4 lg:grid-cols-4"
      >
        <MenuCard
          link="#"
          linkTitle="غذای اصلی"
          imageSrc="src/assets/images/menu/Menu-Main-Food.png"
        />
        <MenuCard
          link="#"
          linkTitle="پیش غذا"
          imageSrc="src/assets/images/menu/Menu-Appetizer.png"
        />
        <MenuCard
          link="#"
          linkTitle="دسر"
          imageSrc="src/assets/images/menu/Menu-Dessert.png"
        />
        <MenuCard
          link="#"
          linkTitle="نوشیدنی"
          imageSrc="src/assets/images/menu/Menu-Drink.png"
        />
      </div>
    </div>
  </section>
</template>
