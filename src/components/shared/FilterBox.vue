<script setup lang="ts">
import AppIcon from '../ui/AppIcon.vue';

defineProps<{
  filterQuery: string;
  filterName: string;
}>();
</script>

<template>
  <button
    class="h-6 md:h-8 px-2 rounded-lg md:rounded-full bg-gray-300 flex items-center gap-x-1 text-custom md:text-base font-Dana text-gray-800"
  >
    <span>{{ filterName }}</span>
    <AppIcon className="size-3 md:size-4" iconName="chevron-left-mini"/>
  </button>
</template>
