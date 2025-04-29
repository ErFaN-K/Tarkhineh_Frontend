<script setup>
import { ref } from 'vue';

const isShowNavigationMenu = ref(false)
</script>

<template>
    <div class="relative lg:order-last">
        <button @click="isShowNavigationMenu = !isShowNavigationMenu" class="relative flex items-center justify-center rounded-sm cursor-pointer bg-Tint-1 md:h-10 h-6 md:px-2 px-1 text-Primary">
            <!-- Icon -->
            <svg class="size-4 md:size-6">
                <use href="#user"></use>
            </svg>
            <svg class="size-4 md:size-6" :class="isShowNavigationMenu ? 'rotate-180' : 'rotate-0'">
                <use href="#chevron-down-mini"></use>
            </svg>
        </button>
        <!-- Navigation -->
        <div :class="isShowNavigationMenu ? 'is-show' : 'is-hidden'" class="absolute md:w-36 w-30 z-40 top-[calc(100%+8px)] left-0 px-2 bg-white shadow-drop-down rounded-sm divide-y divide-gray-300">
            <router-link :to="{ name: 'HomePage' }" class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <svg class="size-4 md:size-5">
                    <use href="#user"></use>
                </svg>
                <span>پروفایل</span>
            </router-link>
            <router-link :to="{ name: 'HomePage' }" class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <svg class="size-4 md:size-5">
                    <use href="#order"></use>
                </svg>
                <span>پیگیری سفارش</span>
            </router-link>
            <router-link :to="{ name: 'HomePage' }" class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <svg class="size-4 md:size-5">
                    <use href="#heart"></use>
                </svg>
                <span>علاقه‌مندی‌ها</span>
            </router-link>
            <router-link :to="{ name: 'HomePage' }" class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <svg class="size-4 md:size-5">
                    <use href="#location"></use>
                </svg>
                <span>آدرس‌های من</span>
            </router-link>
            <button class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <svg class="size-4 md:size-5 rotate-180">
                    <use href="#exit"></use>
                </svg>
                <span>خروج از حساب</span>
            </button>
        </div>
    </div>
</template>