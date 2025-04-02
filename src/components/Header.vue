<script setup>
import { usePublicStore } from "../stores/publicStore";
const publicStore = usePublicStore();
</script>

<template>
  <header class="header">
    <div class="bg-white">
      <div class="container">
      <div class="flex items-center justify-between py-4 md:py-9">
        <!-- Hamburger Icon -->
        <div class="block md:hidden" @click="publicStore.showHamburgerMenu()">
          <svg class="size-6 text-Primary">
            <use href="#bars-3"></use>
          </svg>
        </div>
        <!-- Logo -->
        <span>
          <svg class="w-25.5 md:w-38.75 h-8 md:h-12.75 text-Primary">
            <use href="#logo-type"></use>
          </svg>
        </span>
        <!-- Nav Links -->
        <nav class="hidden md:block">
          <ul
            class="flex *:flex items-center *:items-center gap-x-3 lg:gap-x-6 *:h-8 *:font-Dana *:text-gray-700 text-base lg:*:text-xl"
          >
            <li class="nav__active--link">
              <a href="#">صفحه اصلی</a>
            </li>
            <li class="relative cursor-pointer group gap-x-1">
              <span>شعبه</span>
              <svg
                class="size-4 transition-all delay-100 group-hover:rotate-180"
              >
                <use href="#chevron-down-mini"></use>
              </svg>
              <!-- Drop Down -->
              <div
                class="group-hover:visible invisible top-[calc(100%+10px)] left-0 z-10 absolute *:flex *:items-center bg-white opacity-0 group-hover:opacity-100 shadow-drop-down px-2 rounded-sm divide-y divide-gray-300 w-36 *:w-full *:h-10 *:text-gray-800 *:text-custom lg:*:text-sm transition-all delay-100"
              >
                <a href="#">اکباتان</a>
                <a href="#">چالوس</a>
                <a href="#">اقدسیه</a>
                <a href="#">ونک</a>
              </div>
            </li>
            <li class="relative cursor-pointer delay-100 group gap-x-1">
              <span>منو</span>
              <svg class="size-4 transition-all group-hover:rotate-180">
                <use href="#chevron-down-mini"></use>
              </svg>
              <!-- Drop Down -->
              <div
                class="group-hover:visible invisible top-[calc(100%+10px)] right-0 z-10 absolute *:flex *:items-center bg-white opacity-0 group-hover:opacity-100 shadow-drop-down px-2 rounded-sm divide-y divide-gray-300 w-36 *:w-full *:h-10 *:text-gray-800 *:text-custom lg:*:text-sm transition-all delay-100"
              >
                <a href="#">غذای اصلی</a>
                <a href="#">پیش غذا</a>
                <a href="#">دسر</a>
                <a href="#">نوشیدنی</a>
              </div>
            </li>
            <li>
              <a href="#">اعطای نمایندگی</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </nav>
        <!-- Buttons -->
        <div class="flex items-center gap-x-1 md:gap-x-2">
          <!-- Profile -->
          <button
            class="flex items-center justify-center rounded-sm cursor-pointer max-lg:hidden bg-Tint-1 size-10 text-Primary"
          >
            <svg class="size-4 md:size-5 lg:size-6">
              <use href="#magnifying-glass"></use>
            </svg>
          </button>
          <button
            class="flex items-center justify-center rounded-sm cursor-pointer lg:order-last bg-Tint-1 size-6 md:size-8 lg:size-10 text-Primary"
          >
            <svg class="size-4 md:size-5 lg:size-6">
              <use href="#user"></use>
            </svg>
          </button>
          <button
            class="flex items-center justify-center rounded-sm cursor-pointer max-lg:order-first bg-Tint-1 size-6 md:size-8 lg:size-10 text-Primary"
          >
            <svg class="size-4 md:size-5 lg:size-6">
              <use href="#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </div>
      </div>
    </div>
  </header>
</template>
