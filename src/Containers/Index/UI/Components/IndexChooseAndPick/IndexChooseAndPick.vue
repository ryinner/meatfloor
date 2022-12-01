<template>
    <section class="index-choose-and-pick">
        <div class="index-choose-and-pick__container">
            <div class="index-choose-and-pick__info">
                <BaseHeading class="index-choose-and-pick__slogan">Выберите и закажите</BaseHeading>
                <div class="index-choose-and-pick__heading">
                    <span class="index-choose-and-pick__heading--primary">Из</span> нашего меню
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BaseHeading from '@/Shared/Components/BaseHeading/BaseHeading.vue';
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/container";
@import "@/Containers/Index/UI/Assets/Scss/index";

.index-choose-and-pick {
    &__container {
        @include section-padding;
        @include site-container;
    }
    &__slogan {
        text-align: center;
        @include slogan;
    }
    &__heading {
        text-align: center;
        @include heading;
    }
}
</style>