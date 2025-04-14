<script setup>
import { reactive, ref } from 'vue'

const currentDate = ref(new Date())
const currentJalaaliDate = ref(new Intl.DateTimeFormat('fa-IR').format(currentDate.value))

const nextDay = () => {
    currentDate.value.setDate(currentDate.value.getDate() + 1)
    updateDateToJalaai(currentDate.value)
}

const prevDay = () => {
    currentDate.value.setDate(currentDate.value.getDate() - 1)
    updateDateToJalaai(currentDate.value)
}


const updateDateToJalaai = (date) => {
    currentJalaaliDate.value = new Intl.DateTimeFormat('fa-IR').format(date)
    console.log(currentJalaaliDate.value)
}



</script>

<template>
    <!-- Custom Date Picker -->
    <div class="absolute max-w-83.25 md:p-4 p-3 rounded-lg left-0 right-0 top-[calc(100%+8px)] mx-auto bg-white shadow-lg overflow-hidden">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <!-- Next Button -->
            <button @click="nextDay" class="hover:bg-Primary/10 cursor-pointer size-6 flex items-center justify-center rounded-full border border-Primary text-Primary">
                <svg class="size-4 rotate-180">
                    <use href="#chevron-left-mini"></use>
                </svg>
            </button>
            <!-- Show Date --> 
            <span class="font-Dana-SemiBold text-base text-gray-800">{{ currentJalaaliDate }}</span>
            <!-- Previous Button -->
            <button @click="prevDay" class="hover:bg-Primary/10 cursor-pointer size-6 flex items-center justify-center rounded-full border border-Primary text-Primary">
                <svg class="size-4">
                    <use href="#chevron-left-mini"></use>
                </svg>
            </button>
        </div>
        <!-- Week Days -->
        <div class="mt-4 grid grid-cols-7">
            <div class="flex flex-col gap-y-3 items-center">
                <span class="text-gray-700 text-sm font-Dana">ش</span>
                <div class="flex flex-col gap-y-2 items-center text-gray-800 font-Dana">
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                </div>
            </div>
            <div class="flex flex-col gap-y-3 items-center">
                <span class="text-gray-700 text-sm font-Dana">ش</span>
                <div class="flex flex-col gap-y-2 items-center text-gray-800 font-Dana">
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                </div>
            </div>
            <div class="flex flex-col gap-y-3 items-center">
                <span class="text-gray-700 text-sm font-Dana">ش</span>
                <div class="flex flex-col gap-y-2 items-center text-gray-800 font-Dana">
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                </div>
            </div>
            <div class="flex flex-col gap-y-3 items-center">
                <span class="text-gray-700 text-sm font-Dana">ش</span>
                <div class="flex flex-col gap-y-2 items-center text-gray-800 font-Dana">
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                </div>
            </div>
            <div class="flex flex-col gap-y-3 items-center">
                <span class="text-gray-700 text-sm font-Dana">ش</span>
                <div class="flex flex-col gap-y-2 items-center text-gray-800 font-Dana">
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                </div>
            </div>
            <div class="flex flex-col gap-y-3 items-center">
                <span class="text-gray-700 text-sm font-Dana">ش</span>
                <div class="flex flex-col gap-y-2 items-center text-gray-800 font-Dana">
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                </div>
            </div>
            <div class="flex flex-col gap-y-3 items-center">
                <span class="text-gray-700 text-sm font-Dana">ش</span>
                <div class="flex flex-col gap-y-2 items-center text-gray-800 font-Dana">
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                    <span class="size-8 flex items-center justify-center hover:bg-Primary hover:text-white rounded-full cursor-pointer">6</span>
                </div>
            </div>
        </div>
        <!-- Select Custom Date -->
        <div class="absolute inset-0 flex flex-col justify-between size-full z-10 bg-white md:p-4 p-3">
            <!-- Close Icon -->
            <span class="mr-auto size-6 flex items-center justify-center rounded-full border border-Primary text-Primary hover:bg-Primary/10 cursor-pointer">
                <svg class="size-4">
                    <use href="#x-mark"></use>
                </svg>
            </span>
            <div class="mt-6 flex items-center justify-center flex-col md:gap-y-4 gap-y-2">
                <div class="flex items-center justify-center gap-x-4 gap-x-6">
                    <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                        <!-- Title -->
                        <span class="text-sm text-center text-gray-800 font-Dana">روز</span>
                        <!-- Numbers -->
                        <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>     
                        </div>
                    </div>
                    <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                        <!-- Title -->
                        <span class="text-sm text-center text-gray-800 font-Dana">روز</span>
                        <!-- Numbers -->
                        <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>     
                        </div>
                    </div>
                    <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                        <!-- Title -->
                        <span class="text-sm text-center text-gray-800 font-Dana">روز</span>
                        <!-- Numbers -->
                        <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>
                            <span class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">1</span>     
                        </div>
                    </div>
                </div>
                <!-- Show Custom Date -->
                <span class="text-center text-xs text-gray-800 font-Dana">تاریخ انتخاب شده : 1403/12/5</span>
                <!-- Submit Date Button -->
                <button class="w-full h-10 bg-Primary hover:bg-Primary/90 text-sm cursor-pointer font-Dana-Medium text-white rounded-sm">ثبت تاریخ</button>
            </div>
        </div>
    </div>
</template>