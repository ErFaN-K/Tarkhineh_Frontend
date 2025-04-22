<template>  
    <div class="md:py-4 md:px-2 md:border md:rounded-lg rounded-sm max-md:rounded-none border-gray-400">
        <!-- User Profile & User Information -->
        <div class="flex md:items-end items-center md:px-1 md:gap-x-5 gap-x-2 mb-2">
            <!-- User Profile -->
            <div class="md:size-22 size-12 rounded-full border border-gray-400 overflow-hidden">
                <img src="/src/assets/images/avatars/Default-User-Profile.png" alt="User Profile" class="size-full object-cover">
            </div>
            <!-- User Information -->
            <div class="font-Dana flex flex-col items-start gap-y-1">
                <!-- Username -->
                <span class="text-sm md:text-base text-gray-800">آرزو محمدعلیزاده</span>
                <!-- User Phone -->
                <span class="text-custom md:text-xs text-gray-700" dir="ltr">۰۹۱۴ ۸۶۴ ۳۳۵۰</span>
            </div>
        </div>
        <!-- Dashboard Routes -->
        <div class="pt-2 border-t border-t-gray-700 flex flex-col md:gap-y-1">
            <!-- Route -->
            <a href="#" class="profile-panel__link--active h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-gray-800 font-Dana">
                <svg class="size-4 md:size-5">
                    <use href="#user"></use>
                </svg>
                <span class="text-xs md:text-base">پروفایل</span>
            </a>
            <a href="#" class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-gray-800 font-Dana">
                <svg class="size-4 md:size-5">
                    <use href="#order"></use>
                </svg>
                <span class="text-xs md:text-base">پیگیری سفارشات</span>
            </a>
            <a href="#" class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-gray-800 font-Dana">
                <svg class="size-4 md:size-5">
                    <use href="#heart"></use>
                </svg>
                <span class="text-xs md:text-base">علاقمندی‌ها</span>
            </a>
            <a href="#" class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-gray-800 font-Dana">
                <svg class="size-4 md:size-5">
                    <use href="#location"></use>
                </svg>
                <span class="text-xs md:text-base">آدرس‌های من</span>
            </a>
            <a href="#" class="h-10 md:h-9.5 flex items-center gap-x-1 px-2 text-Error font-Dana">
                <svg class="size-4 md:size-5 rotate-180">
                    <use href="#exit"></use>
                </svg>
                <span class="text-xs md:text-base">خروج</span>
            </a>
        </div>
    </div>
</template>