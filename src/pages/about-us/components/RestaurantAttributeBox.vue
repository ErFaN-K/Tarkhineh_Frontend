<script setup>
defineProps({
  iconName: {
    type: String,
    required: true,
  },
  attribute: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <!-- Restaurant Attribute ( For About Us Page ) Different Design -->
    <div class="md:py-7 flex items-center flex-col md:gap-y-4 gap-y-1">
        <!-- Icon -->
        <svg class="size-4 md:size-12 text-gray-800">
            <use :href="`#${iconName}`"></use>
        </svg>
        <!-- Content -->
        <span class="font-Dana text-custom md:text-lg text-gray-700">{{ attribute }}</span>
    </div>
</template>