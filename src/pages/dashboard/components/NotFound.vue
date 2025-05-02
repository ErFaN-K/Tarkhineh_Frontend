<script setup>
defineProps({
    content: {
        type: String,
        default: () => 'موردی تا اکنون ثبت نشده است'
    },
    redirectText: {
        type: String,
        default: () => 'منوی رستوران'
    },
    redirectPage: {
        type: String,
        default: () => 'MenuPage'
    }
})
</script>

<template>
    <div class="relative md:grow-1 max-md:mt-6 max-md:border max-md:rounded-lg max-md:border-gray-400 h-64 flex items-center justify-center">
      <!-- Spider Vector -->
      <svg class="-z-1 absolute w-50 md:w-81.25 h-48.25 md:h-78.25">
        <use href="#spider-vector"></use>
      </svg>
      <!-- Content -->
      <div class="flex flex-col items-center gap-y-4 md:gap-y-8">
        <span class="md:font-Dana-Medium font-Dana text-gray-700 text-custom md:text-xl">{{ content }}</span>
        <!-- Redirect To Menu Page -->
        <router-link :to="{ name: redirectPage }" class="cursor-pointer w-38 md:w-69.5 h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary border border-Primary rounded-sm hover:bg-Primary/10">منوی رستوران</router-link>
      </div>
    </div>
</template>