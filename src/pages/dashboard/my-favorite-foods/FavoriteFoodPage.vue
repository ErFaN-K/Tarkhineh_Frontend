<script setup lang="ts">
import DashboardTitle from '../components/DashboardTitle.vue'
import SearchInput from "@/components/shared/SearchInput.vue";
import FilterBox from "@/components/shared/FilterBox.vue";
import FoodCard from './components/FavoriteFoodCard.vue'
import FoodCardLoader from './components/FavoriteFoodCardLoader.vue'
import NotFound from '../components/NotFound.vue'
</script>

<template>
    <div class="flex flex-col min-h-[calc(100vh-367px)] max-h-205.75 hidden-scroll overflow-auto md:rounded-lg md:border md:border-gray-400 md:p-6">
      <!-- Title -->
      <DashboardTitle title="علاقه مندی‌ها" />
      <!-- Search & Filter Section -->
      <div class="mt-4 md:mt-3 grid grid-cols-4 md:grid-cols-7 gap-3 items-center">
        <!-- Filter Food -->
        <div class="max-md:hidden col-span-4 flex items-center gap-x-2 whitespace-nowrap overflow-auto hidden-scroll">
          <FilterBox filterName="همه" filterQuery="#" />
          <FilterBox filterName="غذای اصلی" filterQuery="#" />
          <FilterBox filterName="پیش غذا" filterQuery="#" />
          <FilterBox filterName="دسر" filterQuery="#" />
          <FilterBox filterName="نوشیدنی" filterQuery="#" />
        </div>
        <!-- Search Box -->
        <div class="col-span-4 md:col-span-3 h-8 md:h-10 px-4 flex items-center justify-between border border-gray-400 md:rounded-lg rounded-sm">
          <SearchInput />
        </div>
      </div>
      <!-- IF HAS FAVORITE -->
      <div v-if="true" class="mt-6 md:mt-10 grid max-xl:grid-cols-2 max-md:grid-cols-3 max-sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-5 md:gap-y-6 max-md:pb-27">
         <FoodCard />
         <FoodCard />
         <FoodCard />
         <FoodCardLoader />
         <FoodCardLoader />
         <FoodCardLoader />
      </div>
      <NotFound v-else content="شما هنوز محصولی را به علاقه مندی ها اضافه نکردید‌!"/>
    </div>
</template>