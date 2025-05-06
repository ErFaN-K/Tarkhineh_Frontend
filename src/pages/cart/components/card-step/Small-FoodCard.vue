<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";
</script>

<template>
    <!-- Food Card -->
    <div class="hover:bg-gray-300 w-full flex items-center justify-between p-2">
        <!-- Food Title & Price -->
        <div class="flex flex-col gap-y-1">
            <span class="text-xs text-gray-800 font-Dana-Medium">پاستا سبزیجات</span>
            <span class="text-custom font-Dana text-gray-700">۱۴۰٬۰۰۰ تومان</span>
        </div>
        <!-- Food Qty -->
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
</template>