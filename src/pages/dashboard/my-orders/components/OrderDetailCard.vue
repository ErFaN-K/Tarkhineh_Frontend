<script setup>
import ProgressStepper from '@/components/ui/ProgressStepper.vue';
import FoodCard from './FoodCard.vue'
</script>

<template>
    <div class="flex flex-col px-3 pt-2 pb-4 md:px-6 md:pb-6 md:pt-4 rounded-sm border border-gray-400">
        <!-- Branch Name & Order Status & Shipping Method -->
        <div class="flex items-center justify-between">
            <!-- Branch Name -->
            <h6 class="md:mt-1.5 text-xs md:text-sm font-Dana md:font-Dana-Medium text-gray-700">شعبه اقدسیه</h6>
            <!-- Order Status & Shipping Method -->
            <div class="flex items-center gap-x-2">
                <span class="block h-5.5 md:h-6.5 flex items-center px-1 md:px-3 bg-gray-300 text-gray-800 rounded-sm text-custom font-Dana md:text-xs">تحویل حضوری</span>
                <span class="block max-md:w-13.5 h-5.5 md:h-6.5 flex items-center justify-center px-1 md:px-3 text-Warning font-Dana text-custom max-md:whitespace-nowrap md:text-xs rounded-sm bg-Warning-EXLight">جاری</span>
            </div> 
        </div>
        <!-- Order Information -->
        <div class="md:mt-3 mt-4 flex max-md:flex-col max-md:gap-y-2 md:justify-between md:items-start text-gray-700 font-Dana text-custom">
            <!-- For Mobile 👇 -->
            <div class="flex items-center justify-between md:hidden">
                <!-- Order Date -->
                <div class="flex items-center gap-x-1">
                    <svg class="size-3">
                        <use href="#calender"></use>
                    </svg>
                    <span>شنبه، ۸ مرداد، ساعت ۱۸:۵۳</span>
                </div>
                <!-- Delivery Time -->
                <div class="flex items-center gap-x-1">
                    <svg class="size-4">
                        <use href="#clock"></use>
                    </svg>
                    <span>آماده تحویل تا <span class="text-Primary">۲۵:۳۳</span></span>
                </div>
            </div>
            <!-- Address -->
            <div class="flex items-center gap-x-1 md:hidden">
                <svg class="size-3">
                    <use href="#location"></use>
                </svg>
                <span class="line-clamp-1">تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰</span>
            </div>
            <!-- Total Price & Offer -->
            <div class="flex items-center gap-x-1 md:hidden">
                <!-- Total price -->
                <div class="flex items-ceter gap-x-1">
                    <svg class="size-3">
                        <use href="#order"></use>
                    </svg>
                    <span>۲۲۸٬۵۰۰ تومان</span>
                </div>
                <!-- Offer -->
                <span>تخفیف: ۲۸٬۵۰۰ تومان</span>
            </div>
            <!-- For Mobile 👆 -->
            <!--------------------->
            <!-- For Desktop 👇 -->
            <div class="flex flex-col gap-y-1 max-md:hidden">
                <!-- Address And Order Date & Total Price & Offer -->
                <div class="flex items-center gap-x-2.5">
                    <!-- Date -->
                    <div class="flex items-center gap-x-1">
                        <svg class="size-4">
                            <use href="#calender"></use>
                        </svg>
                        <span>شنبه ۸ مرداد، ساعت ۱۸:۵۳</span>
                    </div>
                    <!-- Total Price & Offer -->
                    <div class="flex items-center gap-x-1">
                        <span>مبلغ: ۲۲۸٬۵۰۰ تومان</span>
                        <span>تخفیف: ۲۸٬۵۰۰ تومان</span>
                    </div>
                </div>
                <!-- Address -->
                <div class="flex items-center gap-x-1">
                    <svg class="size-4">
                        <use href="#location"></use>
                    </svg>
                    <span>اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰</span>
                </div>
            </div>
            <!-- Delivery Time -->
            <div class="flex items-center gap-x-1 text-xs max-md:hidden">
                <svg class="size-4">
                    <use href="#clock"></use>
                </svg>
                <span>تحویل تا</span>
                <span class="text-Primary">۲۵:۳۳</span>
            </div>
            <!-- For Desktop 👆 -->
        </div>
        <!-- Progress Stepper Just For Send by courier -->
        <div class="mt-4 md:mt-3 flex justify-center">
            <ProgressStepper 
              :stepOneName="'در حال آماده‌سازی'"
              :stepOneIcon="'#home'"
              :stepOneActive="false"

              :stepTwoName="'ارسال پیک'"
              :stepTwoIcon="'#check'"
              :stepTwoActive="true"

              :stepThreeName="'تحویل سفارش'"
              :stepThreeIcon="'#money'"
              :stepThreeActive="false"
            />
        </div>
        <!-- Order Foods -->
        <div class="mt-4 grid grid-cols-3 xl:grid-cols-6 max-xl:grid-cols-4 max-md:grid-cols-5 max-sm:grid-cols-3 md:gap-4 gap-2">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
        <!-- Action Button -->
        <button class="max-md:mx-auto mr-auto mt-4 w-23.5 md:w-30.75 h-8 border border-Error text-Error hover:bg-Error/10 rounded-sm flex items-center justify-center cursor-pointer text-xs font-Dana md:font-Dana-Medium">لغو سفارش</button>
    </div>
</template>