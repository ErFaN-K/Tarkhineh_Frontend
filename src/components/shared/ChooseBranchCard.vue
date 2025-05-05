<script setup lang="ts">
interface Props {

}

defineProps<{
    branchImage: string;
    branchName: string;
    branchAddress: string;
    branchPageLink: string;
}>();
</script>


<template>
    <!-- Branch Card ( This Component Is Only For Choose Branch Modal ) -->
    <router-link :to="{ name: 'BranchPage' }" class="flex md:flex-col items-center border border-gray-400 hover:border-Primary rounded-lg md:rounded-sm overflow-hidden">
        <!-- Branch Card Image -->
        <div class="shrink-0 max-md:h-20 max-md:w-28.5 md:w-43.75 w-full h-45">
            <img :src="branchImage" alt="Branch Image" class="size-full object-cover">
        </div>
        <!-- Branch Data -->
        <div class="h-full px-1 md:px-2 py-2.5 flex items-center justify-between flex-col md:gap-y-2">
            <!-- Branch Name -->
            <span class="md:text-base text-xs md:font-Morabba-Bold font-Morabba-Medium text-gray-800 line-clamp-1">{{ branchName }}</span>
            <!-- Branch Address -->
            <span class="md:text-xs text-custom text-gray-700 font-Dana h-8 line-clamp-2 text-center">{{ branchAddress }}</span>
        </div>
    </router-link>
</template>