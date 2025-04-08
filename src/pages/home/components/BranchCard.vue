<script setup>
defineProps({
  branchImage: {
    type: String,
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
  branchAddress: {
    type: String,
    required: true,
  },
  branchPageLink: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!-- Branch Card ( This Component Is Only For Branch Section ) -->
  <div class="flex md:flex-col items-center border border-gray-400 hover:border-Primary rounded-lg md:rounded-sm overflow-hidden">
    <!-- Branch Card Image -->
    <a :href="branchPageLink" class="shrink-0 max-md:w-36 h-20 w-full md:h-57.5">
      <img src="/src/assets/images/branch/Branch-Image.png" alt="Branch Image" class="size-full object-cover">
    </a>
    <!-- Branch Data -->
    <div class="size-full px-2 pt-2 pb-4 max-md:p-2 flex flex-col items-center max-md:justify-between md:gap-y-2">
      <!-- Branch Name -->
      <span class="text-sm md:text-xl text-gray-800 md:font-Morabba-Bold font-Morabba-Medium line-clamp-1">{{ branchName }}</span>
      <!-- Branch Address -->
      <span class="text-custom md:text-sm text-gray-700 font-Dana h-10 max-md:h-8 line-clamp-2 text-center">{{ branchAddress }}</span>
      <a :href="branchPageLink" class="max-md:hidden h-8 px-6 border rounded-sm border-Primary flex items-center gap-x-1 font-Dana text-Primary text-xs">
        <span>صفحه شعبه</span>
        <svg class="size-4">
          <use href="#chevron-left-mini"></use>
        </svg>
      </a>
    </div>
  </div>
</template>
