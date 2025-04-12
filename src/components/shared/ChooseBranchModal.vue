<script setup>
import BranchCard from './ChooseBranchCard.vue'
</script>

<template>
    <div class="is-hidden fixed inset-0 m-auto z-100 px-5 flex items-center justify-center">
        <div class="md:max-w-202 max-w-80 w-full rounded-lg overflow-hidden bg-white shadow-xl text-gray-800"> 
            <!-- Card Header -->
            <div class="relative flex items-center justify-center md:py-6 py-4 max-md:bg-gray-300 mb-6">
                <!-- Close Icon -->
                <span class="absolute md:top-5 md:left-5 top-3 left-3">
                    <svg class="md:size-10 size-6 text-gray-700">
                        <use href="#x-mark"></use>
                    </svg>
                </span>
                <!-- Card Title -->
                <h2 class="font-Morabba-Bold md:text-xl text-xs">
                    انتخاب شعبه
                </h2>
            </div>
            <!-- Card Main -->
            <div class="flex items-center flex-col gap-y-4 md:gap-y-5 md:px-6 md:pb-6 px-4 pb-4">
                <!-- Title -->
                <span class="text-xs font-Dana text-center md:text-base">برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:</span>
                <!-- Branch Card Container -->
                <div class="grid grid-cols-1 md:grid-cols-4 md:gap-x-5 max-md:gap-y-2">
                    <BranchCard
                      branchImage="src/assets/images/backgrounds/About-Restaurant-Section.png"
                      branchName="شعبه تستی برای نمایش شعبه شعبه شعبه "
                      branchAddress="آدرس تسبرای هر شعب شعبه آدرس تسبرای هر شعبه عشقم من عرفان"
                      branchPageLink="#"
                    />
                    <BranchCard
                      branchImage="src/assets/images/backgrounds/About-Restaurant-Section.png"
                      branchName="شعبه تستی برای نمایش شعبه شعبه شعبه "
                      branchAddress="آدرس تسبرای هر شعب شعبه آدرس تسبرای هر شعبه عشقم من عرفان"
                      branchPageLink="#"
                    />
                    <BranchCard
                      branchImage="src/assets/images/backgrounds/About-Restaurant-Section.png"
                      branchName="شعبه تستی برای نمایش شعبه شعبه شعبه "
                      branchAddress="آدرس تسبرای هر شعب شعبه آدرس تسبرای هر شعبه عشقم من عرفان"
                      branchPageLink="#"
                    />
                    <BranchCard
                      branchImage="src/assets/images/backgrounds/About-Restaurant-Section.png"
                      branchName="شعبه تستی برای نمایش شعبه شعبه شعبه "
                      branchAddress="آدرس تسبرای هر شعب شعبه آدرس تسبرای هر شعبه عشقم من عرفان"
                      branchPageLink="#"
                    />
                </div>
            </div>
        </div>
    </div>
</template>