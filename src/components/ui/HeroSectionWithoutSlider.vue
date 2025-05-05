<script setup lang="ts">
defineProps<{
    backgroundName: string;
    sectionTitle: string;
}>()
</script>

<template>
    <section class="mb-6 md:mb-12 hero-section">
        <div :class="`flex items-center justify-center h-44 sm:h-84 background-config ${backgroundName}`">
            <span class="font-Morabba-Bold text-Tint-1 lg:text-4.5xl text-base sm:text-2xl">
                {{ sectionTitle }}
            </span>
        </div>
    </section>
</template>