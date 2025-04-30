<template>
    <!-- Food Card ( Only For Order Details Component ) -->
    <div class="rounded-lg border border-gray-400 overflow-hidden bg-white">
        <!-- Food Image -->
        <div class="relative h-12 md:h-20">
            <img src="/src/assets/images/food/Food-Image.png" alt="Food Image" class="object-cover size-full">
            <!-- Quantity -->
            <span class="absolute text-Primary h-3 md:h-4 px-0.5 md:px-1 flex items-center justify-center rounded-xs bg-white font-Dana text-custom md:text-xs bottom-1 left-1">
                <span class="relative md:top-0.5 top-0.25">4×</span>
            </span>
        </div>
        <!-- Food Informatiob -->
        <div class="py-1 flex flex-col gap-y-1 items-center justify-center text-custom text-gray-800 font-Dana">
            <span>پیتزا روکولا</span>
            <span> ۱۸۸٬۰۰۰ تومان</span>
        </div>
    </div>
</template>