<script setup>
import { usePublicStore } from "@/stores/publicStore.js";
const publicStore = usePublicStore();
</script>

<template>
  <div
    class="fixed inset-0 z-100 size-full backdrop-blur-sm transition-all"
    :class="{
      'is-show': publicStore.isShowOverlay,
      'is-hidden': !publicStore.isShowOverlay,
    }"
  ></div>
</template>
