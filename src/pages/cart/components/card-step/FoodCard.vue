<template>
    <!-- Food Card ( Only For Food Card Container in Cart Page) -->
  <div class="rounded-lg border border-gray-400 group hover:shadow-xl flex overflow-hidden text-gray-800 bg-white">
        <!-- Food Image -->
        <div class="w-42.25 shrink-0">
          <img
            src="/src/assets/images/food/Food-Image.png"
            alt="Food Image"
            class="size-full object-cover"
          />
        </div>
        <!-- Food Information -->
        <div class="flex flex-col gap-y-2 w-full pl-4 py-4 pr-8">
            <!-- Food Title -->
            <div class="flex items-center justify-between">
                <h4 class="font-Morabba-Bold text-xl line-clamp-1">
                    کوفته برنجی
                </h4>
                <span>
                    <svg class="size-6">
                        <use href="#trash"></use>
                    </svg>
                </span>
            </div>
            <!-- Food Recp... -->
            <div class="flex items-end justify-between gap-x-6">
                <p class="line-clamp-2 text-sm font-Dana h-10">پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده به همراه دوتا عرفان اضافه</p>
                <!-- Offer ( If Have It ) -->
                <div class="max-md:hidden flex items-center gap-x-2">
                  <!-- Old Price -->
                  <span class="old-price--decoration !text-base">210,000</span>
                  <!-- Offer % -->
                  <span
                    class="flex items-center h-5 px-1.5 rounded-lg bg-Error-EXLight text-Error font-Dana text-xs"
                    >19%</span
                  >
                </div>
            </div>
            <!-- Rate & Qty & Price -->
            <div class="flex items-center justify-between gap-x-6">
                <div class="flex items-center gap-x-6">
                    <!-- Rate -->
                    <div class="flex text-Wraning-Light">
                        <svg class="size-6">
                            <use href="#star"></use>
                        </svg>
                        <svg class="size-6">
                            <use href="#star"></use>
                        </svg>
                        <svg class="size-6">
                            <use href="#star"></use>
                        </svg>
                        <svg class="size-6">
                            <use href="#star"></use>
                        </svg>
                        <svg class="size-6">
                            <use href="#star"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>