<script setup>
import { useDealerAgreementStore } from '@/store/modules/DealerAgreementStore.js'
import { computed, ref } from 'vue'
const dealerAgreementStore = useDealerAgreementStore()

const emit = defineEmits(['countySelect'])
const selectedCountyList = computed(() => dealerAgreementStore.selectedCountyList)

const changeCounty = (countyName) => emit('countySelect', countyName)
</script>

<template>
    <div class="w-full md:h-52.5 h-42.5 absolute z-10 top-[calc(100%+4px)] left-0 right-0 bg-white divide-y divide-gray-300 md:rounded-lg rounded-sm shadow-lg border-4 border-transparent p-1 custom-scroll overflow-auto">
        <span v-for="(county, index) in selectedCountyList" :key="index" @click="changeCounty(county)" class="flex items-center md:h-10 h-8 text-gray-800 md:text-sm text-xs font-Dana hover:bg-gray-100 cursor-pointer"> {{ county }} </span>
    </div>
</template>