<script setup>
import SearchInput from "@/components/shared/SearchInput.vue";
import FilterBox from "@/components/shared/FilterBox.vue";
</script>

<template>
  <section class="md:mb-11.5 mb-3.5 food-filter-section">
    <div class="container">
      <div class="grid grid-cols-4 md:grid-cols-12 gap-3 md:items-start">
        <!-- Filter Food -->
        <div
          class="col-span-4 md:col-span-7 flex items-center gap-x-2 whitespace-nowrap pb-2 overflow-auto custom-scroll"
        >
          <FilterBox filterName="غذاهای ایرانی" filterQuery="#" />
          <FilterBox filterName="غذاهای غیر ایرانی" filterQuery="#" />
          <FilterBox filterName="پیتزاها" filterQuery="#" />
          <FilterBox filterName="ساندویچ‌ها" filterQuery="#" />
          <FilterBox filterName="پرفروش‌ترین" filterQuery="#" />
          <FilterBox filterName="اقتصادی‌ترین" filterQuery="#" />
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
