<script setup>
import AddressDetails from '@/components/shared/AddressDetails.vue';
</script>

<template>
    <div class="flex flex-col min-h-[calc(100vh-367px)] max-h-205.75 hidden-scroll overflow-auto md:rounded-lg md:border md:border-gray-400 md:p-6">
      <!-- Title -->
      <div :class="false ? 'md:justify-between justify-center' : 'max-md:justify-center'" class="flex md:pb-2 md:border-b md:border-b-gray-400">
        <h4 class="text-gray-800 font-Dana-SemiBold md:text-xl text-base">آدرس‌ها</h4>
        <!-- IF HAS ADDRESS -->
        <span v-if="false" class="cursor-pointer flex items-center gap-x-1 max-md:hidden text-Primary">
          <svg class="size-4">
            <use href="#plus-circle"></use>
          </svg>
          <span class="font-Dana text-xs">افزودن آدرس جدید</span>
        </span>
      </div>
      <!-- IF HAS ADDRESS -->
      <div v-if="false" class="mt-6 md:mt-4 grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-3 max-md:px-2 max-md:pb-26">
        <AddressDetails />
        <AddressDetails />
        <AddressDetails />
        <!-- Add Address Button -->
        <button class="cursor-pointer mt-3 mx-auto md:hidden border border-Primary text-Primary font-Dana text-xs rounded-sm h-8 flex items-center justify-center px-7.5 hover:bg-Primary/10">افزودن آدرس جدید</button>
      </div>
      <!-- IF NO ADDRESS -->
      <div v-else class="relative md:grow-1 max-md:mt-6 max-md:border max-md:rounded-lg max-md:border-gray-400 h-64 flex items-center justify-center">
        <!-- Spider Vector -->
        <svg class="-z-1 absolute w-50 md:w-81.25 h-48.25 md:h-78.25">
          <use href="#spider-vector"></use>
        </svg>
        <!-- Content -->
        <div class="flex flex-col items-center gap-y-4 md:gap-y-8">
          <span class="md:font-Dana-Medium font-Dana text-gray-700 text-custom md:text-xl">شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!</span>
          <!-- Add Address Button -->
          <button class="cursor-pointer max-w-38 w-full md:max-w-69.5 h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary border border-Primary rounded-sm hover:bg-Primary/10">افزودن آدرس</button>
        </div>
      </div>
    </div>
  </template>
  