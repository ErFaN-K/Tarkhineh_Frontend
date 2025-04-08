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
  <section class="mb-6 md:mb-12 special-offer-section">
    <div class="container">
      <!-- Section Title -->
      <h2 class="section__title relative z-99">پیشنهاد ویژه</h2>
      <!-- Food Card Container -->
      <div class="section__body">
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
    </div>
  </section>
</template>
