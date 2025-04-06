<template>
    <div class="shadow-xl fixed inset-0 m-auto bg-white md:rounded-lg md:border md:border-gray-400 md:max-w-98 w-full max-md:h-svh h-max md:p-6 z-102">
        <!-- Tarkhineh Logo -->
        <div class="flex items-center justify-center md:mb-4">
            <svg class="text-Primary md:h-8 md:w-25.5">
                <use href="#logo-type"></use>
            </svg>
        </div>
        <!-- Submit Phone Number -->
        <div class="hidden">
            <!-- Title ( For Submit Phone Number ) -->
            <div class="flex items-center flex-col md:gap-y-1 md:font-Dana md:mb-6">
                <span class="md:text-base text-gray-800">ورود / ثبت ‌نام</span>
                <p class="md:text-xs text-gray-700 text-center">با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.</p>
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
        <button class="w-full h-10 rounded-sm flex items-center justify-center disabled:bg-gray-300 disabled:text-gray-400 bg-Primary text-white font-Dana text-base md:mb-4 mb-2">ادامه</button>
        </div>
        <!-- Submit Otp Code -->
        <div>
            
        </div>
        <!-- Read Rules Before Login & Signup -->
        <span class="block text-center text-custom font-Dana text-gray-800">ورود و عضویت در ترخینه به منزله قبول <a href="#" class="text-Primary">قوانین و مقررات</a> است.</span>
    </div>
</template>