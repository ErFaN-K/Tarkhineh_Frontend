<script setup>
import FilterBox from "@/components/shared/FilterBox.vue";
import OrderDetailCard from './components/OrderDetailCard.vue'
</script>

<template>
    <div class="flex flex-col min-h-[calc(100vh-367px)] max-h-205.75 hidden-scroll overflow-auto md:rounded-lg md:border md:border-gray-400 md:p-6">
      <!-- Title -->
      <div class="flex md:pb-2 md:border-b md:border-b-gray-400 max-md:justify-center">
        <h4 class="text-gray-800 font-Dana-SemiBold md:text-xl text-base">سفارشات</h4>
      </div>
      <!-- Order Filter -->
      <div class="mt-3 md:mt-4 flex items-center gap-x-2">
          <FilterBox filterName="همه" filterQuery="#" />
          <FilterBox filterName="جاری" filterQuery="#" />
          <FilterBox filterName="تحویل شده" filterQuery="#" />
          <FilterBox filterName="لغو شده" filterQuery="#" />
      </div>
      <!-- Orders Details Container -->
      <div class="mt-6 md:mt-8 flex flex-col gap-y-3 md:gap-y-4 max-md:pb-27">
        <OrderDetailCard />
      </div>
    </div>
</template>
