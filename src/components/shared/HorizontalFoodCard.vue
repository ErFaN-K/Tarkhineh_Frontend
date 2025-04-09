<template>
  <!-- Food Card -->
  <div
    class="rounded-sm md:rounded-lg border border-gray-400 group hover:shadow-xl flex overflow-hidden text-gray-800 bg-white"
  >
    <!-- Food Image -->
    <div class="w-23 md:w-42.25 shrink-0">
      <img
        src="/src/assets/images/food/Food-Image.png"
        alt="Food Image"
        class="size-full object-cover"
      />
    </div>
    <!-- Food Information -->
    <div class="flex flex-col w-full px-2 py-2.5 md:pl-4 md:py-2 md:pr-8">
      <!-- Food Title & Offer & Add To Fav... Button -->
      <div class="flex items-center justify-between gap-x-4 mb-2 md:mb-1">
        <!-- Food Title -->
        <h4
          class="font-Morabba-Medium md:font-Morabba-Bold text-xs md:text-xl line-clamp-1"
        >
          کوفته برنجی
        </h4>
        <!-- Add To Fav Button ( Desktop ) -->
        <span
          class="max-md:hidden cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible"
        >
          <svg class="size-6 text-gray-700">
            <use href="#heart"></use>
          </svg>
        </span>
        <!-- Offer ( If Have It ) ( Mobile ) -->
        <div class="max-md:flex hidden items-center gap-x-2">
          <!-- Old Price -->
          <span class="old-price--decoration">210,000</span>
          <!-- Offer % -->
          <span
            class="flex items-center h-4 px-1.5 rounded-lg bg-Error-EXLight text-Error font-Dana text-custom"
            >19%</span
          >
        </div>
        <!-- Food  -->
      </div>
      <!-- Food Recipe & Price & Offer -->
      <div class="flex items-center justify-between md:gap-x-5 gap-x-2 mb-1">
        <!-- Food Recipe -->
        <p
          class="line-clamp-1 md:line-clamp-2 md:text-sm text-custom font-Dana"
        >
          اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای،
          پیاز، سیر، روغن زیتون
        </p>
        <!-- Offer & Price -->
        <div class="flex flex-col items-end">
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
          <!-- Price -->
          <div
            class="flex items-center md:gap-x-0.5 gap-x-2 font-Dana md:text-lg text-custom"
          >
            <span>105,000</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
      <!-- Food Rate & Order Button & Add To Fav... Button -->
      <div class="flex items-center justify-between">
        <!-- Add To Fav... Button -->
        <span class="md:hidden cursor-pointer">
          <svg class="size-4 text-gray-700">
            <use href="#heart"></use>
          </svg>
        </span>
        <!-- Rate -->
        <div class="flex">
          <svg class="md:size-6 size-4 text-Warning-Light">
            <use href="#star"></use>
          </svg>
          <svg class="md:size-6 size-4 text-Warning-Light">
            <use href="#star"></use>
          </svg>
          <svg class="md:size-6 size-4 text-Warning-Light">
            <use href="#star"></use>
          </svg>
          <svg class="md:size-6 size-4 text-Warning-Light">
            <use href="#star"></use>
          </svg>
          <svg class="md:size-6 size-4 text-Warning-Light">
            <use href="#star"></use>
          </svg>
        </div>
        <!-- Order Button -->
        <button
          class="max-w-25 md:max-w-61 w-full md:h-10 h-8 flex items-center justify-center text-white text-custom md:text-base font-Dana bg-Primary rounded-sm hover:bg-Primary/90"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  </div>
</template>
