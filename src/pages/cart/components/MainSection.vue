<script setup>
import FactorPanel from './FactorPanel.vue';
import FoodsCard from './card-step/FoodCardContainer.vue';
import NotFound from './card-step/NotFound.vue';

defineProps({
    step: Number
})
</script>

<template>
    <section class="main-section md:my-10 my-6">
        <div class="container">
            <NotFound v-if="false"/>
            <div v-else class="grid lg:grid-cols-12 grid-cols-4 items-start lg:gap-x-6 max-lg:gap-y-3">
                <FoodsCard />
                <FactorPanel />
            </div>
        </div>
    </section>
</template>