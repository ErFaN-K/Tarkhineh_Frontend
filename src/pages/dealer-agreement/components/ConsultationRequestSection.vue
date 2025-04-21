<script setup>
import { ref } from 'vue';
import DatePicker from '@/components/shared/DatePicker.vue';
import { datePicker } from '@/composables/useDatePicker'

const { dateNumber, getDateFromCustomDatePicker, isOpenCustomDatePicker, showCustomDatePicker, hideCustomDatePicker } = datePicker()
</script>

<template>
    <section class="mb-6 md:mb-12 consulation-request-section">
        <div class="container">
            <div class="pb-6 md:pb-12 border-b border-gray-400">
                <!-- Section Title -->
                <h2 class="section__title text-center">دریافت مشاوره</h2>
                <!-- Section Content -->
                <div class="section__body flex items-center flex-col md:gap-y-6 gap-y-4">
                    <!-- Input Container -->
                    <div class="w-full flex items-center max-lg:flex-col md:gap-x-6 max-lg:gap-y-3">
                        <!-- First & Last name Input -->
                        <div class="w-full">
                            <input type="text" placeholder="نام و نام‌خانوادگی" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                        </div>
                        <!-- Phonenumber Input -->
                        <div class="w-full">
                            <input type="text" placeholder="شماره تماس" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                        </div>
                        <!-- Date Input -->
                        <div class="relative w-full">
                            <input @click="showCustomDatePicker" v-model="dateNumber" type="text" placeholder="زمان ایده‌آل" readonly class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                            <DatePicker @closeDatePicker="hideCustomDatePicker" @getDate="getDateFromCustomDatePicker" :class="!isOpenCustomDatePicker ? 'is-hidden' : 'is-show'"/>
                        </div>
                    </div>
                    <!-- Submit Button -->
                    <div class="flex justify-center">
                        <button class="md:h-10 h-8 flex items-center justify-center text-white md:text-base text-sm md:font-Dana-SemiBold font-Dana px-2 md:px-4 rounded-sm bg-Primary hover:bg-Primary/90 cursor-pointer">درخواست مشاوره</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>