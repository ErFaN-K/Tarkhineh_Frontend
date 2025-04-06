<script setup>
defineProps({
  menuName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!-- Restaurant Menu -->
  <a
    class="text-sm md:text-xl font-Morabba-Medium text-gray-700 h-full flex items-center"
    :href="link"
  >
    {{ menuName }}
  </a>
</template>
