import { ref } from 'vue'

export function datePicker() {
  const dateNumber = ref<number | null>(null)

  const getDateFromCustomDatePicker = (date: { jalaaliDateFormatted: { value: number } }): void => {
    dateNumber.value = date.jalaaliDateFormatted.value
  }

  const isOpenCustomDatePicker = ref(false)

  const showCustomDatePicker = (): void => {
    isOpenCustomDatePicker.value = !isOpenCustomDatePicker.value
  }

  const hideCustomDatePicker = (isShow: boolean): void => {
    isOpenCustomDatePicker.value = isShow
  }

  return {
    dateNumber,
    getDateFromCustomDatePicker,
    isOpenCustomDatePicker,
    showCustomDatePicker,
    hideCustomDatePicker
  }
}
