<script setup lang="ts"> 
    defineProps<{
        iconName: string;
        className: string | string[];
    }>()
</script>

<template>
    <svg :class="className">
        <use :href="'#' + iconName"></use>
    </svg>
</template> 