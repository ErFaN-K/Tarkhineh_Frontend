<template>
  <div
    class="flex md:items-start max-md:flex-col md:py-4 py-2 justify-between md:px-12 px-2 h-15 md:h-32.5 md:max-w-202.5 w-full mx-auto md:-mt-8.25 -mt-2.5 bg-white border border-Primary md:rounded-lg rounded-sm relative z-10"
  >
    <!-- Desktop ( Phone Number ) -->
    <div
      class="max-md:hidden max-w-50 w-full flex flex-col items-center gap-y-2 text-gray-800 font-Dana text-base"
    >
      <svg class="size-8">
        <use href="#phone"></use>
      </svg>
      <div class="flex flex-col text-center">
        <!-- Phone 1 -->
        <span>۰۲۱-۳۳۵۳۵۳۵۴</span>
        <!-- Phone 2 -->
        <span>شماره دوم وجود ندارد</span>
      </div>
    </div>
    <!-- Desktop ( Location ) -->
    <div
      class="max-md:hidden max-w-50 w-full flex flex-col items-center gap-y-2 text-gray-800 font-Dana text-base"
    >
      <svg class="size-8">
        <use href="#location"></use>
      </svg>
      <span class="text-center"
        >شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span
      >
    </div>
    <!-- Desktop ( Working Hours ) -->
    <div
      class="max-md:hidden max-w-50 w-full flex flex-col items-center gap-y-2 text-gray-800 font-Dana text-base"
    >
      <svg class="size-8">
        <use href="#clock"></use>
      </svg>
      <span class="text-center">همه‌روزه از ساعت ۱۲ الی ۲۳ </span>
    </div>

    <!-- Mobile ( Location ) -->
    <div
      class="max-md:flex hidden items-center gap-x-1 text-gray-800 font-Dana text-custom"
    >
      <svg class="size-4">
        <use href="#location"></use>
      </svg>
      <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
    </div>
    <!-- Mobile ( PhoneN & WH ) -->
    <div class="max-md:flex hidden items-center justify-between w-full">
      <!-- Phone Number -->
      <div
        class="max-md:flex hidden items-center gap-x-1 text-gray-800 font-Dana text-custom"
      >
        <svg class="size-4">
          <use href="#phone"></use>
        </svg>
        <!-- Phone 1 -->
        <span>۰۲۱-۳۳۵۳۵۳۵۴</span>
      </div>
      <!-- WH -->
      <div
        class="max-md:flex hidden items-center gap-x-1 text-gray-800 font-Dana text-custom"
      >
        <svg class="size-4">
          <use href="#clock"></use>
        </svg>
        <span>همه‌روزه از ساعت ۱۲ الی ۲۳ </span>
      </div>
    </div>
  </div>
</template>
