<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  linkTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!-- Food Category -->
  <div class="flex flex-col items-center h-20 rounded-sm md:h-40 bg-Primary">
    <!-- Category Image -->
    <img
      :src="imageSrc"
      alt="Menu Image"
      class="size-30 md:size-60 -mt-15 md:-mt-30"
    />
    <a
      :href="link"
      class="flex items-center justify-center mt-4 max-xl:mt-6 max-md:mt-2.5 shadow-md text-gray-800 w-24 md:w-38.75 text-xs bg-gray-100 rounded-sm min-h-8 md:min-h-12 md:text-xl font-Dana"
    >
      {{ linkTitle }}
    </a>
  </div>
</template>
