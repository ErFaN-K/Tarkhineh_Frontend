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
            <button>
                <svg class="size-3">
                    <use href="#pluse"></use>
                </svg>
            </button>
            <!-- Qty -->
            <span class="relative top-0.5 font-Dana text-sm">4</span>
            <!-- Delete or Minus button -->
            <button v-if="false">
                <svg class="size-3">
                    <use href="#minus"></use>
                </svg>
            </button>
            <!-- Delete button -->
            <span>
                <svg class="size-4">
                    <use href="#trash"></use>
                </svg>
            </span>
        </div>
    </div>
</template>