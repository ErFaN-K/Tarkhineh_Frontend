<script setup>
import SearchInput from '@/components/shared/SearchInput.vue'
import FoodCard from '@/components/shared/VerticalFoodCard.vue'
</script>

<template>
    <section class="result-section md:mt-12 mt-8 md:mb-18 mb-10">
        <div class="container">
            <!-- if Food is Found -->
            <div v-if="true" class="flex flex-col md:gap-y-12 gap-y-5 text-gray-800">
                <!-- Title & Search Input -->
                <div class="flex flex-col items-center md:gap-y-6 gap-y-4">
                    <!-- Title -->
                    <span class="font-Dana-SemiBold md:text-2xl text-base">نتایج جست و جو برای : <span class="text-Primary">پاستا</span></span>
                    <!-- Search Input -->
                    <div class="max-w-100 w-full h-8 md:h-10 px-4 flex items-center justify-between border border-gray-400 md:rounded-lg rounded-sm">
                        <SearchInput /> 
                    </div>
                </div>
                <!-- Food Card Container -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </div>
            </div>
            <!-- If No Food Is Found -->
            <div v-else class="flex flex-col md:gap-y-16 gap-y-10 text-gray-800">
                <!-- Title & Search Input -->
                <div class="flex flex-col items-center md:gap-y-6 gap-y-4">
                    <!-- Title -->
                    <span class="font-Dana-SemiBold md:text-2xl text-base">موردی با این مشخصات پیدا نکردیم!</span>
                    <!-- Search Input -->
                    <div class="max-w-100 w-full h-8 md:h-10 px-4 flex items-center justify-between border border-gray-400 md:rounded-lg rounded-sm">
                        <SearchInput /> 
                    </div>
                </div>  
                <!-- 404 Not Found -->
                <div class="flex flex-col md:gap-y-4 gap-y-2">
                    <svg class="md:h-100 h-50">
                        <use href="#not-found"></use>
                    </svg>
                    <span class="text-Primary md:text-3xl text-2xl font-Dana-SemiBold text-center">404 | چیزی که دنبالش بودی، اینجا نیست.</span>
                </div>
            </div>
        </div>
    </section>
</template>