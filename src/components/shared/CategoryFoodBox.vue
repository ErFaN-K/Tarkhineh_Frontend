<script setup>
defineProps({
  filterQuery: {
    type: String,
    required: true,
  },
  filterName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    class="h-6 md:h-8 px-2 rounded-lg md:rounded-full bg-gray-300 flex items-center gap-x-1 text-custom md:text-base font-Dana text-gray-800"
  >
    <span>{{ filterName }}</span>
    <svg class="size-3 md:size-4">
      <use href="#chevron-left-mini"></use>
    </svg>
  </button>
</template>
