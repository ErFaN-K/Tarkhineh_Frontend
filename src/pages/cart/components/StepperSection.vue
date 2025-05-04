<script setup>
import ProgressStepper from '@/components/ui/ProgressStepper.vue'

import { useCartStore } from '@/store/modules/cartStore.js' 
const cartStore = useCartStore()
</script>

<template>
    <section class="max-md:hidden progress-section md:mt-10 mt-6">
        <div class="container">
            <div class="flex items-center justify-center">
                <ProgressStepper 
                    :stepOneName="'سبد خرید'"
                    :stepOneIcon="'#home'"
                    :stepOneActive="cartStore.step === 1"
                    :stepTwoName="'تکمیل اطلاعات'"
                    :stepTwoIcon="'#check'"
                    :stepTwoActive="cartStore.step === 2"
                    :stepThreeName="'پرداخت'"
                    :stepThreeIcon="'#money'"
                    :stepThreeActive="cartStore.step === 3"
                />
            </div>
        </div>
    </section>
</template>