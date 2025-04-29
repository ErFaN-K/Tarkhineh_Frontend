<script setup>
import SearchInput from "@/components/shared/SearchInput.vue";
import CategoryFoodBox from "@/components/shared/CategoryFoodBox.vue";
</script>

<template>
  <section class="md:mb-11.5 mb-3.5 food-filter-section">
    <div class="container">
      <div class="grid grid-cols-4 md:grid-cols-12 gap-3 md:items-start">
        <!-- Filter Food -->
        <div
          class="col-span-4 md:col-span-7 flex items-center gap-x-2 whitespace-nowrap pb-2 overflow-auto custom-scroll"
        >
          <CategoryFoodBox filterName="غذاهای ایرانی" filterQuery="#" />
          <CategoryFoodBox filterName="غذاهای غیر ایرانی" filterQuery="#" />
          <CategoryFoodBox filterName="پیتزاها" filterQuery="#" />
          <CategoryFoodBox filterName="ساندویچ‌ها" filterQuery="#" />
          <CategoryFoodBox filterName="پرفروش‌ترین" filterQuery="#" />
          <CategoryFoodBox filterName="اقتصادی‌ترین" filterQuery="#" />
        </div>
        <!-- Search Box -->
        <div
          class="col-span-4 md:col-span-5 h-8 md:h-10 px-4 flex items-center justify-between border border-gray-400 md:rounded-lg rounded-sm"
        >
          <SearchInput />
        </div>
      </div>
    </div>
  </section>
</template>
