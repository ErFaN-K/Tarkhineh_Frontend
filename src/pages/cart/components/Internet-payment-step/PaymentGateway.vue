<template>
    <!-- Payment Gateway -->
    <div class="border border-gray-400 rounded-lg p-4 md:p-6 flex md:items-start max-md:flex-col max-md:gap-y-4 md:gap-x-12.5">
        <!-- Title ( For Mobile ) -->
        <div class="md:hidden w-full flex items-center gap-x-1 pb-2 border-b border-b-gray-400 text-gray-800">
            <svg class="size-4">
                <use href="#cart"></use>
            </svg>
            <span class="text-sm font-Dana">درگاه پرداخت</span>
        </div>
        <!-- Title ( For Desktop ) -->
        <div class="max-md:hidden flex items-center gap-x-2 text-gray-800">
            <svg class="size-6">
                <use href="#cart"></use>
            </svg>
            <span class="text-base font-Dana">درگاه پرداخت</span>
        </div>
        <!-- Bank -->
        <div class="flex flex-col gap-y-2">
            <div class="flex items-center max-md:justify-center gap-x-2 md:gap-x-4">
                <div class="size-16 md:size-24 border border-gray-400 rounded-sm bank-logo--active">
                    <img src="/src/assets/images/avatars/Bank-Logo.png" alt="">
                </div>
                <div class="size-16 md:size-24 border border-gray-400 rounded-sm">
                    <img src="/src/assets/images/avatars/Bank-Logo.png" alt="">
                </div>
                <div class="size-16 md:size-24 border border-gray-400 rounded-sm">
                    <img src="/src/assets/images/avatars/Bank-Logo.png" alt="">
                </div>
            </div>
            <div class="flex flex-col gap-y-1 items-center text-gray-700 font-Dana">
                <span class="text-custom md:text-xs">پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌</span>
                <span class="text-custom">(لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)</span>
            </div>
        </div>
    </div>
</template>