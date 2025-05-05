<script setup lang="ts">
import RestaurantAttributeBox from './RestaurantAttributeBox.vue'
</script>

<template>
    <section class="restaurant-attribute-section">
        <div class="bg-gray-300">
            <div class="container">
                <div class="flex items-center justify-between max-md:gap-x-4 md:py-4 py-3">
                    <RestaurantAttributeBox
                      iconName="user"
                      attribute="پرسنلی مجرب و حرفه‌ای"
                    />
                    <!-- Line -->
                    <div class="max-md:hidden w-px h-26 bg-gray-400"></div> 
                    <RestaurantAttributeBox
                      iconName="chart"
                      attribute="کیفیت بالای غذاها"
                    />
                    <!-- Line -->
                    <div class="max-md:hidden w-px h-26 bg-gray-400"></div> 
                    <RestaurantAttributeBox
                      iconName="home"
                      attribute="محیطی دلنشین و آرام"
                    />
                    <!-- Line -->
                    <div class="max-md:hidden w-px h-26 bg-gray-400"></div> 
                    <RestaurantAttributeBox 
                    iconName="calender" attribute="منوی متنوع" 
                    />
                </div>
            </div>
        </div>
    </section>
</template>