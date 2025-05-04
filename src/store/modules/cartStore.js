import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const step = ref(1)

  const nextStep = (number) => step.value = number
  const prevStep = (number) => step.value = number

  return {
    step,
    nextStep,
    prevStep
  }
});
