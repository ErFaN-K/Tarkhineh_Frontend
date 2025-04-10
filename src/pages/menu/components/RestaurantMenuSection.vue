<script setup>
import RestaurantMenuItem from "@/components/shared/MenuItem.vue";
</script>

<template>
  <section class="mb-2 md:mb-4 restaurant-menu-section">
    <div class="bg-gray-300">
      <div class="container">
        <div
          class="h-10 md:h-16 flex items-center jusity-start md:gap-x-8 gap-x-4"
        >
          <RestaurantMenuItem
            menuName="غذای اصلی"
            link="MenuPage"
            class="menu__item--active"
          />
          <RestaurantMenuItem menuName="پیش غذا" link="MenuPage" />
          <RestaurantMenuItem menuName="دسر" link="MenuPage" />
          <RestaurantMenuItem menuName="نوشیدنی" link="MenuPage" />
        </div>
      </div>
    </div>
  </section>
</template>
