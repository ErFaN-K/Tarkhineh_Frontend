<template>
    <div class="z-50 w-full fixed bottom-4 left-0 right-0 flex justify-center">
        <div class="container">
            <div class="h-16 bg-Primary px-4 w-full flex justify-between items-center gap-x-2 rounded-lg text-white/60">
                <!-- Routes Link -->
                <router-link activeClass="mobile-profile-panel__link--active" :to="{ name: 'Dashboard|Profile' }">
                    <svg class="size-6">
                        <use href="#user"></use>
                    </svg>
                </router-link>
                <router-link activeClass="mobile-profile-panel__link--active" :to="{ name: 'Dashboard|Profile' }">
                    <svg class="size-6">
                        <use href="#order"></use>
                    </svg>
                </router-link>
                <router-link activeClass="mobile-profile-panel__link--active" :to="{ name: 'Dashboard|Wishlist' }">
                    <svg class="size-6">
                        <use href="#heart"></use>
                    </svg>
                </router-link>
                <router-link activeClass="mobile-profile-panel__link--active" :to="{ name: 'Dashboard|Address' }">
                    <svg class="size-6">
                        <use href="#location"></use>
                    </svg>
                </router-link>
                <!-- Logout button -->
                <button>
                    <svg class="size-6 rotate-180">
                        <use href="#exit"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>