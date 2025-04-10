<script setup>
import HeroSection from '@/components/ui/HeroSectionWithoutSlider.vue'
import FaqMenuSection from './FaqMenuSection.vue'
import Accordion from './Accordion.vue'
</script>

<template>
    <!-- Faq Page / Rules | Hero Section -> !mb-0 ( Design ) -->
    <HeroSection class="!mb-0" sectionTitle="قوانین ترخینه" backgroundName="hero__background--rules"/>
    <FaqMenuSection />
    <section class="rules-section md:mt-6 mt-3 md:mb-12 mb-6">
        <div class="container">
            <!-- Accordion Container -->
            <div class="flex flex-col rounded-sm md:rounded-lg border border-gray-400 divide-y divide-gray-400">
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
                <Accordion accordionQuestion="سوالات تستی جهت نمایش"/>
            </div>
        </div>
    </section>
</template>