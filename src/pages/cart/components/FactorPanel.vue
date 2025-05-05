<script setup lang="ts">
import FoodCard from './card-step/Small-FoodCard.vue';

import { useCartStore } from '@/store/modules/cartStore.ts' 
const cartStore = useCartStore()

const nextStepHandler = (): void => {
    if(cartStore.step >= 3) return
    cartStore.nextStep(cartStore.step + 1)
}
</script>

<template>
    <div class="xl:col-span-5 max-xl:col-span-4 col-span-4 text-gray-800 p-6 border border-gray-400 rounded-lg divide-y divide-gray-400 space-y-3">
        <!-- Factor Header -->
        <div class="flex items-center justify-between max-md:hidden pb-3">
            <!-- Cart Count -->
            <span class="font-Dana md:text-base">سبد خرید <span class="text-sm">(۴)</span></span>
        </div>
        <!-- Factor Body -->
        
        <!-- Product List ( if step = 1 -> show in mobile size | else show every step ) -->
        <div :class="cartStore.step === 1 ? 'lg:hidden' : 'max-md:hidden'" class="flex items-center flex-col h-46.75 overflow-auto custom-scroll pb-3">
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
        </div>
        <!-- Offer -->
        <div class="flex items-center justify-between text-sm font-Dana pb-3">
            <span class="text-sm font-Dana">تخفیف محصولات</span>
            <span class="text-gray-700">۶۳٬۰۰۰ تومان</span>
        </div>
        <!-- Delivery Price -->
        <div class="flex flex-col gap-y-2 pb-3">
            <div class="flex items-center justify-between text-sm font-Dana">
                <span class="text-sm font-Dana">هزینه ارسال</span>
                <span class="text-gray-700">۰ تومان</span>
            </div>
            <!-- Warning -->
            <div v-if="cartStore.step === 1" class="w-full flex items-start gap-x-2 text-Warning text-custom font-Dana">
                <svg class="shrink-0 size-6">
                    <use href="#warning"></use>
                </svg>
                <p class="">هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
            </div>
        </div>
        <!-- Total Price & Next Step Button -->
        <div class="flex flex-col gap-y-3">
            <div class="flex items-center justify-between text-sm font-Dana">
                <span class="text-sm font-Dana">مبلغ قابل پرداخت</span>
                <span class="text-Primary">۵۴۲٬۰۰۰ تومان</span>
            </div>
            <!-- If Loign -->
            <button @click="nextStepHandler" v-if="true" class="flex items-center justify-center gap-x-2 h-8 md:h-10 md:rounded-lg rounded-sm bg-Primary hover:bg-Primary/90 cursor-pointer font-Dana md:font-Dana-Medium text-xs md:text-base text-white">
                <svg class="size-4 md:size-6">
                    <use href="#check-circle"></use>
                </svg>
                <span>ثبت سفارش</span>
            </button>
            <!-- if Not Login -->
            <button v-else class="flex items-center justify-center gap-x-2 h-8 md:h-10 md:rounded-lg rounded-sm bg-Primary hover:bg-Primary/90 cursor-pointer font-Dana md:font-Dana-Medium text-xs md:text-base text-white">
                <svg class="size-4 md:size-6">
                    <use href="#user"></use>
                </svg>
                <span>ورود/ثبت‌نام</span>
            </button>
        </div>
    </div>
</template>