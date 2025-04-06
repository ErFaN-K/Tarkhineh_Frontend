<script setup>
import FoodCard from "./HorizontalFoodCard.vue";
import FoodCardSkeletonLoader from "./HorizontalFoodCardSkeletonLoader.vue";

defineProps({
  sectionTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="mb-6 md:mb-12 food-category-section">
    <div class="container">
      <!-- Section Title -->
      <h2 class="section__title">{{ sectionTitle }}</h2>
      <!-- Food Card Container -->
      <div class="section__body">
        <div class="grid grid-cols-1 gap-y-3 xl:grid-cols-2 md:gap-6">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCardSkeletonLoader />
          <FoodCardSkeletonLoader />
        </div>
      </div>
    </div>
  </section>
</template>
