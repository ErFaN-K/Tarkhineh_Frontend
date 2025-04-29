<template>
    <!-- Favorite Food Card ( Only For Dashboard | Favorite Page ) -->
    <div class="bg-white md:rounded-lg rounded-sm border border-gray-400 overflow-hidden text-gray-800">
        <!-- Food Image -->
        <div class="w-full h-26 md:h-35">
            <img src="/src/assets/images/food/Food-Image.png" alt="Food Image" class="object-cover size-full">
        </div>
        <!-- Food Information -->
        <div class="px-2 pb-2 md:px-4 md:pb-4">
            <div class="md:mt-4 mt-2 flex items-center justify-between">
                <!-- Food Title -->
                <h3 class="md:font-Morabba-Bold md:text-xl font-Morabba-Medium text-xs line-clamp-1">پاستا سبزیجات </h3>
                <!-- Heart -->
                <span>
                    <svg class="size-4 md:size-6 text-Error">
                        <use href="#solid-heart"></use>
                    </svg>
                </span>
            </div>
            <div class="md:mt-2 mt-1 flex items-center justify-between gap-x-2">
                <!-- Rate ( For Desktop ) -->
                <div class="max-md:hidden flex">
                    <svg class="size-4 md:size-6 text-Warning-Light">
                        <use href="#star"></use>
                    </svg>
                    <svg class="size-4 md:size-6 text-Warning-Light">
                        <use href="#star"></use>
                    </svg>
                    <svg class="size-4 md:size-6 text-Warning-Light">
                        <use href="#star"></use>
                    </svg>
                    <svg class="size-4 md:size-6 text-Warning-Light">
                        <use href="#star"></use>
                    </svg>
                    <svg class="size-4 md:size-6 text-Warning-Light">
                        <use href="#star"></use>
                    </svg>
                </div>
                <!-- Rate ( For Mobile ) -->
                <div class="md:hidden flex items-center gap-x-0.5">
                    <svg class="size-3 text-Warning-Light">
                        <use href="#star"></use>
                    </svg>
                    <span class="font-Dana text-xs">۴</span>
                </div>
                <!-- Price -->
                <span class="relative top-0.5 shrink-0 md:text-base text-xs font-Dana">۱۵۰٬۰۰۰ تومان</span>
            </div>
            <button class="mt-2 md:mt-6 w-full flex items-center justify-center md:h-10 h-8 bg-Primary font-Dana text-custom md:text-base text-white rounded-sm hover:bg-Primary/90 cursor-pointer">افزودن به سبد خرید</button>
        </div>
    </div>
</template>