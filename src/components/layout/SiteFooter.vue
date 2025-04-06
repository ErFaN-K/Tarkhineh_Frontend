<script setup></script>

<template>
  <footer>
    <div class="background-config footer__background">
      <div class="container">
        <div
          class="pt-4 md:py-8 pb-5.5 flex items-start gap-x-31.75 max-xl:gap-x-16 max-md:gap-x-20"
        >
          <!-- Quick Access -->
          <div class="text-white max-w-46 w-full max-md:max-w-22">
            <h4
              class="text-xl max-md:text-xs font-Morabba-Bold max-md:font-Morabba-Light mb-2 md:mb-4"
            >
              دسترسی آسان
            </h4>
            <!-- Links -->
            <div
              class="flex flex-col gap-y-4 max-md:gap-y-1 pr-3 md:pr-2 font-Dana text-custom md:text-sm"
            >
              <a href="#">پرسش‌های متداول</a>
              <a href="#">قوانین ترخینه</a>
              <a href="#">حریم خصوصی</a>
              <!-- Restaurant Social Media -->
              <div class="flex items-center gap-x-4 max-md:gap-x-2">
                <a href="#">
                  <svg class="size-4 md:size-6">
                    <use href="#twitter-icon"></use>
                  </svg>
                </a>
                <a href="#">
                  <svg class="size-4 md:size-6">
                    <use href="#instagram-icon"></use>
                  </svg>
                </a>
                <a href="#">
                  <svg class="size-4 md:size-6">
                    <use href="#telegram-icon"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <!-- Branch -->
          <div class="text-white max-w-46 w-full max-md:max-w-22">
            <h4
              class="text-xl max-md:text-xs font-Morabba-Bold max-md:font-Morabba-Light mb-2 md:mb-4"
            >
              شعبه های ترخینه
            </h4>
            <!-- Links -->
            <div
              class="flex flex-col gap-y-4 max-md:gap-y-1 pr-3 md:pr-2 font-Dana text-custom md:text-sm"
            >
              <a href="#">شعبه اکباتان</a>
              <a href="#">شعبه چالوس</a>
              <a href="#">شعبه اقدسیه</a>
              <a href="#">شعبه ونک</a>
            </div>
          </div>
          <!-- Form -->
          <div class="text-white w-full max-lg:hidden">
            <h4
              class="text-xl max-md:text-xs font-Morabba-Bold max-md:font-Morabba-Light mb-2 md:mb-4"
            >
              تماس با ما
            </h4>
            <!-- Form  -->
            <form action="#" method="#">
              <div
                class="flex gap-x-6.5 mb-2 text-white font-Dana text-sm w-full pb-5"
              >
                <!-- Right Inputs -->
                <div class="w-full flex flex-col gap-y-3">
                  <div class="h-10 flex items-center">
                    <input
                      type="text"
                      class="size-full border border-gray-700 outline-none px-3 rounded-sm placeholder:text-white"
                      placeholder="نام و نام خانوادگی"
                    />
                  </div>
                  <div class="h-10 flex items-center">
                    <input
                      type="text"
                      class="size-full border border-gray-700 outline-none px-3 rounded-sm placeholder:text-white"
                      placeholder="شماره تماس"
                    />
                  </div>
                  <div class="h-10 flex items-center">
                    <input
                      type="text"
                      class="size-full border border-gray-700 outline-none px-3 rounded-sm placeholder:text-white"
                      placeholder="آدرس ایمیل (اختیاری)"
                    />
                  </div>
                </div>
                <!-- Left Input -->
                <div class="w-full">
                  <textarea
                    class="size-full border border-gray-700 outline-none px-3 py-4 rounded-sm placeholder:text-white resize-none custom-scroll"
                    placeholder="پیام شما"
                  ></textarea>
                </div>
              </div>
              <div class="w-full flex justify-end">
                <button
                  type="submit"
                  class="w-45.75 h-10 rounded-sm border border-gray-700 font-Dana text-sm"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
