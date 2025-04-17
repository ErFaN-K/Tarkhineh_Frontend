<script setup>
import { ref, computed } from 'vue'
import jalaali from 'jalaali-js'

const emit = defineEmits(['getDate', 'closeDatePicker'])
const jalaaliCurrentDate = jalaali.toJalaali(new Date())
const selectedDate = ref(jalaaliCurrentDate)

let dayNumber = []
let yearNumber = []
let monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const getMonthLength = (year, month) => {
    dayNumber = [] // Reset dayNumber
    const monthLength = jalaali.jalaaliMonthLength(year, month)
    for(let i = 1; i <= monthLength; i++) {
        dayNumber.push(i)
    }
}

const calculateMinYear = (minYear) => {
    yearNumber = [] // Reset yearNumber
    for(let i = minYear; i <= selectedDate.value.jy; i++) { 
        yearNumber.push(i)
    }
}

// Set Jalaali Date & Refresh Month Lengh
const setDate = (year, month, day) => {
    selectedDate.value = {
        jy: year || selectedDate.value.jy,
        jm: month || selectedDate.value.jm,
        jd: day || selectedDate.value.jd
    };
    getMonthLength(selectedDate.value.jy, selectedDate.value.jm) 
}

// Send Gregorian Date To Parent
const sendDate = () => {
    const gregorianDate = jalaali.toGregorian(selectedDate.value.jy, selectedDate.value.jm, selectedDate.value.jd)
    emit('getDate', { gregorianDate, jalaaliDateFormated })
    emit('closeDatePicker', false)
}

calculateMinYear(1340)
getMonthLength(selectedDate.value.jy, selectedDate.value.jm)

// Format Gregorian Date To Jalaali
const jalaaliDateFormated = computed(() => {
    return `${selectedDate.value.jd} / ${selectedDate.value.jm} / ${selectedDate.value.jy}`
})

</script>

<template>
    <!-- Date Picker -->
    <div class="absolute max-w-83.25 md:p-4 p-3 rounded-lg left-0 right-0 top-[calc(100%+8px)] mx-auto bg-white shadow-lg">
        <div class="flex items-center flex-col gap-y-4">
            <div class="flex items-center justify-center gap-x-4">
                <!-- Day -->
                <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                    <!-- Title -->
                    <span class="text-sm text-center text-gray-800 font-Dana">روز</span>
                    <!-- Numbers -->
                    <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                        <span :class="selectedDate.jd === day ? 'date--active' : ''" @click="setDate(selectedDate.jy, selectedDate.jm, day)" v-for="day in dayNumber" :key="day" class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">{{ day }}</span>     
                    </div>
                </div>
                <!-- Month -->
                <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                    <!-- Title -->
                    <span class="text-sm text-center text-gray-800 font-Dana">ماه</span>
                    <!-- Numbers -->
                    <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                        <span :class="selectedDate.jm === month ? 'date--active' : ''" @click="setDate(selectedDate.jy, month, selectedDate.jd)" v-for="month in monthNumber" :key="month" class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer">{{ month }}</span>     
                    </div>
                </div>
                <!-- Year -->
                <div class="w-20 flex flex-col md:gap-y-2 gap-y-1">
                    <!-- Title -->
                    <span class="text-sm text-center text-gray-800 font-Dana">سال</span>
                    <!-- Numbers -->
                    <div class="h-24.5 px-1 overflow-auto custom-scroll flex flex-col divide-y divide-gray-300">
                        <span :class="selectedDate.jy === year ? 'date--active' : ''" @click="setDate(year, selectedDate.jm, selectedDate.jd)" v-for="year in yearNumber" :key="year" class="text-xs text-center text-gray-700 py-1 font-Dana hover:bg-gray-100 cursor-pointer" >{{ year }}</span>
                    </div>
                </div>
            </div>
            <!-- Show Custom Date -->
            <span class="text-center text-base font-Dana text-Primary">{{ jalaaliDateFormated }}</span>
            <!-- Submit Date Button -->
            <button @click="sendDate" class="w-full h-10 bg-Primary hover:bg-Primary/90 text-sm cursor-pointer font-Dana-Medium text-white rounded-sm">ثبت تاریخ</button>
        </div>
    </div>
</template>
