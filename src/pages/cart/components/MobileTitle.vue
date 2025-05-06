<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";
import { useCartStore } from '@/store/modules/cartStore.ts' 
const cartStore = useCartStore()

import { useRouter } from 'vue-router'
const router = useRouter()

const handleStep = (): void => {
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
                <span @click="handleStep">
                    <AppIcon className="rotate-180 size-4" iconName="chevron-left-mini"/>
                </span>
                <span class="font-Dana-SemiBold text-base">{{ cartStore.step == 1 ? 'سبد خرید' : cartStore.step == 2 ? 'تکمیل اطلاعات' : cartStore.step == 3 ? 'پرداخت' : '' }}</span>
                <!-- Delete All Product -->
                <span v-if="cartStore.step === 1">
                    <AppIcon className="size-4" iconName="trash"/>
                </span>
                <!-- Fake Element -->
                <div v-else class="size-4 is-hidden"></div>
            </div>
        </div>
    </section>
</template>