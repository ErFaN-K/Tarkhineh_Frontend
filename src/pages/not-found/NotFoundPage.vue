<script setup>
import NotFound from '@/components/ui/404Error.vue'
</script>

<template>
  <!-- 404 Not Found Page -->
  <div class="min-h-screen w-full flex flex-col items-center justify-center md:gap-y-10 gap-y-5 p-5">
    <NotFound/>
    <!-- Redirect Buttons -->
    <div class="flex w-full md:gap-x-6 gap-x-4 justify-center">
        <button class="md:w-46 w-full h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary border border-Primary rounded-sm hover:bg-Primary/10">بازگشت</button>
        <router-link :to="{ name: 'HomePage' }" class="md:w-46 w-full h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-white bg-Primary rounded-sm hover:bg-Primary/90">صفحه اصلی</router-link>
    </div>
  </div>
</template>