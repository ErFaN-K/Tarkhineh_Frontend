<script setup lang="ts">
import DesktopProfilePanel from './DesktopProfilePanel.vue';
import MobileProfilePanel from './MobileProfilePanel.vue'
</script>

<template>
    <section class="md:my-12 mt-6 main-section">
        <div class="container">
            <div class="grid xl:grid-cols-12 lg:grid-cols-9 grid-cols-4 md:gap-x-6 max-lg:gap-y-6 items-start">
                <!-- Profile Panel ( Desktop )-->
                <DesktopProfilePanel class="max-md:hidden col-span-4 lg:col-span-3 xl:col-span-3"/>
                <!-- Profile Panel ( Mobile )-->
                <MobileProfilePanel class="md:hidden"/>
                <!-- Page Content -->
                <router-view class="xl:col-span-9 lg:col-span-6 col-span-4"></router-view>
            </div>
        </div>
    </section>
</template>