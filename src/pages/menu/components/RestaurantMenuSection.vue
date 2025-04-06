<script setup>
import RestaurantMenuItem from "./RestaurantMenuItem.vue";
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
            link="#"
            class="restaurant-menu__link--active"
          />
          <RestaurantMenuItem menuName="پیش غذا" link="#" />
          <RestaurantMenuItem menuName="دسر" link="#" />
          <RestaurantMenuItem menuName="نوشیدنی" link="#" />
        </div>
      </div>
    </div>
  </section>
</template>
