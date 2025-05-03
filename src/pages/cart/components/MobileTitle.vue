<script setup>
import { useCartStore } from '@/store/modules/cartStore.js' 
const cartStore = useCartStore()

import { useRouter } from 'vue-router'
const router = useRouter()

const handleStep = () => {
    if(cartStore.step === 1) {
        router.push({ name: "HomePage" })
        return
    }
    cartStore.prevStep(cartStore.step - 1)
}
</script>

<template>
    <section class="md:hidden mobile-title md:mt-10 mt-6">
        <div class="container">
            <div class="text-gray-800 flex items-center justify-between">
                <svg @click="handleStep" class="rotate-180 size-4">
                    <use href="#chevron-left-mini"></use>
                </svg>
                <span class="font-Dana-SemiBold text-base">سبد خرید</span>
                <!-- Delete All Product -->
                <span v-if="cartStore.step === 1">
                    <svg class="size-4">
                        <use href="#trash"></use>
                    </svg>
                </span>
                <!-- Fake Element -->
                <div v-else class="size-4 is-hidden"></div>
            </div>
        </div>
    </section>
</template>