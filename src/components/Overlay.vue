<script setup>
import { usePublicStore } from '../stores/publicStore';
const publicStore = usePublicStore()

</script>

<template>
  <div class="fixed inset-0 z-100 size-full backdrop-blur-sm transition-all" :class="{'overlay--show': publicStore.isShowOverlay, 'overlay--close': !publicStore.isShowOverlay}"></div>
</template>
