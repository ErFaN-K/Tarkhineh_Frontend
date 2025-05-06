<script setup lang="ts">

// Get Accordion Data
interface Props {
    accordionQuestion: string
    accordionAwnser?: string
}

withDefaults(defineProps<Props>(), {
    accordionAwnser: 'موردی تا اکنون ثبت نشده است',
})

import AppIcon from "@/components/ui/AppIcon.vue";
import { ref } from "vue"

const isOpen = ref<boolean>(false)
const accordionAwnserElement = ref<HTMLElement | null>(null)
const toggleAccordion = (accordionAwnserElement: HTMLElement): void => {
    if(accordionAwnserElement.classList.contains('hidden')) {
        isOpen.value = true
        accordionAwnserElement.classList.remove('hidden')
    }
    else {
        isOpen.value = false
        accordionAwnserElement.classList.add('hidden')
    }
}
</script>

<template>
    <div class="py-2 md:py-4.5">
        <!-- Accrodion Header -->
        <div @click="toggleAccordion(accordionAwnserElement)" :class="isOpen ? 'accordion--active' : ''" class="px-4 w-full flex items-center justify-between text-gray-800">
            <!-- Accrodion Question -->
            <span class="text-xs md:text-xl font-Dana md:font-Dana-Medium line-clamp-1">{{ accordionQuestion }}</span>
            <AppIcon className="size-4 md:size-8 -rotate-90" iconName="chevron-left"/>
        </div>
        <!-- Accrodion Awnser -->
        <p ref="accordionAwnserElement"  class="hidden px-7 md:pt-5 pt-2 text-gray-700 font-Dana text-custom md:text-base">
            {{ accordionAwnser }}
        </p>
    </div>
</template>