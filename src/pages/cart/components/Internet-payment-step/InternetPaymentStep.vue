<script setup>
import DiscountCodeCart from './DiscountCodeCart.vue';
import PaymentGateway from './PaymentGateway.vue';
import PaymentMethod from './PaymentMethod.vue'
import RemarkableCard from './RemarkableCard.vue'
</script>

<template>
    <!-- Internet Payment Step -->
    <div class="xl:col-span-7 max-xl:col-span-8 flex flex-col lg:gap-y-6 gap-y-3">
        <DiscountCodeCart />
        <PaymentMethod />
        <PaymentGateway v-if="false"/>
        <RemarkableCard v-else/>
    </div>
</template>