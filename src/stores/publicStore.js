import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePublicStore = defineStore("public", () => {
  const isShowHamburgerMenu = ref(false);
  const isShowOverlay = ref(false);
  const branchData = reactive(null);

  // Funcs -------

  // Show Hamburger Menu
  const showHamburgerMenu = () => {
    isShowHamburgerMenu.value = true;
    isShowOverlay.value = true;
  };

  // Close Hamburger Menu
  const closeHamburgerMenu = () => {
    isShowHamburgerMenu.value = false;
    isShowOverlay.value = false;
  };

  // Set Branch Data
  const setBranchData = (branchData) => {
    branchData.value = branchData;
  };

  // Get Branch Data
  const getBranchData = () => branchData.value;

  return {
    isShowHamburgerMenu,
    isShowOverlay,
    showHamburgerMenu,
    closeHamburgerMenu,
    setBranchData,
    getBranchData,
  };
});
