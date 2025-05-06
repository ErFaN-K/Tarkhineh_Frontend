import { ref } from 'vue'

export function datePicker() {
  const dateNumber = ref<string>('')

  interface CustomDate { 
    gregorianDate: { gy: number; gm: number; gd: number }; 
    jalaaliDateFormatted: string 
  }

  const getDateFromCustomDatePicker = (date: CustomDate): void => {
    dateNumber.value = date.jalaaliDateFormatted
  }
  
  const isOpenCustomDatePicker = ref<boolean>(false)

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
