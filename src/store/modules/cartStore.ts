import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const step = ref<number>(1)

  const nextStep = (number: number): void => {
     step.value = number
  }
  const prevStep = (number: number): void => {
     step.value = number
  }

  return {
    step,
    nextStep,
    prevStep
  }
});
