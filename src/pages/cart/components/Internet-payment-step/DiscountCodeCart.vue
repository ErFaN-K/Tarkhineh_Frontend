<template>
    <!-- Discount Code Cart -->
    <div class="flex max-md:flex-col max-md:items-start items-center md:gap-x-5 xl:gap-x-20 max-xl:gap-x-6 max-md:gap-y-4 md:px-6 p-4 md:py-6 rounded-lg border border-gray-400">
        <!-- Header * Title -->
        <div class="max-md:w-full max-md:pb-2 flex items-center gap-x-1 max-md:border-b max-md:border-gray-400 text-gray-800">
            <svg class="md:size-6 size-4">
                <use href="#truck"></use>
            </svg>
            <span class="font-Dana text-sm md:text-base">ثبت کد تخفیف</span>
        </div>
        <!-- Input & Submit Code -->
        <div class="max-md:w-full flex items-center gap-x-4 max-md:justify-between">   
            <div class="max-md:w-full relative">
                <input
                autocomplete="off"
                id="discount-code"
                placeholder=" "
                dir="ltr"
                type="text"
                class="max-md:w-full w-80 md:h-10 h-8.25 border border-gray-400 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
                />
                <label
                  for="discount-code"
                  class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-700 font-Dana md:text-sm text-xs"
                >کد تخفیف</label>
            </div>
            <!-- Submit Button -->
            <button class="max-md:shrink-0 cursor-pointer hover:bg-Primary/90 disabled:hover:bg-gray-400/90 disabled:cursor-not-allowed flex items-center justify-center h-8 md:h-10 px-2 md:px-6 rounded-sm disabled:bg-gray-400 text-white bg-Primary font-Dana md:font-Dana-Medium text-xs md:text-base">ثبت کد</button>
        </div>
    </div>
</template>