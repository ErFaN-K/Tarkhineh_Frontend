import { defineStore } from "pinia";
import { ref } from "vue";

export const usePublicStore = defineStore('public', () => {
    const isShowHamburgerMenu = ref(false)
    const isShowOverlay = ref(false)
    
    // Show Hamburger Menu
    const showHamburgerMenu = () => {
        isShowHamburgerMenu.value = true
        isShowOverlay.value = true
    }

    // Close Hamburger Menu
    const closeHamburgerMenu = () => {
        isShowHamburgerMenu.value = false
        isShowOverlay.value = false
    }

    return { isShowHamburgerMenu, isShowOverlay, showHamburgerMenu, closeHamburgerMenu }
})