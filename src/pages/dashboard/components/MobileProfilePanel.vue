<script setup lang="ts">
    import AppIcon from "@/components/ui/AppIcon.vue";
</script>

<template>
    <div class="z-50 w-full fixed bottom-4 left-0 right-0 flex justify-center">
        <div class="container">
            <div class="h-16 bg-Primary px-4 w-full flex justify-between items-center gap-x-2 rounded-lg text-white/60">
                <!-- Routes Link -->
                <router-link activeClass="mobile-profile-panel__link--active" :to="{ name: 'Dashboard|Profile' }">
                    <AppIcon className="size-6" iconName="user"/>
                </router-link>
                <router-link activeClass="mobile-profile-panel__link--active" :to="{ name: 'Dashboard|Orders' }">
                    <AppIcon className="size-6" iconName="order"/>
                </router-link>
                <router-link activeClass="mobile-profile-panel__link--active" :to="{ name: 'Dashboard|Wishlist' }">
                    <AppIcon className="size-6" iconName="heart"/>
                </router-link>
                <router-link activeClass="mobile-profile-panel__link--active" :to="{ name: 'Dashboard|Address' }">
                    <AppIcon className="size-6" iconName="location"/>
                </router-link>
                <!-- Logout button -->
                <button>
                    <AppIcon className="size-6 rotate-180" iconName="exit"/>
                </button>
            </div>
        </div>
    </div>
</template>