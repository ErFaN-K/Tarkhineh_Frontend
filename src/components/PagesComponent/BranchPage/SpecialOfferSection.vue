<script setup>
    // Swiper Config
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import 'swiper/css/pagination';

    // Component
    import FoodCard from './FoodCard.vue';
</script>

<template>
    <section class="mb-6 md:mb-12 specia-offer-section overflow-x-hidden relative">
        <div class="container">
            <!-- Section Title -->
            <h2 class="section__title relative z-99">پیشنهاد ویژه</h2>
            <!-- Food Card Container -->
            <div class="mt-3 md:mt-6">
                <!-- Swiper -->
                <Swiper class="!overflow-visible" :modules="[Autoplay]" :autoplay="{ delay: 5000 }" :slides-per-view="2" :space-between="16" :breakpoints="{ '640': { slidesPerView: 3, spaceBetween: 16 }, '768': { slidesPerView: 2, spaceBetween: 24 }, '1024': { slidesPerView: 3, spaceBetween: 24 }, '1260': { slidesPerView: 4, spaceBetween: 24 } }">
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
            <!-- Shape -->
            <div class="h-full w-100 z-59 max-lg:hidden bg-linear-to-r from-white to-tranparent absolute left-0 top-0 botom-0 my-auto"></div>
            <div class="h-full w-100 z-59 max-lg:hidden bg-linear-to-l from-white to-transparent absolute right-0 top-0 botom-0 my-auto"></div>
        </div>
    </section>
</template>
