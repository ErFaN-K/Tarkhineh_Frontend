<script setup>
import { usePublicStore } from '../stores/publicStore';
const publicStore = usePublicStore()
</script>

<template>
  <div class="fixed top-0 bottom-0 z-30 h-svh bg-white max-w-64 w-full transition-all" :class="{'hamburger-menu--show': publicStore.isShowHamburgerMenu, 'hamburger-menu--close': !publicStore.isShowHamburgerMenu}">
    <!-- Top Frame -->
    <div class="bg-burger hamburger-menu__img px-4 py-8 mb-2 relative text-white">
        <!-- Logo Type -->
        <span>
            <svg class="w-16.75 h-7.5">
                <use href="#logo-type"></use>
            </svg>
        </span>
        <!-- Close Icon -->
        <span @click="publicStore.closeHamburgerMenu()">
            <svg class="size-6 absolute top-4 left-4">
                <use href="#x-mark"></use>
            </svg>
        </span>
    </div>
    <!-- Body -->
    <div class="px-4 divide-y divide-gray-400 space-y-2 *:pb-2 *:text-gray-800">
        <div class="flex items-center gap-x-1">
            <svg class="size-4">
                <use href="#home"></use>
            </svg>
            <span class="text-xs font-Dana">صفحه اصلی</span>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-x-1">
                <svg class="size-4">
                    <use href="#calender"></use>
                </svg>
                <span class="text-xs font-Dana">منو</span>
            </div>
            <span>
                <svg class="size-4">
                    <use href="#chevron-down-mini"></use>
                </svg>
            </span>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-x-1">
                <svg class="size-4">
                    <use href="#home-modern"></use>
                </svg>
                <span class="text-xs font-Dana">شعبه</span>
            </div>
            <span>
                <svg class="size-4">
                    <use href="#chevron-down-mini"></use>
                </svg>
            </span>
        </div>
        <div class="flex items-center gap-x-1">
            <svg class="size-4">
                <use href="#about-us"></use>
            </svg>
            <span class="text-xs font-Dana">درباره ما</span>
        </div>
        <div class="flex items-center gap-x-1">
            <svg class="size-4">
                <use href="#phone"></use>
            </svg>
            <span class="text-xs font-Dana">تماس باما</span>
        </div>
    </div>
  </div>
</template>
