<template>
    <!-- Horizontal Food Card Skleton Loader ( Just For Food Menu ) -->
    <div class="rounded-sm md:rounded-lg border border-gray-400 flex overflow-hidden bg-white">
        <div class="w-23 md:w-42.25 h-full bg-gray-300 shrink-0 animate-pulse"></div>
        <div class="p-2 md:pr-8 md:pl-4 flex flex-col w-full">
            <div class="flex items-center justify-between mb-2 md:mb-3">
                <div class="w-25 md:w-66 h-4.5 md:h-6 bg-gray-300 animate-pulse"></div>
                <div class="flex items-center gap-x-2">
                    <div class="md:hidden w-8 h-4.5 bg-gray-300 animate-pulse"></div>
                    <div class="size-6 max-md:w-8 max-md:h-4.5 bg-gray-300 animate-pulse"></div>
                </div>
            </div>
            <div class="flex max-md:items-center items-start justify-between mb-1 md:mb-3">
                <!-- Mobile Loader -->
                <div class="md:hidden w-36.5 h-4.5 bg-gray-300 animate-pulse"></div>
                <div class="md:hidden w-14.5 h-5 bg-gray-300 animate-pulse"></div>
                <!-- Desktop Loader -->
                <div class="hidden md:flex flex-col items-start gap-y-1.5">
                   <div class="w-66 h-4 bg-gray-300 animate-pulse"></div>
                   <div class="w-43.75 h-4 bg-gray-300 animate-pulse"></div>
                </div>
                <div class="hidden md:flex flex-col items-end gap-y-3">
                    <div class="flex items-center gap-x-2">
                        <div class="h-4 w-13.5 bg-gray-300 animate-pulse"></div>
                        <div class="h-4 w-8 bg-gray-300 animate-pulse"></div>
                    </div>
                    <div class="w-25 h-6 bg-gray-300 animate-pulse"></div>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="md:hidden size-4 bg-gray-300 animate-pulse"></div>
                <div class="w-20 md:w-24 md:h-6 h-4 bg-gray-300 animate-pulse"></div>
                <div class="w-25 h-8 md:w-61 md:h-10 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    </div>
</template>