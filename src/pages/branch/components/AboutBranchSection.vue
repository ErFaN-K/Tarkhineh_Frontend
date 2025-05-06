<script setup lang="ts">
// Swiper Config
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import AppIcon from "@/components/ui/AppIcon.vue";
import BranchDetailsBox from "./BranchDetailsBox.vue";
</script>

<template>
  <section class="mb-6 md:mb-12 about-branch-section">
    <!-- Section Title -->
    <h2 class="section__title text-center mb-3 md:mb-4.5">شعبه اکباتان</h2>
    <!-- Branch Images ( Slider ) -->
    <div class="h-44 sm:h-84">
      <!-- Swiper -->
      <Swiper
        class="h-full"
        :modules="[Autoplay, Pagination, Navigation, EffectFade]"
        :pagination="{ clickable: true, el: '.pagination-button--swiper' }"
        :navigation="{
          prevEl: '.swiper-navigation--prev',
          nextEl: '.swiper-navigation--next',
        }"
        :grabCursor="true"
        effect="fade"
        :autoplay="{ delay: 5000 }"
        :loop="true"
      >
        <!-- Swiper Slide -->
        <SwiperSlide>
          <img
            src="/src/assets/images/branch/Branch-Image-2.png"
            alt="Branch Image"
            class="size-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/src/assets/images/branch/Branch-Image-2.png"
            alt="Branch Image"
            class="size-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/src/assets/images/branch/Branch-Image-2.png"
            alt="Branch Image"
            class="size-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/src/assets/images/branch/Branch-Image-2.png"
            alt="Branch Image"
            class="size-full object-cover"
          />
        </SwiperSlide>
        <!-- Slider Navigation -->
        <div
          class="flex items-center justify-center absolute left-0 bottom-0 top-0 w-12 md:w-34 bg-linear-to-r from-black/90 to-black/0 z-10"
        >
          <span class="swiper-navigation--next cursor-pointer">
            <AppIcon className="text-white size-6 md:size-12" iconName="chevron-left-mini"/>
          </span>
        </div>
        <div
          class="flex items-center justify-center absolute right-0 bottom-0 top-0 w-12 md:w-34 bg-linear-to-l from-black/90 to-black/0 z-10"
        >
          <span class="swiper-navigation--prev cursor-pointer">
            <AppIcon className="text-white size-6 md:size-12 rotate-180" iconName="chevron-left-mini"/>
          </span>
        </div>
      </Swiper>
    </div>
    <!-- Branch Details -->
    <div class="container">
      <BranchDetailsBox />
    </div>
  </section>
</template>
