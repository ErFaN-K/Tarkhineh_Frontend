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
  <RouterLink
    activeClass="menu__item--active"
    class="text-sm md:text-xl font-Dana text-gray-700 h-full flex items-center"
    :to="{name: link}"
  >
    {{ menuName }}
  </RouterLink>
</template>
