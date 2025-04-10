<script setup>
// Swiper Config
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, FreeMode, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// Import Vue Module
import { ref } from "vue";

// Code
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <div class="is-hidden fixed inset-0 m-auto z-100 px-5 flex items-center justify-center">
    <div
    class="shadow-xl md:max-w-202 max-w-80 h-max w-full bg-white text-gray-800 rounded-lg"
  >
    <!-- Card Header -->
    <div class="h-11.25 md:h-22 flex items-center justify-center relative">
      <!-- Card Title -->
      <h2 class="font-Morabba-Bold text-xs md:text-xl">اطلاعات محصول</h2>
      <!-- Close Icon -->
      <span class="absolute cursor-pointer md:top-5.5 top-2.5 md:left-6 left-4">
        <svg class="size-6 md:size-10 text-gray-700">
          <use href="#x-mark"></use>
        </svg>
      </span>
    </div>
    <!-- Card Main -->
    <div class="md:h-110.25 h-88 relative">
      <!-- Main Slider -->
      <Swiper
        class="h-full"
        :modules="[Autoplay, EffectFade, Thumbs]"
        effect="fade"
        :autoplay="{ delay: 5000 }"
        :loop="true"
        :thumbs="{ swiper: thumbsSwiper }"
      >
        <!-- Food Image -->
        <SwiperSlide>
          <img
            class="size-full object-cover"
            src="/src/assets/images/food/Food-Image-2.png"
            alt="Food Image"
          />
        </SwiperSlide>
        <!-- Food Image -->
        <SwiperSlide>
          <img
            class="size-full object-cover"
            src="/src/assets/images/food/Food-Image-2.png"
            alt="Food Image"
          />
        </SwiperSlide>
        <!-- Food Image -->
        <SwiperSlide>
          <img
            class="size-full object-cover"
            src="/src/assets/images/food/Food-Image-2.png"
            alt="Food Image"
          />
        </SwiperSlide>
        <!-- Food Image -->
        <SwiperSlide>
          <img
            class="size-full object-cover"
            src="/src/assets/images/food/Food-Image-2.png"
            alt="Food Image"
          />
        </SwiperSlide>
        <!-- Food Image -->
        <SwiperSlide>
          <img
            class="size-full object-cover"
            src="/src/assets/images/food/Food-Image-2.png"
            alt="Food Image"
          />
        </SwiperSlide>
        <!-- Food Image -->
        <SwiperSlide>
          <img
            class="size-full object-cover"
            src="/src/assets/images/food/Food-Image-2.png"
            alt="Food Image"
          />
        </SwiperSlide>
        <!-- Food Image -->
        <SwiperSlide>
          <img
            class="size-full object-cover"
            src="/src/assets/images/food/Food-Image-2.png"
            alt="Food Image"
          />
        </SwiperSlide>
        <!-- Food Image -->
        <SwiperSlide>
          <img
            class="size-full object-cover"
            src="/src/assets/images/food/Food-Image-2.png"
            alt="Food Image"
          />
        </SwiperSlide>
      </Swiper>
      <!-- Thumbnails Slider -->
      <div class="absolute w-3/4 mx-auto left-0 right-0 bottom-5 md:bottom-6">
        <!-- Slider -->
        <Swiper
          :modules="[FreeMode]"
          :slidesPerView="2"
          :spaceBetween="16"
          :freeMode="true"
          :onSwiper="setThumbsSwiper"
          :breakpoints="{
            '768': { slidesPerView: 4, spaceBetween: 32 },
          }"
        >
          <!-- Thumbnail -->
          <SwiperSlide
            class="transition-all border-2 border-white/30 rounded-sm overflow-hidden"
          >
            <img
              src="/src/assets/images/food/Food-Image-2.png"
              class="size-full object-cover"
              alt="Thumbnail Image"
            />
          </SwiperSlide>
          <!-- Thumbnail -->
          <SwiperSlide
            class="transition-all border-2 border-white/30 rounded-sm overflow-hidden"
          >
            <img
              src="/src/assets/images/food/Food-Image-2.png"
              class="size-full object-cover"
              alt="Thumbnail Image"
            />
          </SwiperSlide>
          <!-- Thumbnail -->
          <SwiperSlide
            class="transition-all border-2 border-white/30 rounded-sm overflow-hidden"
          >
            <img
              src="/src/assets/images/food/Food-Image-2.png"
              class="size-full object-cover"
              alt="Thumbnail Image"
            />
          </SwiperSlide>
          <!-- Thumbnail -->
          <SwiperSlide
            class="transition-all border-2 border-white/30 rounded-sm overflow-hidden"
          >
            <img
              src="/src/assets/images/food/Food-Image-2.png"
              class="size-full object-cover"
              alt="Thumbnail Image"
            />
          </SwiperSlide>
          <!-- Thumbnail -->
          <SwiperSlide
            class="transition-all border-2 border-white/30 rounded-sm overflow-hidden"
          >
            <img
              src="/src/assets/images/food/Food-Image-2.png"
              class="size-full object-cover"
              alt="Thumbnail Image"
            />
          </SwiperSlide>
          <!-- Thumbnail -->
          <SwiperSlide
            class="transition-all border-2 border-white/30 rounded-sm overflow-hidden"
          >
            <img
              src="/src/assets/images/food/Food-Image-2.png"
              class="size-full object-cover"
              alt="Thumbnail Image"
            />
          </SwiperSlide>
          <!-- Thumbnail -->
          <SwiperSlide
            class="transition-all border-2 border-white/30 rounded-sm overflow-hidden"
          >
            <img
              src="/src/assets/images/food/Food-Image-2.png"
              class="size-full object-cover"
              alt="Thumbnail Image"
            />
          </SwiperSlide>
          <!-- Thumbnail -->
          <SwiperSlide
            class="transition-all border-2 border-white/30 rounded-sm overflow-hidden"
          >
            <img
              src="/src/assets/images/food/Food-Image-2.png"
              class="size-full object-cover"
              alt="Thumbnail Image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <!-- Card Footer -->
    <div class="md:p-4 p-2">
      <!-- Food Title & Rate -->
      <div class="flex items-center justify-between mb-1.5 md:mb-2">
        <!-- Title -->
        <h2 class="font-Dana md:font-Dana-Medium text-xs md:text-lg">
          پاستا سبزیجات
        </h2>
        <!-- Rate -->
        <div class="flex">
          <svg class="size-4 md:size-6 text-Warning-Light">
            <use href="#star"></use>
          </svg>
          <svg class="size-4 md:size-6 text-Warning-Light">
            <use href="#star"></use>
          </svg>
          <svg class="size-4 md:size-6 text-Warning-Light">
            <use href="#star"></use>
          </svg>
          <svg class="size-4 md:size-6 text-Warning-Light">
            <use href="#star"></use>
          </svg>
          <svg class="size-4 md:size-6 text-Warning-Light">
            <use href="#star"></use>
          </svg>
        </div>
      </div>
      <!-- Food Recipe & Comment Count -->
      <div
        class="flex items-center justify-between text-custom md:text-sm gap-x-2 md:gap-x-3"
      >
        <!-- Food Recipe -->
        <p class="font-Dana line-clamp-1 md:line-clamp-2 max-md:pr-2">
          پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده، پاستا، قارچ، گوجه،
          کدوی خوردشده، پیاز
        </p>
        <!-- Comment Count -->
        <span class="shrink-0 font-Dana text-gray-700">(۶۲ نظر)</span>
      </div>
    </div>
  </div>
  </div>
</template>
