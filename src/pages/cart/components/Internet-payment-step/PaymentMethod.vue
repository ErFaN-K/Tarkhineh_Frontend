<script setup>
import DeliveryMethodCard from '../MethodCard.vue'
</script>

<template>
    <div class="flex max-md:flex-col max-md:items-start items-center md:gap-x-6 xl:gap-x-16.25 max-xl:gap-x-6 max-md:gap-y-4 p-4 md:px-6 md:py-8 rounded-lg border border-gray-400">
        <!-- Header * Title -->
        <div class="max-md:w-full max-md:pb-2 flex items-center gap-x-1 max-md:border-b max-md:border-gray-400 text-gray-800">
            <svg class="md:size-6 size-4">
                <use href="#truck"></use>
            </svg>
            <span class="font-Dana text-sm md:text-base">روش پرداخت</span>
        </div>
        <!-- Methods -->
        <div class="max-md:w-full flex md:items-center items-start max-md:justify-center max-md:gap-x-5.5 max-md:gap-y-2 md:gap-x-10">
            <DeliveryMethodCard 
            inputId="courier"
            mainTitle="پرداخت اینترنتی"
            titleDescription="توسط پیک رستوران ارسال شود."
            iconName="truck"/>
            <DeliveryMethodCard 
            inputId="in-person"
            mainTitle="پرداخت در محل"
            titleDescription="توسط پیک رستوران ارسال شود."
            iconName="user"/>
        </div>
    </div>
</template>
