<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";

defineProps<{
  branchImage: string;
  branchName: string;
  branchAddress: string;
  branchPageLink: string;
}>()
</script>

<template>
  <!-- Branch Card ( This Component Is Only For Branch Section ) -->
  <div class="flex md:flex-col items-center border border-gray-400 hover:border-Primary rounded-lg md:rounded-sm overflow-hidden">
    <!-- Branch Card Image -->
    <router-link :to="{ name: 'BranchPage' }" class="shrink-0 max-md:w-36 h-20 w-full md:h-57.5">
      <img src="/src/assets/images/branch/Branch-Image.png" alt="Branch Image" class="size-full object-cover">
    </router-link>
    <!-- Branch Data -->
    <div class="size-full px-2 pt-2 pb-4 max-md:p-2 flex flex-col items-center max-md:justify-between md:gap-y-2">
      <!-- Branch Name -->
      <span class="text-sm md:text-xl text-gray-800 md:font-Morabba-Bold font-Morabba-Medium line-clamp-1">{{ branchName }}</span>
      <!-- Branch Address -->
      <span class="text-custom md:text-sm text-gray-700 font-Dana h-10 max-md:h-8 line-clamp-2 text-center">{{ branchAddress }}</span>
      <router-link :to="{ name: 'BranchPage' }" class="max-md:hidden h-8 px-6 border rounded-sm border-Primary flex items-center gap-x-1 font-Dana text-Primary text-xs">
        <span>صفحه شعبه</span>
        <AppIcon className="size-4" iconName="chevron-left-mini"/>
      </router-link>
    </div>
  </div>
</template>
