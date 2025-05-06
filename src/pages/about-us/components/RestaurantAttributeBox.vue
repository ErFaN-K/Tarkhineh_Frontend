<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue';

defineProps<{
  iconName: string;
  attribute: string
}>()
</script>

<template>
    <!-- Restaurant Attribute ( For About Us Page ) Different Design -->
    <div class="md:py-7 flex items-center flex-col md:gap-y-4 gap-y-1">
        <!-- Icon -->
        <AppIcon className="size-4 md:size-12 text-gray-800" :iconName="iconName"/>
        <!-- Content -->
        <span class="font-Dana text-custom md:text-lg text-gray-700">{{ attribute }}</span>
    </div>
</template>