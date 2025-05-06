<script setup lang="ts">
    import AppIcon from '../ui/AppIcon.vue';
</script>

<template>
    <!-- Address Details -->
    <div class="p-4 flex flex-col justify-between col-span-1 md:rounded-lg rounded-sm border border-gray-400 bg-gray-100 md:h-28.75 h-23.5">
        <!-- Address -->
        <div class="flex items-start justify-between gap-x-2">
            <span class="md:h-10 h-8 line-clamp-2 text-custom md:text-sm font-Dana">یزد - مهریز - شهرک شهید رجایی - کوچه وحدت ۲ - اون خونه ای که نمای سنگ داره و دیزاین خونه قهوه ای سوخته هستش</span>
            <!-- Controller Button -->
            <div class="flex items-center gap-x-3 text-gray-800">
               <span class="cursor-pointer">
                    <AppIcon className="size-4 md:size-6 hover:text-Primary" iconName="pencil-square"/>
               </span>
               <span class="cursor-pointer">
                    <svg class="size-4 md:size-6 hover:text-Error">
                        <use href="#trash"></use>
                    </svg>
                    <AppIcon className="size-4 md:size-6 hover:text-Error" iconName="trash"/>

               </span>
            </div>
        </div>
        <!-- Address Information -->
        <div class="flex items-center justify-between gap-x-2">
            <!-- Address Name -->
            <span class="text-custom md:text-sm text-gray-700 font-Dana">محل کار</span>
            <!-- Username -->
            <span class="text-custom md:text-sm text-gray-700 font-Dana">سردار وظیفه</span>
            <!-- User Phone Number -->
            <span class="text-custom md:text-sm text-gray-700 font-Dana">09133549208</span>
        </div>
    </div>

</template>