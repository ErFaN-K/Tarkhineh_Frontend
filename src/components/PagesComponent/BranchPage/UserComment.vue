<template>
  <div
    class="relative flex items-center gap-x-2 md:gap-x-3 py-5 px-4 md:py-6 md:px-8 bg-white border border-gray-400 rounded-sm"
  >
    <!-- User Info -->
    <div class="flex flex-col shrink-0 items-center md:gap-y-2 gap-y-1">
      <!-- User Profile -->
      <div class="size-14 md:size-24 rounded-full overflow-hidden">
        <img
          src="/src/assets/images/User-Profile.png"
          alt="User Profile"
          class="size-full object-cover"
        />
      </div>
      <!-- Comment Data -->
      <div
        class="flex flex-col gap-y-0.5 text-gray-700 font-Dana text-custom md:text-sm text-center"
      >
        <!-- Username -->
        <span>آرزو محمدعلیزاده</span>
        <!-- Comment Date -->
        <span>۲۳ اسفند ۱۴۰۱</span>
      </div>
    </div>
    <!-- User Comment -->
    <p
      class="text-gray-800 font-Dana text-custom md:text-base text-justify md:line-clamp-3 line-clamp-4"
    >
      از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو
      اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.
      از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو
      اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.
      از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو
      اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.
    </p>
    <!-- User Rate -->
    <div
      class="absolute bottom-2 left-4 md:bottom-4 md:left-8 flex items-center gap-x-1 text-gray-700 font-Dana text-base"
    >
      <svg class="size-3 md:size-4 text-Warning-Light">
        <use href="#star"></use>
      </svg>
      <span>5</span>
    </div>
  </div>
</template>
