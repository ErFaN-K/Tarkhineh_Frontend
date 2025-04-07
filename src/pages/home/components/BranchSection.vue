<script setup>
import BranchCard from "./BranchCard.vue";
</script>

<template>
  <section class="mb-4 md:mb-12 branch-section">
    <div class="container">
      <!-- Section Title -->
      <h1 class="section__title text-center text-gray-800">ترخینه گردی</h1>
      <!-- Branch Card Container -->
      <div
        class="section__body grid grid-cols-1 gap-y-3 gap-x-6 max-xl:gap-x-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <BranchCard
          branchImage="src/assets/images/branch/Branch-Image.png"
          branchName="شعبه تستی برای نمایش"
          branchAddress="آدرس تستی جهت نمایش برای هر شعبه آدرس تستی جهت نمایش برای هر شعبه"
          branchPageLink="#"
        />
        <BranchCard
          branchImage="src/assets/images/branch/Branch-Image.png"
          branchName="شعبه تستی برای نمایش"
          branchAddress="آدرس تستی جهت نمایش برای هر شعبه آدرس تستی جهت نمایش برای هر شعبه"
          branchPageLink="#"
        />
        <BranchCard
          branchImage="src/assets/images/branch/Branch-Image.png"
          branchName="شعبه تستی برای نمایش"
          branchAddress="آدرس تستی جهت نمایش برای هر شعبه آدرس تستی جهت نمایش برای هر شعبه"
          branchPageLink="#"
        />
        <BranchCard
          branchImage="src/assets/images/branch/Branch-Image.png"
          branchName="شعبه تستی برای نمایش"
          branchAddress="آدرس تستی جهت نمایش برای هر شعبه آدرس تستی جهت نمایش برای هر شعبه"
          branchPageLink="#"
        />
      </div>
    </div>
  </section>
</template>
