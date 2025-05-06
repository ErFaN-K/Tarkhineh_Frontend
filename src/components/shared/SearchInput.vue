<script setup lang="ts">
import AppIcon from '../ui/AppIcon.vue';
</script>

<template>
  <input
    type="text"
    placeholder="جستجو"
    class="w-full font-Dana md:text-xs text-custom border-none outline-none placeholder:text-gray-800 text-gray-800"
  />
  <span>
    <AppIcon className="size-4 md:size-6 text-gray-800" iconName="magnifying-glass"/>
  </span>
</template>
