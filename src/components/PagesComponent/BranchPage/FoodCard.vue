<template>
    <!-- Food Card -->
    <div class="border border-gray-400 md:rounded-lg bg-white rounded-sm overflow-hidden">
        <!-- Food Image -->
        <div class="w-full md:h-64 h-27.25">
            <img src="/src/assets/images/Food-Image.png" alt="Food image" class="size-full object-cover">
        </div>
        <div class="md:p-4 px-2 pb-2 pt-1">
            <!-- Food Title -->
            <h3 class="md:font-Morabba-Bold md:text-xl font-Morabba-Medium text-xs text-center text-gray-800 line-clamp-1">دلمه برگ کلم</h3>
            <!-- Food Information -->
            <div class="h-10 md:h-13 flex items-center justify-between md:mt-4 mt-1 mb-3 md:mb-4">
                <!-- Right -->
                <div class="flex flex-col max-md:gap-y-2">
                    <!-- Add To Favorite -->
                    <div class="flex items-center gap-x-1 text-gray-500 text-custom">
                        <span>
                            <svg class="size-4">
                                <use href="#heart"></use>
                            </svg>
                        </span>
                        <span class="max-md:hidden font-Dana">افزودن به علاقمندی‌ها</span>
                    </div>
                    <!-- Rate -->
                    <div class="flex items-center md:gap-x-1 gap-x-0.5 md:py-1">
                        <svg class="size-4 text-Warning-Light">
                            <use href="#star"></use>
                        </svg>
                        <!-- Rate Number -->
                        <span class="relative top-0.5 md:text-sm text-custom md:font-Dana-Medium font-Dana">5</span>
                        <!-- Rate Text -->
                        <span class="relative top-0.5 text-custom text-gray-500 font-Dana max-md:hidden">(۳۲ امتیاز)</span>
                    </div>
                </div>
                <!-- Left -->
                <div class="flex flex-col max-md:gap-y-1">
                    <!-- Offer ( If Have It ) -->
                    <div class="flex items-center md:gap-x-2 gap-x-1 mr-auto">
                        <!-- Old Price -->
                        <span class="old-price__offer">210,000</span>
                        <!-- Offer % -->
                        <span class="flex items-center h-4 md:px-2 px-1.5 rounded-lg bg-Error-EXLight text-Error font-Dana text-custom">19%</span>
                    </div>
                    <!-- Price -->
                    <span class="md:text-base text-custom font-Dana text-gray-800">۱۳۶٬۰۰۰ تومان</span>
                </div>
            </div>
            <!-- Button -->
            <button class="w-full flex items-center justify-center md:h-10 h-8 bg-Primary font-Dana text-custom md:text-base text-white rounded-sm hover:bg-Primary/90 cursor-pointer">افزودن به سبد خرید</button>
        </div>
    </div>
</template>