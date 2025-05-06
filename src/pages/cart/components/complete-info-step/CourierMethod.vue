<script setup lang="ts">
import AddressDetails from '@/components/shared/AddressDetails.vue';
import AppIcon from "@/components/ui/AppIcon.vue";
</script>

<template>
    <!-- Courier Method -->
    <div class="flex flex-col p-4 md:px-6 rounded-lg border border-gray-400 text-gray-800">
        <!-- Courier Method Header -->
        <div class="flex items-center justify-between border-b border-b-gray-400 pb-2">
            <div class="flex items-center gap-x-1 md:text-base text-sm font-Dana">
                <AppIcon className="size-4 md:size-6" iconName="location"/>
                <span>آدرس‌ها</span>
            </div>
            <!-- Add Address Button -->
            <span class="cursor-pointer flex items-center gap-x-1 text-Primary">
                <AppIcon className="size-4" iconName="plus-circle"/>
                <span class="font-Dana text-xs">افزودن آدرس</span>
            </span>
        </div>
        <!-- Address Container -->
        <div class="h-23.5 md:h-28.75 md:pl-2 pl-1 overflow-auto custom-scroll  mt-4 md:mt-3 grid md:grid-cols-2 grid-cols-1 md:gap-4 max-md:gap-2">
            <AddressDetails />
            <AddressDetails />
            <AddressDetails />
        </div>
    </div>
</template>