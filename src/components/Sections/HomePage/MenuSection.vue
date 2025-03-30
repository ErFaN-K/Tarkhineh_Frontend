<script setup>
import MenuBox from '../../MenuBox.vue';
</script>

<template>
  <section class="mb-11.25 md:mb-18 menu-section">
    <div class="container">
        <!-- Search Box -->
        <div class="items-center justify-between hidden h-8 px-4 mb-6 text-gray-800 border border-gray-400 rounded-sm max-lg:flex">
            <input type="text" class="w-full text-sm border-none outline-none font-Dana placeholder:text-gray-800" placeholder="جستجو">
                <button>
                    <svg class="size-4">
                        <use href="#magnifying-glass"></use>
                    </svg>
                </button>
        </div>
        <!-- Title -->
        <h2 class="section__title">منوی رستوران</h2>
        <!-- Menu Box Container -->
        <div class="grid grid-cols-2 mt-18 md:mt-38 gap-y-26.5 md:gap-y-40 gap-x-4 lg:grid-cols-4">
            <MenuBox link="#" linkTitle="غذای اصلی"  imageSrc="src/assets/images/menu/Menu-Main-Food.png"/>
            <MenuBox link="#" linkTitle="پیش غذا"  imageSrc="src/assets/images/menu/Menu-Appetizer.png"/>
            <MenuBox link="#" linkTitle="دسر"  imageSrc="src/assets/images/menu/Menu-Dessert.png"/>
            <MenuBox link="#" linkTitle="نوشیدنی"  imageSrc="src/assets/images/menu/Menu-Drink.png"/>
        </div>
    </div>
  </section>
</template>
