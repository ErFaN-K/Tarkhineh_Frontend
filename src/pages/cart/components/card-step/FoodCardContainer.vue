<script setup>
import FoodCard from './FoodCard.vue'
</script>

<template>
    <!-- Foods Card ( Only For Desktop & Step === 1 ) -->
    <div class="lg:col-span-7 p-4 border border-gray-400 rounded-lg col-span-7 flex flex-col gap-y-4 max-lg:hidden h-138.5 overflow-auto custom-scroll">
        <FoodCard />
    </div>
</template>