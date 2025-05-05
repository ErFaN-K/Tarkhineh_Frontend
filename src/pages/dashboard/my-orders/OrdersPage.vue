<script setup lang="ts">
import DashboardTitle from '../components/DashboardTitle.vue'
import FilterBox from "@/components/shared/FilterBox.vue";
import OrderDetailCard from './components/OrderDetailCard.vue'
import NotFound from '../components/NotFound.vue'
</script>

<template>
    <div class="flex flex-col min-h-[calc(100vh-367px)] max-h-205.75 hidden-scroll overflow-auto md:rounded-lg md:border md:border-gray-400 md:p-6">
      <!-- Title -->
      <DashboardTitle title="سفارشات" />
      <!-- Order Filter -->
      <div class="mt-3 md:mt-4 flex items-center gap-x-2">
          <FilterBox filterName="همه" filterQuery="#" />
          <FilterBox filterName="جاری" filterQuery="#" />
          <FilterBox filterName="تحویل شده" filterQuery="#" />
          <FilterBox filterName="لغو شده" filterQuery="#" />
      </div>
      <!-- IF HAS ORDER -->
      <div v-if="true" class="mt-6 md:mt-8 flex flex-col gap-y-3 md:gap-y-4 max-md:pb-27">
        <OrderDetailCard />
        <OrderDetailCard />
        <OrderDetailCard />
      </div>
      <!-- IF NO ORDER -->
      <NotFound v-else content="شما تا به این لحظه سفارشی ثبت نکرده اید"/>
    </div>
</template>
