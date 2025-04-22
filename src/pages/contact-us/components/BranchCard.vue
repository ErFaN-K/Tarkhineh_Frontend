<template>
    <!-- Branch Card ( Only For Contact Us Page )-->
    <div class="flex max-lg:flex-col rounded-sm md:rounded-lg border border-gray-400 overflow-hidden hover:shadow-xl">
        <!-- Branch Image -->
        <div class="lg:basis-1/2 lg:h-70 md:h-40 h-28">
            <img src="/src/assets/images/branch/Branch-Image-2.png" alt="Branch Image" class="size-full object-cover">
        </div>
        <!-- Branch Data -->
        <div class="flex flex-col justify-between lg:gap-y-5.5 md:gap-y-4 gap-y-3 lg:basis-1/2 lg:px-12 lg:py-6 md:px-8 p-4">
            <!-- Branch Name & Address & Phone Number & Wh -->
            <div class="flex flex-col items-center">
                <!-- Branch Name -->
                <h4 class="mb-1 md:mb-3 lg:mb-5.5 text-gray-800 lg:font-Dana-SemiBold md:font-Dana-Medium font-Dana text-xs lg:text-xl md:text-base">شعبه اکباتان</h4>
                <!-- Brancg Address -->
                <span class="text-gray-700 lg:font-Dana-Medium font-Dana text-custom md:text-base lg:text-lg line-clamp-1 mb-0.5 md:mb-1 lg:mb-2">چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی</span>
                <!-- Branch Phone Number -->
                <span class="text-gray-700 lg:font-Dana-Medium font-Dana text-custom md:text-base lg:text-lg line-clamp-1 mb-0.5 md:mb-1 lg:mb-2">شماره تماس: ۰۲۱-۵۴۸۹۱۲۵۲-۵۳</span>
                <!-- Branch Wh -->
                <span class="text-gray-700 lg:font-Dana-Medium font-Dana text-custom md:text-base lg:text-lg line-clamp-1 mb-0.5 md:mb-1 lg:mb-2">ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل</span>
            </div>
            <!-- Show In Map Button & Go To Branch Page Button -->
            <div class="flex md:justify-center gap-x-4 md:gap-x-5">
                <!-- Show In Map Button -->
                <button class="w-full h-6 md:h-10 flex items-center justify-center md:w-32 border border-Primary text-Primary rounded-sm font-Dana md:font-Dana-Medium text-custom md:text-base hover:bg-Primary/10 cursor-pointer">صفحه شعبه</button>
                <!-- Go To Branch Page -->
                <button class="w-full h-6 md:h-10 flex items-center justify-center md:w-32 bg-Primary text-white rounded-sm font-Dana md:font-Dana-Medium text-custom md:text-base hover:bg-Primary/90 cursor-pointer">دیدن در نقشه</button>
            </div>
        </div>
    </div>
</template> 