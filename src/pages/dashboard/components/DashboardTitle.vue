<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
    <div class="flex md:pb-2 md:border-b md:border-b-gray-400 max-md:justify-center">
      <h4 class="text-gray-800 font-Dana-SemiBold md:text-xl text-base">{{ title }}</h4>
    </div>
</template>