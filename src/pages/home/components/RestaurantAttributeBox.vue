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
  <!-- Restaurant Attribute ( For Home Page ) Different Design -->
  <div
    class="md:w-46 md:h-34 w-34 h-12.5 flex flex-col items-center justify-center md:gap-y-4 gap-y-1 text-white"
  >
    <!-- Icon -->
    <svg class="size-6 md:size-12">
      <use :href="'#' + iconName"></use>
    </svg>
    <!-- Content -->
    <span class="text-xs font-Dana md:text-lg">{{ attribute }}</span>
  </div>
</template>
