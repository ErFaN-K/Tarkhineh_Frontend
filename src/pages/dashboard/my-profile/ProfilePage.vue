<script setup>
import { ref } from 'vue';
import { datePicker } from '@/composables/useDatePicker'
import DatePicker from '@/components/shared/DatePicker.vue'

const isDisabled = ref(true)
const { dateNumber, getDateFromCustomDatePicker, isOpenCustomDatePicker, showCustomDatePicker, hideCustomDatePicker } = datePicker()
</script>

<template>
    <div class="md:h-[calc(100vh-367px)] md:rounded-lg md:border md:border-gray-400 md:p-6">
      <!-- Title -->
      <div class="md:pb-2 md:border-b md:border-b-gray-400">
        <h4 class="text-gray-800 font-Dana-SemiBold md:text-xl text-base max-md:text-center"> {{ isDisabled ? 'پروفایل من' : 'ویرایش اطلاعات شخصی' }} </h4>
      </div>
      <!-- User Information -->
      <div class="md:mt-12 mt-6 xl:px-24.25 flex flex-col md:gap-y-6 gap-y-3">
        <!-- Row 1 -->
        <div class="flex items-center md:gap-x-4 max-md:gap-y-3 max-md:flex-col">
          <!-- First Name -->
          <div class="w-full">
            <div class="relative">
              <input
                autocomplete="off"
                id="firstName"
                placeholder=" "
                dir="ltr"
                type="text"
                :disabled="isDisabled"
                class="disabled:border-gray-400 disabled:text-gray-400 w-full md:h-10 h-8.25 border border-gray-800 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
              />
              <label
                for="firstName"
                :class="isDisabled ? '!text-gray-400' : ''"
                class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana md:text-sm text-custom"
              >نام</label>
            </div>
          </div>
  
          <!-- Last Name -->
          <div class="w-full">
            <div class="relative">
              <input
                autocomplete="off"
                id="lastName"
                placeholder=" "
                dir="ltr"
                type="text"
                :disabled="isDisabled"
                class="disabled:border-gray-400 disabled:text-gray-400 w-full md:h-10 h-8.25 border border-gray-800 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
              />
              <label
                for="lastName"
                :class="isDisabled ? '!text-gray-400' : ''"
                class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana md:text-sm text-custom"
              >نام خانوادگی</label>
            </div>
          </div>
        </div>
        <!-- Row 2 -->
        <div class="flex items-center md:gap-x-4 max-md:gap-y-3 max-md:flex-col">
          <!-- Email -->
          <div class="w-full">
            <div class="relative">
              <input
                autocomplete="off"
                id="emailAddress"
                placeholder=" "
                dir="ltr"
                type="text"
                :disabled="isDisabled"
                class="disabled:border-gray-400 disabled:text-gray-400 w-full md:h-10 h-8.25 border border-gray-800 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
              />
              <label
                for="emailAddress"
                :class="isDisabled ? '!text-gray-400' : ''"
                class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana md:text-sm text-custom"
              >آدرس ایمیل</label>
            </div>
          </div>
  
          <!-- Phone Number -->
          <div class="w-full">
            <div class="relative">
              <input
                autocomplete="off"
                id="userPhoneNumber"
                placeholder=" "
                dir="ltr"
                type="text"
                :disabled="isDisabled"
                class="disabled:border-gray-400 disabled:text-gray-400 w-full md:h-10 h-8.25 border border-gray-800 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
              />
              <label
                for="userPhoneNumber"
                :class="isDisabled ? '!text-gray-400' : ''"
                class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana md:text-sm text-custom"
              >شماره همراه</label>
            </div>
          </div>
        </div>
        <!-- Row 3 -->
        <div class="flex items-center md:gap-x-4 max-md:gap-y-3 max-md:flex-col">
          <!-- Birthday -->
          <div class="w-full">
            <div class="relative">
              <input
                autocomplete="off"
                id="userBirthday"
                placeholder=" "
                type="text"
                :disabled="isDisabled"
                readonly
                @click="showCustomDatePicker" 
                class="disabled:border-gray-400 disabled:text-gray-400 w-full md:h-10 h-8.25 border border-gray-800 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
              />
              <label
                for="userBirthday"
                :class="isDisabled ? '!text-gray-400' : ''"
                class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana md:text-sm text-custom"
              >تاریخ تولد <span class="text-custom"> (اختیاری)</span></label>
              <DatePicker @closeDatePicker="hideCustomDatePicker" @getDate="getDateFromCustomDatePicker" :class="!isOpenCustomDatePicker ? 'is-hidden' : 'is-show'"/>
            </div>
          </div>
  
          <!-- Username -->
          <div class="w-full">
            <div class="relative">
              <input
                autocomplete="off"
                id="userName"
                placeholder=" "
                dir="ltr"
                type="text"
                :disabled="isDisabled"
                class="disabled:border-gray-400 disabled:text-gray-400 w-full md:h-10 h-8.25 border border-gray-800 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
              />
              <label
                for="userName"
                :class="isDisabled ? '!text-gray-400' : ''"
                class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana md:text-sm text-custom"
              >نام نمایشی</label>
            </div>
          </div>
        </div>
        <!-- Edit Information Button -->
        <button @click="isDisabled = false" v-if="isDisabled" class="max-md:mt-3 mx-auto max-w-38 w-full md:max-w-69.5 md:h-10 h-8 flex items-center justify-center gap-x-1 md:gap-x-2 rounded-sm border border-Primary text-Primary hover:bg-Primary/10 cursor-pointer">
          <svg class="size-4 md:size-6">
              <use href="#pencil-square"></use>
          </svg>
          <span class="text-xs md:text-base md:font-Dana-Medium font-Dana">ویرایش اطلاعات شخصی</span>
        </button>
        <!-- Save Information Data -->
        <div v-else class="max-md:mt-3 flex w-full gap-x-4 justify-end">
          <!-- Cancele Button -->
          <button @click="isDisabled = true; isOpenCustomDatePicker = false" class="cursor-pointer md:w-32.5 w-full h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-Primary border border-Primary rounded-sm hover:bg-Primary/10">انصراف</button>
          <!-- Save Button -->
          <button class="cursor-pointer md:w-32.5 w-full h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base text-white bg-Primary rounded-sm hover:bg-Primary/90">ذخیره اطلاعات</button>
        </div>
      </div>
    </div>
  </template>
  