<script setup lang="ts">
import { useDealerAgreementStore } from '@/store/modules/dealerAgreementStore.ts'
const dealerAgreementStore = useDealerAgreementStore()

const emit = defineEmits<{
    (e: 'provinceSelect', provincesName: string): void
}>()
const changeProvinces = (provincesName: string): void => {
    dealerAgreementStore.getCountiesByProvince(provincesName)
    emit('provinceSelect', provincesName)
}

</script>

<template>
    <div class="w-full md:h-52.5 h-42.5 absolute z-11 top-[calc(100%+4px)] left-0 right-0 bg-white divide-y divide-gray-300 md:rounded-lg rounded-sm shadow-lg border-4 border-transparent p-1 custom-scroll overflow-auto">
        <span v-for="(province, index) in dealerAgreementStore.provinces" :key="index" @click="changeProvinces(province)" class="flex items-center md:h-10 h-8 text-gray-800 md:text-sm text-xs font-Dana hover:bg-gray-100 cursor-pointer"> {{ province }} </span>
    </div>
</template>