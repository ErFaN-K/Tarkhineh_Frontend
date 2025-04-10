<template>
    <section class="unsuccess-section md:my-12 mt-22.5">
        <div class="container">
            <div class="w-full flex flex-col items-center justify-center gap-y-12 md:gap-y-12.5">
                <!-- Unsuccess Image & ( Tracking Code, Redirect Buttons ) -->
                <div class="w-full flex flex-col items-center justify-center gap-y-6 md:gap-y-12">
                    <!-- Unsuccess Image -->
                    <img src="/src/assets/images/payment-action/Unsuccess-Payment.png" alt="Unsuccess Image" class="w-30 md:w-64 h-28 md:h-60">
                    <!-- ( Tracking Code, Redirect Buttons ) -->
                    <div class="w-full flex flex-col justify-center gap-y-12 md:gap-y-12.5 text-Primary">
                        <!-- Tracking Code -->
                        <div class="text-center">
                            <h3 class="text-Error text-base md:text-4.5xl font-Morabba-Bold mb-4 md:mb-6">پرداخت شما ناموفق بود!</h3>
                            <!-- Code -->
                            <span class="text-gray-800 font-Dana text-xs md:text-xl">کد پیگیری تراکنش شما:  ۶۵۸۵۷۱۲۷</span>
                        </div>
                        <!-- Redirect Buttons -->
                        <div class="flex justify-center gap-x-4 md:gap-x-6">
                            <!-- Go To Home -->
                            <a href="#" class="md:w-46 w-full h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary">بازگشت به صفحه اصلی</a>
                            <!-- Order Tracking -->
                            <a href="#" class="md:w-46 w-full h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary border border-Primary rounded-sm hover:bg-Primary/10">پرداخت مجدد</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>