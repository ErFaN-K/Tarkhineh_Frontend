<script setup>
import BenefitText from './BenefitText.vue';

</script>

<template>
    <section class="distributor-benefits mb-6 md:mb-12">
        <div class="container">
            <div class="pb-6 md:pb-12 border-b border-gray-400">
                <!-- Section Title -->
                <h2 class="section__title text-center">مزیت دریافت نمایندگی</h2>
                <!-- Secrion Content -->
                <div class="section__body flex justify-center">
                    <div class="flex flex-wrap flex-col md:gap-y-4 md:gap-x-8 gap-x-6 gap-y-2 lg:h-40">
                        <BenefitText benefit="استفاده از برند شناخته شده ترخینه"/>
                        <BenefitText benefit="به حداقل رساندن ریسک سرمایه گذاری"/>
                        <BenefitText benefit="تسریع روند بازگشت سرمایه"/>
                        <BenefitText benefit="مشاوره های تخصصی جهت مدیریت رستوران"/>
                        <BenefitText benefit="مشاوره در امور حقوقی، مالی و مالیاتی"/>
                        <BenefitText benefit="پشتیبانی بازاریابی و منابع انسانی"/>
                        <BenefitText benefit="دریافت مشاوره جهت تامین مواد اولیه و تجهیزات"/>
                        <BenefitText benefit="طرح های تشویقی برای ارتقا فروش"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>