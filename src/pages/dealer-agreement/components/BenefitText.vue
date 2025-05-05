<script setup lang="ts">
defineProps<{
    benefit: string
}>()
</script>

<template>
    <div class="flex items-center md:gap-x-2 gap-x-1 md:text-xl text-xs font-Dana">
        <!-- RectAngle -->
        <span class="block md:size-4 size-3 border-2 border-Primary rotate-45 rounded-sm"></span>
        <!-- Text -->
        <span> {{ benefit }} </span>
    </div>
</template>