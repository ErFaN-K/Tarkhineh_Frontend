<script setup>
import { reactive, ref } from 'vue'
import CountiesDropDown from './CountiesDropDown.vue'
import ProvincesDropDown from './ProvincesDropDown.vue'

const isOpenProvinceList = ref(false)
const isOpenCountyList = ref(false)

const provincInputValue = ref()
const countyInputValue = ref()

const changeProvinceValue = (provinceName) => {
    provincInputValue.value = provinceName
    isOpenProvinceList.value = false
}

const changeCountyValue = (countyName) => {
    countyInputValue.value = countyName
    isOpenCountyList.value = false
}

// File Input Handlers
const fileInput = ref(null)
const files = reactive([])

// Open File Menu
const openFileInput = () => fileInput.value.click()

// Add File 
const addFile = (event) => {
    Array.from(event.target.files).forEach(file => {
        files.push(file);
        console.log(file.name)
    })
}
</script>

<template>
   <section class="mb-6 md:mb-12 representation-request-section">
        <div class="container">
            <div class="border md:rounded-lg rounded-sm border-gray-400 md:py-8 py-6 md:px-6 px-4">
                <!-- Section Title -->
                <h2 class="section__title text-center">فرم درخواست نمایندگی</h2>
                <!-- Section Content -->
                <div class="md:mt-12 mt-6">
                    <!-- Individual Profile -->
                    <div class="flex flex-col md:gap-y-6 gap-y-4">
                        <!-- Title -->
                        <span class="text-sm md:text-lg text-gray-800 font-Dana">مشخصات فردی متقاضی</span>
                        <!-- Content -->
                        <div class="w-full flex items-center max-lg:flex-col md:gap-x-4 max-lg:gap-y-3">
                            <!-- First & Last name Input -->
                            <div class="w-full">
                                <input type="text" placeholder="نام و نام‌خانوادگی" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                            </div>
                            <!-- National Code -->
                            <div class="w-full">
                                <input type="text" placeholder="کدملی" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                            </div>
                            <!-- Phone Number Input -->
                            <div class="w-full">
                                <input type="text" placeholder="شماره تماس" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                            </div>
                        </div>
                    </div>
                    <!-- Property Address -->
                    <div class="md:mt-10 mt-6 flex flex-col md:gap-y-6 gap-y-4">
                        <!-- Title -->
                        <span class="text-sm md:text-lg text-gray-800 font-Dana">آدرس ملک متقاضی</span>
                        <!-- Content -->
                        <div class="flex items-stretch max-lg:flex-col md:gap-x-4 max-lg:gap-y-3">
                            <div class="w-full flex flex-col md:gap-y-4 gap-y-3">
                                <div class="w-full relative">
                                    <input type="text" placeholder="استان" v-model="provincInputValue" @click="isOpenProvinceList ? isOpenProvinceList = false : isOpenProvinceList = true" readonly class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                                    <!-- Counties Drop Down -->
                                    <ProvincesDropDown @provinceSelect="changeProvinceValue" :class="isOpenProvinceList ? 'is-show' : 'is-hidden'"/>
                                </div>
                                <div class="w-full">
                                    <input type="text" placeholder="منطقه" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                                </div>
                            </div>
                            <div class="w-full flex flex-col md:gap-y-4 gap-y-3">
                                <div class="w-full relative">
                                    <input v-model="countyInputValue" @click="isOpenCountyList ? isOpenCountyList = false : isOpenCountyList = true" type="text" placeholder="شهر" readonly class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                                    <!-- Provinces Drop Down -->
                                    <CountiesDropDown @countySelect="changeCountyValue" :class="isOpenCountyList ? 'is-show' : 'is-hidden'"/>
                                </div>
                                <div class="size-full">
                                    <textarea placeholder="آدرس دقیق" class="w-full resize-none lg:h-full h-20 md:px-4 px-2 py-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm"></textarea>
                                </div> 
                            </div>
                            <div class="w-full h-40 bg-Primary/10 rounded-sm flex items-center justify-center text-sm md:text-xl font-Dana-SemiBold text-Primary">
                                <span>گوگل مپ در دسترس نیست</span>
                            </div>
                        </div>
                    </div>      
                    <!-- Property Information -->
                    <div class="md:mt-12 mt-6 flex flex-col md:gap-y-6 gap-y-4">
                        <!-- Title -->
                        <span class="text-sm md:text-lg text-gray-800 font-Dana">مشخصات ملک متقاضی</span>
                        <!-- Content -->
                        <div class="w-full flex items-center max-lg:flex-col md:gap-x-4 max-lg:gap-y-3">
                            <div class="w-full">
                                <input type="text" placeholder="نوع مالکیت" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                            </div>
                            <div class="w-full">
                                <input type="text" placeholder="مساحت ملک (متر مربع)" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                            </div>
                            <div class="w-full">
                                <input type="text" placeholder="سن بنا" class="w-full md:h-10 h-8 md:px-4 px-2 border outline-none border-gray-400 placeholder:text-gray-700 text-gray-800 font-Dana md:text-sm text-xs rounded-sm">
                            </div>
                        </div>
                    </div>         
                    <!-- Address Attributes -->
                    <div class="md:mt-12 mt-6 flex flex-col md:gap-y-6 gap-y-4">
                        <!-- Title -->
                        <span class="text-sm md:text-lg text-gray-800 font-Dana">امکانات ملک متقاضی</span>
                        <!-- Content -->
                        <div class="w-full flex items-start justify-between max-lg:flex-col max-lg:gap-y-4">
                            <div class="w-full flex flex-col md:gap-y-4 gap-y-2">
                                <span class="text-gray-700 font-Dana md:text-base text-sm">ملک متقاضی:</span>
                                <div class="flex md:gap-x-20 max-lg:justify-between">
                                    <div class="flex items-start flex-col gap-y-2">
                                        <input type="checkbox" id="has‌BusinessLicense" hidden>
                                        <label for="has‌BusinessLicense" class="flex items-center gap-x-2 text-gray-700 font-Dana md:text-sm text-xs">
                                            <span class="md:size-4 size-3 border border-Primary rounded-xs "></span>
                                            <span>پروانه کسب دارد.</span>
                                        </label>
                                        <input type="checkbox" id="hasKitchen" hidden>
                                        <label for="hasKitchen" class="flex items-center gap-x-2 text-gray-700 font-Dana md:text-sm text-xs">
                                            <span class="md:size-4 size-3 border border-Primary rounded-xs "></span>
                                            <span>آشپزخانه دارد.</span>
                                        </label>
                                    </div>
                                    <div class="flex items-start flex-col gap-y-2">
                                        <input type="checkbox" id="hasParking" hidden>
                                        <label for="hasParking" class="flex items-center gap-x-2 text-gray-700 font-Dana md:text-sm text-xs">
                                            <span class="md:size-4 size-3 border border-Primary rounded-xs "></span>
                                            <span>پارکینگ دارد.</span>
                                        </label>
                                        <input type="checkbox" id="hasWareHouse" hidden>
                                        <label for="hasWareHouse" class="flex items-center gap-x-2 text-gray-700 font-Dana md:text-sm text-xs">
                                            <span class="md:size-4 size-3 border border-Primary rounded-xs "></span>
                                            <span>انبار دارد.</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-y-1">
                                <span class="text-gray-700 font-Dana md:text-base text-sm">تصاویر ملک</span>
                                <input type="file" @change="addFile($event)" hidden multiple ref="fileInput">
                                <div @click="openFileInput" v-if="files.length <= 0" class="cursor-pointer group flex items-center justify-center border border-gray-400 rounded-sm md:h-48 h-40">
                                    <div class="flex flex-col items-center gap-y-2 text-gray-700 font-Dana-Medium">
                                        <svg class="md:size-16 size-12 group-hover:text-Primary">
                                            <use href="#folder-pluse"></use>
                                        </svg>
                                        <span class="md:text-sm text-xs group-hover:text-gray-800">تصاویری از ملک را بارگذاری کنید...</span>
                                    </div>
                                </div>
                                <div v-else class="flex items-center justify-center md:gap-x-4 gap-x-3 border border-gray-400 rounded-sm md:h-48 h-40">
                                    <button @click="openFileInput" class="outline-none h-8 md:h-10 flex items-center justify-center border border-Primary text-Primary rounded-sm md:px-6.5 px-4">
                                        <svg class="md:size-6 size-4">
                                            <use href="#folder-pluse"></use>
                                        </svg>
                                    </button>
                                    <div class="md:max-w-64.5 max-w-40 flex items-center justify-center rounded-sm overflow-auto whitespace-nowrap space-x-2 px-1 md:px-1 hidden-scroll w-full md:h-10 h-8 bg-gray-100 border border-gray-400">
                                        <!-- File Name Selected -->
                                        <span v-for="file in files" :key="file.name" class="md:text-sm text-xs text-gray-700"> {{ file.name }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
input:checked + label span:first-child { 
    background-color: var(--color-Primary);
}
input:checked + label span:last-child { 
    color: var(--color-Primary);
}
</style>