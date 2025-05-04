<template>
    <!-- In Person Method -->
    <div class="border border-gray-400 rounded-lg p-4 md:px-6 flex max-md:flex-col md:justify-between max-md:gap-y-4 md:items-center">
        <!-- Title ( For Mobile ) -->
        <div class="md:hidden w-full flex items-center gap-x-1 pb-2 border-b border-b-gray-400 text-gray-800">
            <svg class="size-4">
                <use href="#location"></use>
            </svg>
            <span class="text-sm font-Dana">آدرس شعبه اکباتان</span>
        </div>
        <!-- Branch Information ( For Mobile ) -->
        <div class="md:hidden flex flex-col gap-y-1 text-gray-700 font-Dana text-custom">
            <span class="line-clamp-1">شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
            <div class="flex flex-col">
                <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                <span>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </span>
            </div>
            <span class="line-clamp-1">ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</span>
        </div>

        <!-- Branch Information ( For Desktop ) -->
        <div class="max-md:hidden flex flex-col gap-y-6">
            <div class="flex items-center gap-x-1 text-gray-800 text-base font-Dana">
                <svg class="size-6">
                    <use href="#location"></use>
                </svg>
                <span>آدرس شعبه اکباتان</span>
            </div>
            <!-- Branch Information ( For Desktop ) -->
            <div class="max-md:hidden flex flex-col gap-y-1 text-gray-700 font-Dana text-xs">
                <span class="line-clamp-1">شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
                <div class="flex flex-col">
                    <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                    <span>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </span>
                </div>
                <span class="line-clamp-1">ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</span>
            </div>
            <!-- Go To Map -->
            <button class="mx-auto font-Dana h-8 w-38 rounded-sm border text-xs border-gray-700 hover:bg-gray-700/10 cursor-pointer text-gray-700">نقشه ای وجود ندارد</button>
        </div>
        <!-- Google Map -->
        <div class="max-md:hidden max-w-66 w-full h-51 bg-Primary/10 rounded-sm flex items-center justify-center text-sm font-Dana-SemiBold text-Primary">
            <span>گوگل مپ در دسترس نیست</span>
        </div>
    </div>
</template>