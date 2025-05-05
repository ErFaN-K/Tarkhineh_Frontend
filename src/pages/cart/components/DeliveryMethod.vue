<script setup lang="ts">
import DeliveryMethodCard from './MethodCard.vue'
</script>

<template>
    <div class="flex max-md:flex-col max-md:items-start items-center md:gap-x-6 xl:gap-x-16.25 max-xl:gap-x-6 max-md:gap-y-4 px-4 md:px-6 py-4 md:py-6 rounded-lg border border-gray-400">
        <!-- Header * Title -->
        <div class="max-md:w-full max-md:pb-2 flex items-center gap-x-1 max-md:border-b max-md:border-gray-400 text-gray-800">
            <svg class="md:size-6 size-4">
                <use href="#truck"></use>
            </svg>
            <span class="font-Dana text-sm md:text-base">روش تحویل سفارش</span>
        </div>
        <!-- Methods -->
        <div class="flex md:items-center items-start max-md:flex-col max-md:gap-y-2 md:gap-x-10">
            <DeliveryMethodCard 
            inputId="courier"
            mainTitle="ارسال توسط پیک"
            titleDescription="توسط پیک رستوران ارسال شود."
            iconName="truck"/>
            <DeliveryMethodCard 
            inputId="in-person"
            mainTitle="تحویل حضوری"
            titleDescription="توسط پیک رستوران ارسال شود."
            iconName="user"/>
        </div>
    </div>
</template>
