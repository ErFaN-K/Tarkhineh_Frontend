<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";

defineProps<{
  iconName: string;
  attribute: string;
}>();
</script>

<template>
    <!-- Restaurant Attribute ( For Dealer Agreement Page ) Different Design -->
    <div class="md:w-46 w-30 flex flex-col md:gap-y-4 gap-y-2 items-center">
        <!-- Icon -->
        <div class="md:size-35 size-20 flex items-center justify-center md:border-4 border-2 border-Primary text-Primary rounded-full">
            <AppIcon className="md:size-20 size-12" :iconName="iconName"/>
        </div>
        <!-- Content -->
        <span class="line-clamp-2 text-gray-800 md:text-lg text-xs md:font-Dana-Medium font-Dana text-center">
            {{ attribute }}
        </span>
    </div>
</template>