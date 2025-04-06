<script setup>
import MenuCategoryItem from "./MenuCategoryItem.vue";
</script>

<template>
  <section class="mb-2 md:mb-4 menu-category-section">
    <div class="bg-gray-300">
      <div class="container">
        <div
          class="h-10 md:h-16 flex items-center jusity-start md:gap-x-8 gap-x-4"
        >
          <MenuCategoryItem
            categoryName="غذای اصلی"
            link="#"
            class="category__link--active"
          />
          <MenuCategoryItem categoryName="پیش غذا" link="#" />
          <MenuCategoryItem categoryName="دسر" link="#" />
          <MenuCategoryItem categoryName="نوشیدنی" link="#" />
        </div>
      </div>
    </div>
  </section>
</template>
