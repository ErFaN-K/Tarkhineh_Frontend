<script setup>
// Swiper Config
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Components
import FoodCard from "@/components/shared/VerticalFoodCard.vue";
</script>

<template>
  <section class="mb-6 md:mb-12 not-iranian-food-section">
    <div class="container">
      <!-- Section Title -->
      <h2 class="section__title relative z-99">غذاهای غیر ایرانی</h2>
      <!-- Food Card Container -->
      <div class="section__body md:mb-6 mb-3">
        <!-- Swiper -->
        <Swiper
          :modules="[Autoplay]"
          :autoplay="{ delay: 5000 }"
          :slides-per-view="2"
          :space-between="16"
          :breakpoints="{
            '640': { slidesPerView: 3, spaceBetween: 16 },
            '768': { slidesPerView: 2, spaceBetween: 24 },
            '1024': { slidesPerView: 3, spaceBetween: 24 },
            '1260': { slidesPerView: 4, spaceBetween: 24 },
          }"
        >
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- See All Menu Button -->
      <a
        href="#"
        class="h-8 md:h-10 px-4 md:px-2.5 flex items-center md:gap-x-2 gap-x-1 text-Primary border border-Primary rounded-sm mx-auto block w-max"
      >
        <svg class="size-4 md:size-6">
          <use href="#calender"></use>
        </svg>
        <span class="font-Morabba-Medium text-xs md:text-base"
          >مشاهده منوی کامل</span
        >
      </a>
    </div>
  </section>
</template>
