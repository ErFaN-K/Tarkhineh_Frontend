<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  id: String,
  label: String,
  type: { type: String, default: 'text' },
  modelValue: { type: String, default: '' },
  isDisabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);
const computedModelValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});
</script>

<template>
    <div class="w-full">
      <div class="relative font-Dana">
        <input
          :id="id"
          v-model="modelValue"
          :type="type"
          :disabled="isDisabled"
          :placeholder="placeholder"
          class="disabled:border-gray-400 disabled:text-gray-400 w-full md:h-10 h-8.25 border border-gray-800 rounded-sm md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
        />
        <label
          :for="id"
          :class="isDisabled ? '!text-gray-400' : ''"
          class="peer-focus:text-Primary peer-focus:-top-2 peer-placeholder-shown:top-2.5 md:peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 absolute -top-2 right-4 px-1 bg-white text-gray-800 font-Dana md:text-sm text-custom"
        >
          {{ label }}
        </label>
      </div>
    </div>
  </template>
