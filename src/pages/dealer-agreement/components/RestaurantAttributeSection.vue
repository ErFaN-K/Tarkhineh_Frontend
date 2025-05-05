<script setup lang="ts">
import RestaurantAttributeBox from './RestaurantAttributeBox.vue'
</script>

<template>
    <section class="mb-6 md:mb-12 restaurant-attribute-section">
        <div class="container">
            <div class="flex flex-wrap lg:gap-16 md:gap-12 gap-4 justify-center pb-6 md:pb-12 border-b border-gray-400">
                <RestaurantAttributeBox iconName="bank" attribute="بیش از 20 شعبه فعال در سراسر کشور"/>
                <RestaurantAttributeBox iconName="cart" attribute="تسهیلات راه‌اندازی رستوران و تجهیز آن"/>
                <RestaurantAttributeBox iconName="chart" attribute="طرح‌های تشویقی ارتقای فروش"/>
                <RestaurantAttributeBox iconName="book" attribute="اعطای دستورالعمل پخت غذاها"/>
            </div>
        </div>
    </section>
</template>