<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";
</script>

<template>
    <div class="md:col-span-12 col-span-4 flex items-center justify-center h-93.75 md:h-105.5 border border-gray-400 rounded-lg">
        <!-- Spider Vector -->
        <AppIcon className="-z-1 absolute w-50 md:w-81.25 h-48.25 md:h-78.25" iconName="spider-vector"/> 
        <!-- Content -->
        <div class="flex flex-col items-center gap-y-4 md:gap-y-8">
          <span class="md:font-Dana-Medium font-Dana text-gray-700 text-xs md:text-xl">شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</span>
          <!-- Redirect To Menu Page -->
          <router-link :to="{ name: 'MenuPage' }" class="cursor-pointer w-38 md:w-46 h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary border border-Primary rounded-sm hover:bg-Primary/10">منوی رستوران</router-link>
        </div>
    </div>
</template>