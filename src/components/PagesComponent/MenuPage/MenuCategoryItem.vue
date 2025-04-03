<script setup>
defineProps({
    categoryName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
</script>

<template>
    <a class="text-sm md:text-xl font-Morabba-Medium text-gray-700 h-full flex items-center" :href="link">
        {{ categoryName }}
    </a>
</template>