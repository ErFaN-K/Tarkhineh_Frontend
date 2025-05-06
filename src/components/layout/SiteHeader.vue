<script setup lang="ts">
import { usePublicStore } from "@/store/modules/publicStore.ts";
import NavigationMenu from "../ui/NavigationMenu.vue";

const publicStore = usePublicStore();

import AppIcon from '../ui/AppIcon.vue';
</script>

<template>
  <header>
    <div class="bg-white shadow-sm">
      <div class="container">
        <div class="flex items-center justify-between py-4 md:py-9">
          <!-- Hamburger Icon -->
          <div class="block md:hidden" @click="publicStore.showHamburgerMenu()">
            <AppIcon className="size-6 text-Primary" iconName="bars-3"/>
          </div>
          <!-- Trakhineh Logo -->
          <span>
            <AppIcon className="w-25.5 md:w-38.75 h-8 md:h-12.75 text-Primary" iconName="logo-type"/>
          </span>
          <!-- Nav Links -->
          <nav class="hidden md:block">
            <ul
              class="flex *:flex items-center *:items-center gap-x-3 lg:gap-x-6 *:h-8 *:font-Dana *:text-gray-700 text-base lg:*:text-xl"
            >
                <router-link activeClass="nav__link--active" :to="{ name: 'HomePage' }">صفحه اصلی</router-link>
              <li class="relative cursor-pointer group gap-x-1">
                <span>شعبه</span>
                <AppIcon className="size-4 delay-100 group-hover:rotate-180" iconName="chevron-down-mini"/>
                <!-- Drop Down -->
                <div
                  class="group-hover:visible invisible top-[calc(100%+10px)] left-0 z-10 absolute *:flex *:items-center bg-white opacity-0 group-hover:opacity-100 shadow-drop-down px-2 rounded-sm divide-y divide-gray-300 w-36 *:w-full *:h-10 *:text-gray-800 *:text-custom lg:*:text-sm delay-100"
                >
                  <router-link activeClass="nav__link--active" :to="{ name: 'BranchPage' }">اکباتان</router-link>
                  <router-link activeClass="nav__link--active" :to="{ name: 'BranchPage' }">چالوس</router-link>
                  <router-link activeClass="nav__link--active" :to="{ name: 'BranchPage' }">اقدسیه</router-link>
                  <router-link activeClass="nav__link--active" :to="{ name: 'BranchPage' }">ونک</router-link>
                </div>
              </li>
              <li class="relative cursor-pointer delay-100 group gap-x-1">
                <span>منو</span>
                <AppIcon className="size-4 group-hover:rotate-180" iconName="chevron-down-mini"/>
                <!-- Drop Down -->
                <div
                  class="group-hover:visible invisible top-[calc(100%+10px)] right-0 z-10 absolute *:flex *:items-center bg-white opacity-0 group-hover:opacity-100 shadow-drop-down px-2 rounded-sm divide-y divide-gray-300 w-36 *:w-full *:h-10 *:text-gray-800 *:text-custom lg:*:text-sm delay-100"
                >
                  <router-link activeClass="nav__link--active" :to="{ name: 'MenuPage' }">غذای اصلی</router-link>
                  <router-link activeClass="nav__link--active" :to="{ name: 'MenuPage' }">پیش غذا</router-link>
                  <router-link activeClass="nav__link--active" :to="{ name: 'MenuPage' }">دسر</router-link>
                  <router-link activeClass="nav__link--active" :to="{ name: 'MenuPage' }">نوشیدنی</router-link>
                </div>
              </li>
                <router-link activeClass="nav__link--active" :to="{ name: 'DealerAgreementPage' }">اعطای نمایندگی</router-link>
                <router-link activeClass="nav__link--active" :to="{ name: 'AboutUsPage' }">درباره ما</router-link>
                <router-link activeClass="nav__link--active" :to="{ name: 'ContactUsPage' }">تماس با ما</router-link>
            </ul>
          </nav>
          <!-- Buttons -->
          <div class="flex items-center gap-x-1 md:gap-x-2">
            <!-- Search -->
            <router-link activeClass="header__button--active" :to="{ name: 'SearchPage' }"
              class="flex items-center justify-center rounded-sm cursor-pointer max-lg:hidden bg-Tint-1 size-10 text-Primary"
            >
              <AppIcon className="size-4 md:size-5 lg:size-6" iconName="magnifying-glass"/>
            </router-link>
            <!-- LOGIN -->
            <NavigationMenu v-if="true"/>
            <!-- Profile -->
            <button v-else class="flex items-center justify-center rounded-sm cursor-pointer lg:order-last bg-Tint-1 size-6 md:size-8 lg:size-10 text-Primary">
              <svg class="size-4 md:size-5 lg:size-6">
                <use href="#user"></use>
              </svg>
              <AppIcon className="size-4 md:size-5 lg:size-6" iconName="user"/>
            </button>
            <!-- Cart -->
            <router-link activeClass="header__button--active" :to="{ name: 'CartPage' }"
              class="flex items-center justify-center rounded-sm cursor-pointer max-lg:order-first bg-Tint-1 size-6 md:size-8 lg:size-10 text-Primary"
            >
              <AppIcon className="size-4 md:size-5 lg:size-6" iconName="shopping-cart"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
