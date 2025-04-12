<script setup>
import BranchCard from './BranchCard.vue'
</script>

<template>
    <section class="mb-4 md:mb-12 branch-section">
        <div class="container">
            <div class="flex flex-col gap-y-7 md:gap-y-6">
                <BranchCard />
                <BranchCard />
                <BranchCard />
                <BranchCard />
            </div>
        </div>
    </section>
</template>