<script setup lang="ts">
import { usePublicStore } from "@/store/modules/publicStore.ts";
const publicStore = usePublicStore();
</script>

<template>
  <div
    class="fixed inset-0 z-99 size-full backdrop-blur-sm"
    :class="{
      'is-show': publicStore.isShowOverlay,
      'is-hidden': !publicStore.isShowOverlay,
    }"
  ></div>
</template>
