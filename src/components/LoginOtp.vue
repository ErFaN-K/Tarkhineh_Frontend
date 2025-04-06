<template>
    <div class="max-md:flex max-md:flex-col max-md:justify-center shadow-xl fixed inset-0 m-auto bg-white md:rounded-lg md:border md:border-gray-400 md:max-w-98 w-full max-md:h-svh h-max md:p-6 p-5 z-102">
        <!-- Tarkhineh Logo -->
        <div class="flex items-center justify-center md:mb-4 mb-20">
            <svg class="text-Primary md:h-8 md:w-25.5 w-37 h-17.75">
                <use href="#logo-type"></use>
            </svg>
        </div>
        <!-- Submit Phone Number -->
        <div v-if="false">
            <!-- Title ( For Submit Phone Number ) -->
            <div class="flex items-center flex-col md:gap-y-1 gap-y-6 font-Dana mb-6">
                <span class="text-base text-gray-800 font-Dana-SemiBold">ورود / ثبت ‌نام</span>
                <p class="md:text-xs text-sm text-gray-700 text-center">با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.</p>
            </div>
            <!-- Input -->
            <div class="relative font-Dana">
                <input autocomplete="off" id="phoneNumber" placeholder=" " dir="ltr" type="text" class="w-full h-10 border border-gray-800 rounded-sm md:text-base md:px-4 font-Dana outline-none peer focus:border-Primary">
                <!-- Label -->
                <label for="phoneNumber" class="peer-focus:text-Primary peer-focus:-top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4  absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana text-xs transition-all">شماره همراه</label>
            </div>
            <!-- Error Alert -->
            <div class="opacity-0 invisible transition-all flex items-center gap-x-1 my-1 text-Error">
                <!-- Error Icon -->
                <svg class="size-4">
                    <use href="#warning"></use>
                </svg>
                <!-- Error Message -->
                <span class="text-custom font-Dana">پر کردن این فیلد الزامی است!</span>
            </div>
            <!-- Submit Button -->
            <button class="w-full h-10 transition-all hover:bg-Primary/90 rounded-sm flex items-center justify-center disabled:bg-gray-300 disabled:text-gray-400 bg-Primary text-white font-Dana text-base">ادامه</button>
        </div>
        <!-- Verify Otp Code -->
        <div v-else>
            <!-- Title ( For Verify OTP Code ) -->
            <div class="flex items-center flex-col md:gap-y-1 gap-y-6 font-Dana mb-6">
                <span class="text-base text-gray-800 font-Dana-SemiBold">کد تایید</span>
                <p class="md:text-xs text-sm text-gray-700 text-center">کد تایید پنج‌رقمی به شماره *********** ارسال شد.</p>
            </div>
            <!-- Inputs & Code Resend & Edit Phone Number-->
            <div class="flex flex-col gap-y-2 mb-4 md:mb-5">
                <!-- Inputs -->
                <div class="flex items-center jusitfy-between gap-x-4 md:h-10 h-8">
                    <input type="text" maxlength="1" class="size-full border border-gray-700 outline-none focus:border-Primary transition-all rounded-sm text-center text-gray-800 font-Dana text-xs">
                    <input type="text" maxlength="1" class="size-full border border-gray-700 outline-none focus:border-Primary transition-all rounded-sm text-center text-gray-800 font-Dana text-xs">
                    <input type="text" maxlength="1" class="size-full border border-gray-700 outline-none focus:border-Primary transition-all rounded-sm text-center text-gray-800 font-Dana text-xs">
                    <input type="text" maxlength="1" class="size-full border border-gray-700 outline-none focus:border-Primary transition-all rounded-sm text-center text-gray-800 font-Dana text-xs">
                    <input type="text" maxlength="1" class="size-full border border-gray-700 outline-none focus:border-Primary transition-all rounded-sm text-center text-gray-800 font-Dana text-xs">
                </div>
                <!-- Code Resend & Edit Phone Number -->
                <div class="flex items-center justify-between font-Dana text-xs">
                    <!-- Code Resend -->
                    <div class="">
                        <!-- Time Remaining-->
                        <div v-if="false" class="flex items-center gap-x-0.5 text-gray-700">
                            <svg class="size-4">
                                <use href="#clock"></use>
                            </svg>
                            <!-- Time -->
                            <span>۱:۵۹</span>
                            <span>تا دریافت مجدد کد</span>
                        </div>
                        <!-- Resend Code -->
                        <span v-else class="text-Primary">دریافت مجدد کد</span>
                    </div>
                    <!-- Edit Phone Number -->
                    <span class="text-Primary">ویرایش شماره</span>
                </div>
            </div>
            <button class="w-full h-10 transition-all hover:bg-Primary/90 rounded-sm flex items-center justify-center disabled:bg-gray-300 disabled:text-gray-400 bg-Primary text-white font-Dana text-base">ادامه</button>
        </div>
        <!-- Read Rules Before Login & Signup -->
        <span v-if="false" class="block text-center text-custom font-Dana text-gray-800 md:mt-4 mt-2">ورود و عضویت در ترخینه به منزله قبول <a href="#" class="text-Primary">قوانین و مقررات</a> است.</span>
        <!-- Arrows -->
        <span class="cursor-pointer">
            <svg class="text-gray-700 absolute md:top-6 md:left-6 top-5 left-5 size-6">
                <use href="#x-mark"></use>
            </svg>
        </span>
        <span class="cursor-pointer" v-if="true">
            <svg class="text-gray-700 absolute md:top-6 md:right-6 top-5 right-5 size-6 rotate-180">
                <use href="#chevron-left-mini"></use>
            </svg>
        </span>
    </div>
</template>