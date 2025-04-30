<template>
    <section class="success-section md:my-12 mt-22.5">
        <div class="container">
            <div class="w-full flex flex-col items-center justify-center gap-y-12 md:gap-y-12.5">
                <!-- Success Image & ( Tracking Code, Redirect Buttons ) -->
                <div class="w-full flex flex-col items-center justify-center gap-y-6 md:gap-y-12">
                    <!-- Success Image -->
                    <img src="/src/assets/images/payment-action/Success-Payment.png" alt="Success Image" class="w-30 md:w-64 h-28 md:h-60">
                    <!-- ( Tracking Code, Redirect Buttons ) -->
                    <div class="w-full flex flex-col justify-center gap-y-12 md:gap-y-12.5 text-Primary">
                        <!-- Tracking Code -->
                        <div class="text-center">
                            <h3 class="text-Primary text-base md:text-4.5xl font-Morabba-Bold mb-4 md:mb-6">پرداخت شما با موفقیت انجام شد!</h3>
                            <!-- Code -->
                            <span class="text-Primary font-Dana text-xs md:text-xl">کد رهگیری سفارش شما:  ۲۱۵۴۹۰۱۹</span>
                        </div>
                        <!-- Redirect Buttons -->
                        <div class="flex justify-center gap-x-4 md:gap-x-6">
                            <!-- Go To Home -->
                            <router-link :to="{ name: 'HomePage' }" class="md:w-46 w-full h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary border border-Primary rounded-sm hover:bg-Primary/10">بازگشت به صفحه اصلی</router-link>
                            <!-- Order Tracking -->
                            <router-link :to="{ name: 'Dashboard|Profile' }" class="md:w-46 w-full h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-white bg-Primary rounded-sm hover:bg-Primary/90">پیگیری سفارش</router-link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>