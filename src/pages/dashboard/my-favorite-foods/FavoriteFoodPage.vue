<script setup>
import SearchInput from "@/components/shared/SearchInput.vue";
import FilterBox from "@/components/shared/FilterBox.vue";
import FoodCard from './components/FavoriteFoodCard.vue'
import FoodCardLoader from './components/FavoriteFoodCardLoader.vue'
</script>

<template>
    <div class="flex flex-col min-h-[calc(100vh-367px)] max-h-205.75 hidden-scroll overflow-auto md:rounded-lg md:border md:border-gray-400 md:p-6">
      <!-- Title -->
      <div class="flex md:pb-2 md:border-b md:border-b-gray-400 max-md:justify-center">
        <h4 class="text-gray-800 font-Dana-SemiBold md:text-xl text-base">علاقمندی‌ها</h4>
      </div>
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
      <div v-if="false" class="mt-6 md:mt-10 grid max-xl:grid-cols-2 max-md:grid-cols-3 max-sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-5 md:gap-y-6 max-md:pb-27">
         <FoodCard />
         <FoodCard />
         <FoodCard />
         <FoodCard />
         <FoodCard />
         <FoodCard />
         <FoodCardLoader />
         <FoodCardLoader />
      </div>
      <!-- IF NO FAVORITE -->
      <div v-else class="relative md:grow-1 max-md:mt-6 max-md:border max-md:rounded-lg max-md:border-gray-400 h-64 flex items-center justify-center">
        <!-- Spider Vector -->
        <svg class="-z-1 absolute w-50 md:w-81.25 h-48.25 md:h-78.25">
          <use href="#spider-vector"></use>
        </svg>
        <!-- Content -->
        <div class="flex flex-col items-center gap-y-4 md:gap-y-8">
          <span class="md:font-Dana-Medium font-Dana text-gray-700 text-custom md:text-xl">شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!</span>
          <!-- Redirect To Menu Page -->
          <router-link :to="{ name: 'MenuPage' }" class="cursor-pointer max-w-38 w-full md:max-w-69.5 h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary border border-Primary rounded-sm hover:bg-Primary/10">منوی رستوران</router-link>
        </div>
      </div>
    </div>
</template>