<template>
    <div class="about-us">
        <BaseHeading class="about-us__heading">Кто мы?</BaseHeading>
        <AboutUsMainSection class="about-us__section" />
        <AboutUsWhyChooseUs class="about-us__section" />
    </div>
</template>

<script setup>
import BaseHeading from '@/Shared/Components/BaseHeading/BaseHeading.vue';
import AboutUsMainSection from '../../Components/AboutUs/AboutUsMainSection/AboutUsMainSection.vue';
import AboutUsWhyChooseUs from '../../Components/AboutUs/AboutUsWhyChooseUs/AboutUsWhyChooseUs.vue';

</script>

<style lang="scss">
@import '@/Shared/Assets/Scss/container';
@import '@/Shared/Assets/Scss/vars';
@import '@/Shared/Assets/Scss/grid';
@import '@/Shared/Assets/Scss/fonts';
@import '@/Shared/Assets/Scss/indention';

.about-us {
    @include site-container;

    &__heading {
        text-align: center;
        color: $white-color;
        @include helvetica-60-bold;
    }

    &__section {
        padding: 40px 0;
    }
}
</style>