<script setup>
import FoodCard from "@/components/shared/HorizontalFoodCard.vue";
import FoodCardLoader from "@/components/ui/HorizontalFoodCardLoader.vue";

defineProps({
  sectionTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="mb-6 md:mb-12 restaurant-menu-preview-section">
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
          <FoodCardLoader />
          <FoodCardLoader />
        </div>
      </div>
    </div>
  </section>
</template>
