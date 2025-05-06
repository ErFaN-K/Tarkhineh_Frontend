<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";
</script>

<template>
    <!-- Food Card ( Only For Food Card Container in Cart Page) -->
  <div class="shrink-0 rounded-lg border border-gray-400 flex overflow-hidden text-gray-800 bg-white">
        <!-- Food Image -->
        <div class="w-42.25 shrink-0">
          <img
            src="/src/assets/images/food/Food-Image.png"
            alt="Food Image"
            class="size-full object-cover"
          />
        </div>
        <!-- Food Information -->
        <div class="flex flex-col gap-y-2 w-full pl-4 py-4 pr-8">
            <!-- Food Title -->
            <div class="flex items-center justify-between">
                <h4 class="font-Morabba-Bold text-xl line-clamp-1">
                    کوفته برنجی
                </h4>
                <!-- Delete Product -->
                <span class="cursor-pointer">
                    <AppIcon className="size-6" iconName="trash"/>
                </span>
            </div>
            <!-- Food Recp... -->
            <div class="flex items-end justify-between gap-x-6">
                <p class="line-clamp-2 text-sm font-Dana h-10">پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده به همراه دوتا عرفان اضافه</p>
                <!-- Offer ( If Have It ) -->
                <div class="max-md:hidden flex items-center gap-x-2">
                  <!-- Old Price -->
                  <span class="old-price--decoration !text-base">210,000</span>
                  <!-- Offer % -->
                  <span
                    class="flex items-center h-5 px-1.5 rounded-lg bg-Error-EXLight text-Error font-Dana text-xs"
                    >19%</span
                  >
                </div>
            </div>
            <!-- Rate & Qty & Price -->
            <div class="flex items-center justify-between gap-x-6">
                <div class="flex items-center gap-x-6">
                    <!-- Rate -->
                    <div class="flex text-Warning-Light">
                        <AppIcon className="size-6" iconName="star"/>
                        <AppIcon className="size-6" iconName="star"/>
                        <AppIcon className="size-6" iconName="star"/>
                        <AppIcon className="size-6" iconName="star"/>
                        <AppIcon className="size-6" iconName="star"/>
                    </div>
                    <!-- Add Or Remove Button -->
                    <div class="flex items-center gap-x-2 h-8 px-1 rounded-sm bg-Tint-1 text-Primary">
                        <!-- Add Button -->
                        <button class="cursor-pointer">
                            <AppIcon className="size-3" iconName="pluse"/>
                        </button>
                        <!-- Qty -->
                        <span class="relative top-0.5 font-Dana text-sm">4</span>
                        <!-- Delete or Minus button -->
                        <button class="cursor-pointer" v-if="true">
                            <AppIcon className="size-3" iconName="minus"/>
                        </button>
                        <!-- Delete button -->
                        <span v-else class="cursor-pointer">
                            <AppIcon className="size-4" iconName="trash"/>
                        </span>
                    </div>
                </div>
                <!-- Price -->
                <span class="text-lg font-Dana">۱۴۰٬۰۰۰تومان</span>
            </div>
        </div>
    </div>
</template>