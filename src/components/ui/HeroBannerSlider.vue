<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
  bgName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    :class="`background-config hero__background--${bgName} relative flex items-center justify-center h-44 sm:h-84`"
  >
    <div class="flex flex-col items-center gap-y-4 md:gap-y-10 pt-5.25 md:pt-7">
      <h1
        class="font-Morabba-Bold text-Tint-1 lg:text-4.5xl text-base sm:text-2xl"
      >
        {{ content }}
      </h1>
      <a
        href="#"
        class="flex items-center h-6 px-2 text-custom text-white md:rounded-lg rounded-sm bg-Primary sm:px-4 lg:px-8 sm:h-8 lg:h-10 font-Dana sm:text-base lg:text-lg"
        >سفارش آنلاین غذا</a
      >
    </div>
  </div>
</template>
