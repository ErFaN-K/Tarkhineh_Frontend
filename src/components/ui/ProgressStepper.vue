<script setup lang="ts">
defineProps<{
    stepOneName: string;
    stepOneIcon: string;
    stepOneActive: boolean;
    
    stepTwoName: string;
    stepTwoIcon: string;
    stepTwoActive: boolean;
    
    stepThreeName: string;
    stepThreeIcon: string;
    stepThreeActive: boolean;
}>()
</script>

<template>
    <!-- Progress Stepper -->
    <div class="flex items-center shrink-0">
        <!-- Step 1 -->
        <div :class="{
                'progress-stepper__step--active': stepOneActive,
                'progress-stepper__step--prev-active': ((!stepOneActive && stepTwoActive) || (!stepTwoActive && stepThreeActive))
            }" 
            class="flex items-center md:gap-x-2 gap-x-1 text-gray-400 font-Dana text-custom md:text-sm">
            <div class="flex items-center gap-x-0.5 md:gap-x-1">
                <svg class="md:size-6 size-3">
                    <use :href="stepOneIcon"></use>
                </svg>
                <span>{{ stepOneName }}</span>
            </div>
            <!-- Line between steps -->
            <span>&nbsp;- - -&nbsp;</span>
        </div>

        <!-- Step 2 -->
        <div :class="{
                'progress-stepper__step--active': stepTwoActive,
                'progress-stepper__step--prev-active': ((!stepOneActive && stepThreeActive) || (!stepTwoActive && stepTwoActive))
            }" 
            class="flex items-center md:gap-x-2 gap-x-1 text-gray-400 font-Dana text-custom md:text-sm">
            <!-- Line between steps -->
            <span>- - -</span>
            <div class="flex items-center gap-x-0.5 md:gap-x-1">
                <svg class="md:size-6 size-3">
                    <use :href="stepTwoIcon"></use>
                </svg>
                <span>{{ stepTwoName }}</span>
            </div>
            <!-- Line between steps -->
            <span>&nbsp;- - -&nbsp;</span>
        </div>

        <!-- Step 3 -->
        <div :class="{
                'progress-stepper__step--active': stepThreeActive,
            }" 
            class="flex items-center md:gap-x-2 gap-x-1 text-gray-400 font-Dana text-custom md:text-sm">
            <!-- Line between steps -->
            <span>- - -</span>
            <div class="flex items-center gap-x-0.5 md:gap-x-1">
                <svg class="md:size-6 size-3">
                    <use :href="stepThreeIcon"></use>
                </svg>
                <span>{{ stepThreeName }}</span>
            </div>
        </div>
    </div>
</template>
