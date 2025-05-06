<!-- Search Box ( For Desktop ) -->
<script setup lang="ts">
import AppIcon from '../ui/AppIcon.vue';
import SearchInput from '@/components/shared/SearchInput.vue'
</script>

<template>
    <div class="is-hidden fixed inset-0 m-auto z-100 px-5 flex items-center justify-center">
        <div class="h-max max-w-150 w-full bg-white rounded-lg overflow-hidden shadow-xl text-gray-800">
        <!-- Modal Header -->
        <div class="relative flex items-center justify-center py-6 bg-gray-300">
            <!-- Close Icon -->
            <span class="cursor-pointer absolute top-5 left-5">
                <AppIcon className="size-10 text-gray-700" iconName="x-mark"/>
            </span>
            <!-- Modal Title -->
            <h2 class="font-Morabba-Bold text-xl">جستجو</h2>
        </div>
        <!-- Modal Main -->
        <div class="w-full pt-10 pb-12 px-4 items-center flex flex-col gap-y-3">
            <!-- Search Title -->
            <span class="text-base text-center font-Dana">لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.</span>
            <!-- Search Input -->
            <div class="max-w-102.5 w-full h-10 px-4 flex items-center justify-between border border-gray-400 rounded-lg">
                <SearchInput />
            </div>
        </div>
    </div>
    </div>
</template>