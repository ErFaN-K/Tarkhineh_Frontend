import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePublicStore = defineStore("public", () => {
  const isShowHamburgerMenu = ref<boolean>(false);
  const isShowOverlay = ref<boolean>(false);
  const branchData = reactive<object>({});

  // Funcs -------

  // Show Hamburger Menu
  const showHamburgerMenu = (): void => {
    isShowHamburgerMenu.value = true;
    isShowOverlay.value = true;
  };

  // Close Hamburger Menu
  const closeHamburgerMenu = (): void => {
    isShowHamburgerMenu.value = false;
    isShowOverlay.value = false;
  };

  // Set Branch Data
  const setBranchData = (branchData: object) => {
    branchData = branchData;
  };

  // Get Branch Data
  const getBranchData = (): object => branchData;

  return {
    isShowHamburgerMenu,
    isShowOverlay,
    showHamburgerMenu,
    closeHamburgerMenu,
    setBranchData,
    getBranchData,
  };
});
