<script setup>
import RestaurantAttributeBox from "./RestaurantAttributeBox.vue";
</script>

<template>
  <section class="mb-4 md:mb-12 about-restaurant-section">
    <div class="py-4 background-config about-restaurant__background md:py-12">
      <div class="container">
        <div
          class="flex flex-wrap items-center justify-between max-xl:justify-center gap-y-6"
        >
          <div class="text-white">
            <!-- Section Title -->
            <h2 class="mb-2 text-base md:mb-6 font-Morabba-Bold md:text-2xl">
              رستوران‌های زنجیره‌ای ترخینه
            </h2>
            <!-- Description -->
            <p
              class="max-w-full mb-2 text-sm text-justify md:text-xl font-Dana xl:max-w-150 md:mb-4"
            >
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            <div class="flex justify-end">
              <a
                href="#"
                class="flex items-center justify-center h-8 border border-white rounded-sm gap-x-2 w-38 md:h-10 md:w-46"
              >
                <span class="text-xs md:text-base font-Dana md:font-Dana-Medium"
                  >اطلاعات بیشتر</span
                >
                <svg class="md:size-6 size-4">
                  <use href="#chevron-left"></use>
                </svg>
              </a>
            </div>
          </div>
          <!-- Restaurant Attributes -->
          <div
            class="grid grid-cols-2 gap-x-12 gap-y-4 md:gap-x-6 md:gap-y-2 max-xl:place-items-center max-xl:w-full"
          >
            <RestaurantAttributeBox iconName="user" content="پرسنلی مجرب و حرفه‌ای" />
            <RestaurantAttributeBox iconName="chart" content="کیفیت بالای غذاها" />
            <RestaurantAttributeBox iconName="home" content="محیطی دلنشین و آرام" />
            <RestaurantAttributeBox iconName="calender" content="منوی متنوع" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
