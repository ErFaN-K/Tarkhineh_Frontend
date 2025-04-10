<script setup>
import { ref } from "vue";
import { usePublicStore } from "@/store/modules/publicStore.js";

const publicStore = usePublicStore();

const activeDropDown = ref(null);
const toggleSection = (dropDownElementName) => {
  activeDropDown.value = activeDropDown.value === dropDownElementName ? null : dropDownElementName;
};
</script>

<template>
  <div
    class="mobile-menu fixed top-0 bottom-0 z-101 h-svh bg-white max-w-64 w-full"
    :class="{
      'is-open': publicStore.isShowHamburgerMenu,
      'is-closed': !publicStore.isShowHamburgerMenu,
    }"
  >
    <!-- Top Frame -->
    <div class="background-config mobile-menu__top-frame--img px-4 py-8 mb-2 relative text-white">
      <span>
        <svg class="w-16.75 h-7.5">
          <use href="#logo-type"></use>
        </svg>
      </span>
      <span class="absolute top-4 left-4" @click="publicStore.closeHamburgerMenu()">
        <svg class="size-6">
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
      <div class="flex flex-col gap-y-2">
        <div
          :class="{
            'mobile-menu__link--active': activeDropDown === 'menu',
          }"
          class="flex items-center justify-between"
          @click="toggleSection('menu')"
        >
          <div class="flex items-center gap-x-1">
            <svg class="size-4">
              <use href="#home-modern"></use>
            </svg>
            <span class="text-xs font-Dana">منو</span>
          </div>
          <span>
            <svg class="size-4">
              <use href="#chevron-down-mini"></use>
            </svg>
          </span>
        </div>
        <!-- DropDown -->
        <div
          v-show="activeDropDown === 'menu'"
          class="pr-4 w-full *:text-gray-800 *:text-custom *:font-Dana *:block space-y-2"
        >
          <a href="#">منوی تستی</a>
          <a href="#">منوی تستی</a>
          <a href="#">منوی تستی</a>
          <a href="#">منوی تستی</a>
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <div
          :class="{
            'mobile-menu__link--active': activeDropDown === 'branch',
          }"
          class="flex items-center justify-between"
          @click="toggleSection('branch')"
        >
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
        <!-- DropDown -->
        <div
          v-show="activeDropDown === 'branch'"
          class="pr-4 w-full *:text-gray-800 *:text-custom *:font-Dana *:block space-y-2"
        >
          <a href="#">شعبه اکباتان</a>
          <a href="#">شعبه چالوس</a>
          <a href="#">شعبه شهرک غرب</a>
          <a href="#">شعبه تستی</a>
        </div>
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
