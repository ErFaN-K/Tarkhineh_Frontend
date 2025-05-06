<script setup lang="ts">
import AppIcon from '../ui/AppIcon.vue';
</script>

<template>
  <div class="is-hidden fixed inset-0 m-auto z-100 md:px-5 flex items-center justify-center">
    <div
      class="max-md:flex max-md:flex-col max-md:justify-center shadow-xl bg-white md:rounded-lg md:border md:border-gray-400 md:max-w-98 w-full max-md:h-svh h-max md:p-6 p-5"
    >
      <!-- Tarkhineh Logo -->
      <div class="flex items-center justify-center md:mb-4 mb-20">
        <AppIcon className="text-Primary md:h-8 md:w-25.5 w-37 h-17.75" iconName="logo-type"/>
      </div>
      <!-- Submit Phone Number -->
      <div v-if="false">
        <!-- Title ( For Submit Phone Number ) -->
        <div class="flex items-center flex-col md:gap-y-1 gap-y-6 font-Dana mb-6">
          <span class="text-base text-gray-800 font-Dana-SemiBold"
            >ورود / ثبت ‌نام</span
          >
          <p class="md:text-xs text-sm text-gray-700 text-center">
            با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
          </p>
        </div>
        <!-- Input -->
        <div class="relative font-Dana mb-4">
          <input
            autocomplete="off"
            id="phoneNumber"
            placeholder=" "
            dir="ltr"
            type="text"
            class="w-full h-10 border border-gray-800 rounded-sm md:text-base md:px-4 font-Dana outline-none peer focus:border-Primary"
          />
          <!-- Label -->
          <label
            for="phoneNumber"
            class="peer-focus:text-Primary peer-focus:-top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana text-xs"
            >شماره همراه</label
          >
        </div>
        <!-- Submit Button -->
        <button
          class="cursor-pointer w-full h-10 hover:bg-Primary/90 rounded-sm flex items-center justify-center disabled:bg-gray-300 disabled:text-gray-400 bg-Primary text-white font-Dana text-base"
        >
          ادامه
        </button>
      </div>
      <!-- Verify Otp Code -->
      <div v-else>
        <!-- Title ( For Verify OTP Code ) -->
        <div class="flex items-center flex-col md:gap-y-1 gap-y-6 font-Dana mb-6">
          <span class="text-base text-gray-800 font-Dana-SemiBold">کد تایید</span>
          <p class="md:text-xs text-sm text-gray-700 text-center">
            کد تایید پنج‌رقمی به شماره *********** ارسال شد.
          </p>
        </div>
        <!-- Inputs & Code Resend & Edit Phone Number-->
        <div class="flex flex-col gap-y-2 mb-4 md:mb-5">
          <!-- Inputs -->
          <div class="flex items-center justify-between gap-x-4 md:h-10 h-8">
            <input
              type="text"
              maxlength="1"
              class="size-full border border-gray-700 outline-none focus:border-Primary rounded-sm text-center text-gray-800 font-Dana text-xs"
            />
            <input
              type="text"
              maxlength="1"
              class="size-full border border-gray-700 outline-none focus:border-Primary rounded-sm text-center text-gray-800 font-Dana text-xs"
            />
            <input
              type="text"
              maxlength="1"
              class="size-full border border-gray-700 outline-none focus:border-Primary rounded-sm text-center text-gray-800 font-Dana text-xs"
            />
            <input
              type="text"
              maxlength="1"
              class="size-full border border-gray-700 outline-none focus:border-Primary rounded-sm text-center text-gray-800 font-Dana text-xs"
            />
            <input
              type="text"
              maxlength="1"
              class="size-full border border-gray-700 outline-none focus:border-Primary rounded-sm text-center text-gray-800 font-Dana text-xs"
            />
          </div>
          <!-- Code Resend & Edit Phone Number -->
          <div class="flex items-center justify-between font-Dana text-xs">
            <!-- Code Resend -->
            <div class="">
              <!-- Time Remaining-->
              <div v-if="true" class="flex items-center gap-x-0.5 text-gray-700">
                <AppIcon className="size-4" iconName="clock"/>
                <!-- Time -->
                <span>۱:۵۹</span>
                <span>تا دریافت مجدد کد</span>
              </div>
              <!-- Resend Code -->
              <span v-else class="text-Primary cursor-pointer">دریافت مجدد کد</span>
            </div>
            <!-- Edit Phone Number -->
            <span class="text-Primary cursor-pointer">ویرایش شماره</span>
          </div>
        </div>
        <button
          class="cursor-pointer w-full h-10 hover:bg-Primary/90 rounded-sm flex items-center justify-center disabled:bg-gray-300 disabled:text-gray-400 bg-Primary text-white font-Dana text-base"
        >
          ادامه
        </button>
      </div>
      <!-- Read Rules Before Login & Signup -->
      <span
        v-if="false"
        class="block text-center text-custom font-Dana text-gray-800 md:mt-4 mt-2"
        >ورود و عضویت در ترخینه به منزله قبول
        <router-link :to="{ name: 'Faq|Rules' }" class="text-Primary">قوانین و مقررات</router-link> است.</span
      >
      <!-- Arrows -->
      <span class="md:hidden cursor-pointer absolute md:top-6 md:left-6 top-5 left-5">
        <AppIcon className="text-gray-700 size-6" iconName="x-mark"/>
      </span>
      <span class="md:hidden cursor-pointer absolute md:top-6 md:right-6 top-5 right-5" v-if="true">
        <AppIcon className="text-gray-700 size-6 rotate-180" iconName="chevron-left-mini"/>
      </span>
    </div>
  </div>
</template>
