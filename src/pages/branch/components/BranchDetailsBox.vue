<script setup lang="ts">
  import AppIcon from "@/components/ui/AppIcon.vue";
</script>

<template>
  <div
    class="flex md:items-start max-md:flex-col md:py-4 py-2 justify-between md:px-12 px-2 h-15 md:h-32.5 md:max-w-202.5 w-full mx-auto md:-mt-8.25 -mt-2.5 bg-white border border-Primary md:rounded-lg rounded-sm relative z-10"
  >
    <!-- Desktop ( Phone Number ) -->
    <div
      class="max-md:hidden max-w-50 w-full flex flex-col items-center gap-y-2 text-gray-800 font-Dana text-base"
    >
      <AppIcon className="size-8" iconName="phone"/>
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
      <AppIcon className="size-8" iconName="location"/>
      <span class="text-center"
        >شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span
      >
    </div>
    <!-- Desktop ( Working Hours ) -->
    <div
      class="max-md:hidden max-w-50 w-full flex flex-col items-center gap-y-2 text-gray-800 font-Dana text-base"
    >
      <AppIcon className="size-8" iconName="clock"/>
      <span class="text-center">همه‌روزه از ساعت ۱۲ الی ۲۳ </span>
    </div>

    <!-- Mobile ( Location ) -->
    <div
      class="max-md:flex hidden items-center gap-x-1 text-gray-800 font-Dana text-custom"
    >
      <AppIcon className="size-4" iconName="location"/>
      <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
    </div>
    <!-- Mobile ( PhoneN & WH ) -->
    <div class="max-md:flex hidden items-center justify-between w-full">
      <!-- Phone Number -->
      <div
        class="max-md:flex hidden items-center gap-x-1 text-gray-800 font-Dana text-custom"
      >
        <AppIcon className="size-4" iconName="phone"/>
        <!-- Phone 1 -->
        <span>۰۲۱-۳۳۵۳۵۳۵۴</span>
      </div>
      <!-- WH -->
      <div
        class="max-md:flex hidden items-center gap-x-1 text-gray-800 font-Dana text-custom"
      >
        <AppIcon className="size-4" iconName="clock"/>
        <span>همه‌روزه از ساعت ۱۲ الی ۲۳ </span>
      </div>
    </div>
  </div>
</template>
