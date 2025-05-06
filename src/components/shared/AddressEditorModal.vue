<script setup lang="ts">
    import AppIcon from '../ui/AppIcon.vue';
</script>

<template>
    <div class="is-hidden fixed inset-0 m-auto z-100 flex items-center justify-center">
        <div class="shadow-xl md:max-w-150 w-full max-md:h-full md:bg-white max-md:pt-6 bg-transparent max-md:bg-white md:rounded-lg md:overflow-hidden">
            <!-- Modal Header -->
            <div class="md:py-6 md:bg-gray-300 relative">
                <!-- Modal Title -->
                <h2 class="md:text-xl text-base font-Morabba-Bold text-center">ثبت آدرس</h2>
                <!-- Close Icon -->
                <span class="absolute cursor-pointer md:top-5.5 top-0 md:left-6 left-4">
                  <AppIcon className="size-6 md:size-10 text-gray-700" iconName="x-mark"/>
                </span>
            </div>
            <!-- Modal Main -->
            <div class="md:mt-6 mt-3 md:px-5 px-6 md:pb-6.5 pb-6 flex flex-col">
              <!-- Address Title -->
              <div class="relative md:mb-4 mb-3">
                <input
                  autocomplete="off"
                  id="addressTitle"
                  placeholder=" "
                  dir="ltr"
                  type="text"
                  class="w-full md:h-10 h-8.25 border border-gray-400 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
                />
                <label
                  for="addressTitle"
                  class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-700 font-Dana md:text-sm text-xs"
                >عنوان آدرس</label>
              </div>
              <!-- Personal Address CheckBox -->
              <div class="mb-2">
                <input type="checkbox" id="hasWareHouse" hidden>
                <label for="hasWareHouse" class="flex items-center gap-x-2 text-gray-700 font-Dana md:text-sm text-xs">
                    <span class="md:size-4 size-3 border border-Primary rounded-xs "></span>
                    <span>تحویل گیرنده خودم هستم.</span>
                </label>                
              </div>
              <!-- Phone Number -->
              <div class="relative md:mb-4 mb-3">
                <input
                  autocomplete="off"
                  id="phoneNumber"
                  placeholder=" "
                  dir="ltr"
                  type="text"
                  class="w-full md:h-10 h-8.25 border border-gray-400 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
                />
                <label
                  for="phoneNumber"
                  class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-700 font-Dana md:text-sm text-xs"
                >شماره همراه</label>
              </div>
              <!-- Exact Address -->
              <div class="relative md:mb-4 mb-6">
                <textarea
                  autocomplete="off"
                  id="fullAddress"
                  placeholder=" "
                  class="resize-none pt-4 w-full md:h-45.5 h-25 border border-gray-400 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
                ></textarea>
                <label
                  for="fullAddress"
                  class="peer-focus:text-Primary peer-focus:!-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-700 font-Dana md:text-sm text-xs"
                >آدرس دقیق شما</label>
              </div> 
              <!-- Buttons -->
              <div class="flex items-center gap-x-4 md:gap-x-5">
                <button class="basis-1/2 cursor-pointer h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base bg-white text-Primary rounded-sm">ویرایش آدرس انتخابی</button>
                <button class="basis-1/2 cursor-pointer h-8 md:h-10 flex items-center justify-center font-Dana md:font-Dana-Medium text-xs md:text-base bg-Primary text-white rounded-sm hover:bg-Primary/90">ثبت آدرس</button>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input:checked + label span:first-child { 
    background-color: var(--color-Primary);
}
input:checked + label span:last-child { 
    color: var(--color-Primary);
}
</style>