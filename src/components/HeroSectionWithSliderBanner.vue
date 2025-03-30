<script setup>
defineProps({
    content: {
        type: String,
        required: true
    },
    bgNumber: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div :class="`relative flex items-center justify-center bg-green-800 bg-hero bg-hero--${ bgNumber } h-44 sm:h-84`">
        <div class="flex flex-col items-center gap-y-4 md:gap-y-10 pt-5.25 md:pt-7">
            <h1 class="font-Morabba-Bold text-Tint-1 lg:text-[40px] text-base sm:text-2xl"> {{ content }} </h1>
            <button class="flex items-center h-6 px-2 text-sm text-white rounded-lg bg-Primary sm:px-4 lg:px-8 sm:h-8 lg:h-10 font-Dana sm:text-base lg:text-lg">
                <a href="#">سفارش آنلاین عذا</a>
            </button>
        </div>
    </div>
</template>