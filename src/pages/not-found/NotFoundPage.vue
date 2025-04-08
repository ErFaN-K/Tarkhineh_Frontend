<script setup>
import NotFound from '@/components/shared/404Error.vue'
</script>

<template>
  <!-- 404 Not Found Page -->
  <div class="min-h-screen w-full flex flex-col items-center justify-center md:gap-y-10 gap-y-5 p-5">
    <NotFound/>
    <!-- Redirect Buttons -->
    <div class="flex max-md:flex-col w-full md:gap-x-4 max-md:gap-y-2 justify-center">
        <a href="#" class="md:h-10 h-8 flex items-center justify-center md:max-w-45 w-full rounded-sm md:rounded-lg font-Dana text-xs text-Primary md:text-base bg-white border border-Primary hover:bg-Primary/10">بازگشت</a>
        <a href="#" class="md:h-10 h-8 flex items-center justify-center md:max-w-45 w-full rounded-sm md:rounded-lg font-Dana text-white text-xs md:text-base bg-Primary hover:bg-Primary/90">صفحه اصلی</a>
    </div>
  </div>
</template>