<template>
    <div class="index">
        <IndexHero />
        <IndexAboutUs />
        <IndexAboutFood />
        <IndexWhyChooseUs />
        <IndexClients />
        <IndexChooseAndPick />
    </div>
</template>

<script setup>
import IndexHero from '../../Components/IndexHero/IndexHero.vue';
import IndexAboutUs from '../../Components/IndexAboutUs/IndexAboutUs.vue';
import IndexAboutFood from '../../Components/IndexAboutFood/IndexAboutFood.vue';
import IndexWhyChooseUs from '../../Components/IndexWhyChooseUs/IndexWhyChooseUs.vue';
import IndexClients from '../../Components/IndexClients/IndexClients.vue';
import IndexChooseAndPick from '../../Components/IndexChooseAndPick/IndexChooseAndPick.vue';
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
.index {
    background: $black-color;
}
</style>