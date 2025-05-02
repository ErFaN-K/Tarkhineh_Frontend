<script setup>
import ProgressStepper from '@/components/ui/ProgressStepper.vue'
</script>

<template>
    <section class="progress-section md:mt-10 mt-6">
        <div class="container">
            <div class="flex items-center justify-center">
                <ProgressStepper 
                    :stepOneName="'سبد خرید'"
                    :stepOneIcon="'#home'"
                    :stepOneActive="false"
                    :stepTwoName="'تکمیل اطلاعات'"
                    :stepTwoIcon="'#check'"
                    :stepTwoActive="true"
                    :stepThreeName="'پرداخت'"
                    :stepThreeIcon="'#money'"
                    :stepThreeActive="false"
                />
            </div>
        </div>
    </section>
</template>