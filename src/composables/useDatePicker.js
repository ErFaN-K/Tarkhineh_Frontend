import { ref } from 'vue'

export function datePicker () {
    // Get Date From Custom Date Picker
    const dateNumber = ref(null)
    const getDateFromCustomDatePicker = (date) => {
        dateNumber.value = date.jalaaliDateFormated.value
    }

    // Open & Close Custom Date Picker 
    const isOpenCustomDatePicker = ref(false)
    const showCustomDatePicker = () => {
        isOpenCustomDatePicker.value ? isOpenCustomDatePicker.value = false : isOpenCustomDatePicker.value = true
    }
    const hideCustomDatePicker = (isShow) => {
        isOpenCustomDatePicker.value = isShow 
    }

    return { dateNumber, getDateFromCustomDatePicker, isOpenCustomDatePicker, showCustomDatePicker, hideCustomDatePicker }
}