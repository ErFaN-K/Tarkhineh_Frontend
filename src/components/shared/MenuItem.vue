<script setup lang="ts">
defineProps<{
  menuName: string
  link: string
}>();
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
