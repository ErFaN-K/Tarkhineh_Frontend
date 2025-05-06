<script setup lang="ts">
import AppIcon from './AppIcon.vue';
import { ref } from 'vue';

const isShowNavigationMenu = ref<Boolean>(false)
</script>

<template>
    <div class="relative lg:order-last">
        <button @click="isShowNavigationMenu = !isShowNavigationMenu" class="relative flex items-center justify-center rounded-sm cursor-pointer bg-Tint-1 md:h-8 h-6 lg:h-10 md:px-2 px-1 text-Primary">
            <!-- Icon -->
            <AppIcon className="size-4 lg:size-6 md:size-5" iconName="user"/>
            <AppIcon  :className="['size-4 md:size-4 lg:size-6',isShowNavigationMenu ? 'rotate-180' : 'rotate-0']"  iconName="chevron-down-mini"/>
        </button>
        <!-- Navigation -->
        <div :class="isShowNavigationMenu ? 'is-show' : 'is-hidden'" class="absolute md:w-36 w-30 z-40 top-[calc(100%+8px)] left-0 px-2 bg-white shadow-drop-down rounded-sm divide-y divide-gray-300">
            <router-link :to="{ name: 'Dashboard|Profile' }" class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <AppIcon className="size-4 md:size-5" iconName="user"/>
                <span>پروفایل</span>
            </router-link>
            <router-link :to="{ name: 'Dashboard|Orders' }" class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <AppIcon className="size-4 md:size-5" iconName="order"/>
                <span>پیگیری سفارش</span>
            </router-link>
            <router-link :to="{ name: 'Dashboard|Wishlist' }" class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <AppIcon className="size-4 md:size-5" iconName="heart"/>
                <span>علاقه‌مندی‌ها</span>
            </router-link>
            <router-link :to="{ name: 'Dashboard|Address' }" class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <AppIcon className="size-4 md:size-5" iconName="location"/>
                <span>آدرس‌های من</span>
            </router-link>
            <button class="h-8 md:h-10 flex items-center gap-x-1 text-gray-800 font-Dana md:text-sm text-custom">
                <AppIcon className="size-4 md:size-5 rotate-180" iconName="exit"/>
                <span>خروج از حساب</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
button + div a.router-link-active {
    color: var(--color-Primary);
}
</style>