<script setup>
import DeliveryMethod from './DeliveryMethod.vue'
import CourierMethod from './CourierMethod.vue'
import OrderDescription from './OrderDescription.vue'
import InPersonMethod from './BranchInformationCard.vue'
</script>

<template>
    <div class="h-full xl:col-span-7 max-xl:col-span-8 flex flex-col lg:gap-y-6 gap-y-3">
        <DeliveryMethod />
        <CourierMethod v-if="false"/>
        <InPersonMethod v-else/>
        <OrderDescription />
    </div>
</template>