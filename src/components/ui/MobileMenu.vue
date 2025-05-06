<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
import { ref } from "vue";
import { usePublicStore } from "@/store/modules/publicStore.ts";

const publicStore = usePublicStore();

const activeDropDown = ref<null | string>(null);
const toggleSection = (dropDownElementName: string): void => {
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
        <AppIcon className="w-16.75 h-7.5" iconName="logo-type"/>
      </span>
      <span class="absolute top-4 left-4" @click="publicStore.closeHamburgerMenu()">
        <AppIcon className="size-6" iconName="x-mark"/>
      </span>
    </div>
    <!-- Body -->
    <div class="px-4 divide-y divide-gray-400 space-y-2 *:pb-2 *:text-gray-800">
      <router-link :to="{ name: 'HomePage' }" class="flex items-center gap-x-1">
        <AppIcon className="size-4" iconName="home"/>
        <span class="text-xs font-Dana">صفحه اصلی</span>
      </router-link>
      <div class="flex flex-col gap-y-2">
        <div
          :class="{
            'mobile-menu__link--active': activeDropDown === 'menu',
          }"
          class="flex items-center justify-between"
          @click="toggleSection('menu')"
        >
          <div class="flex items-center gap-x-1">
            <AppIcon className="size-4" iconName="home-modern"/>
            <span class="text-xs font-Dana">منو</span>
          </div>
          <span>
            <AppIcon className="size-4" iconName="chevron-down-mini"/>
          </span>
        </div>
        <!-- DropDown -->
        <div
          v-show="activeDropDown === 'menu'"
          class="pr-4 w-full *:text-gray-800 *:text-custom *:font-Dana *:block space-y-2"
        >
          <router-link :to="{ name: 'MenuPage' }">منوی تستی</router-link>
          <router-link :to="{ name: 'MenuPage' }">منوی تستی</router-link>
          <router-link :to="{ name: 'MenuPage' }">منوی تستی</router-link>
          <router-link :to="{ name: 'MenuPage' }">منوی تستی</router-link>
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
            <AppIcon className="size-4" iconName="home-modern"/>
            <span class="text-xs font-Dana">شعبه</span>
          </div>
          <span>
            <AppIcon className="size-4" iconName="chevron-down-mini"/>
          </span>
        </div>
        <!-- DropDown -->
        <div
          v-show="activeDropDown === 'branch'"
          class="pr-4 w-full *:text-gray-800 *:text-custom *:font-Dana *:block space-y-2"
        >
          <router-link :to="{ name: 'BranchPage' }">شعبه اکباتان</router-link>
          <router-link :to="{ name: 'BranchPage' }">شعبه چالوس</router-link>
          <router-link :to="{ name: 'BranchPage' }">شعبه شهرک غرب</router-link>
          <router-link :to="{ name: 'BranchPage' }">شعبه تستی</router-link>
        </div>
      </div>
      <router-link :to="{ name: 'AboutUsPage' }" class="flex items-center gap-x-1">
        <AppIcon className="size-4" iconName="about-us"/>
        <span class="text-xs font-Dana">درباره ما</span>
      </router-link>
      <router-link :to="{ name: 'ContactUsPage' }" class="flex items-center gap-x-1">
        <AppIcon className="size-4" iconName="phone"/>
        <span class="text-xs font-Dana">تماس باما</span>
      </router-link>
    </div>
  </div>
</template>
