<script setup>
// Swiper Config
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Component
import UserComment from "./UserComment.vue";
</script>

<template>
    <section class="mb-4 md:mb-12 user-comments-section">
        <div class="container">
            <!-- Section Title -->
            <h2 class="section__title text-center">نظرات کاربران</h2>
            <!-- User Comments Container -->
            <div class="section__body">
                <Swiper  
                :modules="[Autoplay, Pagination]"
                :pagination="{ clickable: true, el: '.pagination-button--swiper' }"
                :grabCursor="true"
                :autoplay="{ delay: 5000 }"
                :loop="true"
                :slidesPerView="1"
                :spaceBetween="16"
                :breakpoints="{ '1024': { slidesPerView: 2, spaceBetween: 24 } }"
                >
                    <SwiperSlide>
                        <UserComment />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserComment />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserComment />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserComment />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>