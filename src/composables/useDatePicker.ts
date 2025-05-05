import { ref } from 'vue'

export function datePicker() {
  const dateNumber = ref<string | null>(null)

  const getDateFromCustomDatePicker = (date: { gregorianDate: { gy: number; gm: number; gd: number }; jalaaliDateFormatted: string }): void => {
    dateNumber.value = date.jalaaliDateFormatted
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
