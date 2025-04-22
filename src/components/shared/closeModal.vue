<template>
    <div class="is-hidden fixed inset-0 m-auto z-100 px-5 flex items-center justify-center">
        <div class="max-w-98 w-full bg-white md:rounded-lg rounded-sm overflow-hidden shadow-xl">
            <!-- Popop Header -->
            <div class="relative flex items-center justify-center py-6 bg-gray-100">
                <!-- Close Icon -->
                <span class="cursor-pointer absolute top-6.5 left-6.5">
                    <svg class="size-6.5 text-gray-700">
                        <use href="#x-mark"></use>
                    </svg>
                </span>
                <!-- Popop Title -->
                <h2 class="md:font-Morabba-Bold font-Morabba-Medium md:text-xl text-sm">تایتل تستی</h2>
            </div>
            <!-- Popop Body -->
            <div class="md:pt-8 md:pb-6 py-4 flex flex-col gap-y-8 items-center">
                <!-- Popop Message -->
                <span class="text-xs md:text-base text-gray-800 font-Dana">یک متن تستی برای سوال</span>
                <!-- Buttons -->
                <div class="flex gap-x-4 md:gap-x-5">
                    <!-- Green Button -->
                    <button class="w-31.75 md:w-29.25 cursor-pointer text-xs md:text-base font-Dana md:font-Dana-Medium h-8 md:h-10 rounded-sm md:rounded-lg border border-Primary flex items-center justify-center hover:bg-Primary/10 text-Primary">متن تستی</button>
                    <!-- Red Button -->
                    <button class="w-31.75 md:w-29.25 cursor-pointer text-xs md:text-base font-Dana md:font-Dana-Medium h-8 md:h-10 rounded-sm md:rounded-lg bg-Error-EXLight flex items-center justify-center hover:bg-Error/10 text-Error">متن تستی</button>
                </div>
            </div>
        </div>
    </div>
</template>