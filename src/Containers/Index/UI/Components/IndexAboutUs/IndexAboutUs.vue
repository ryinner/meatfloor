<template>
    <section class="index-about-us">
        <div class="index-about-us__container">
            <div class="index-about-us__info">
                <BaseHeading class="index-about-us__slogan">О нас</BaseHeading>
                <div class="index-about-us__heading">
                    <span class="index-about-us__heading--primary">Мы</span> создаем еду
                </div>
                <div class="index-about-us__description">
                    Наша еда готовится из самых свежих продуктов с лучших Российских ферм. Мы ценим наших клиентов и выдаем для них пищу премиального качества.
                    Наши повара профессионалы в кулинарном искусстве, каждый из них подходит с любовью к своей работе
                </div>
                <ul class="index-about-us__strengths">
                    <li class="index-about-us__strengths-item">Забота о каждом клиенте</li>
                    <li class="index-about-us__strengths-item">Профессиональная команда</li>
                    <li class="index-about-us__strengths-item">Премиальное качество</li>
                </ul>
                <BaseButton class="index-about-us__button">Узнать больше</BaseButton>
            </div>
            <div class="index-about-us__food">
                <picture class="index-about-us__food-main">
                    <img src="@/Containers/Index/UI/Assets/Images/index-aboutus-food-1.png" alt="Красивая тарелка с яйцом" loading="lazy" />
                </picture>
                <picture class="index-about-us__food-secondary">
                    <img src="@/Containers/Index/UI/Assets/Images/index-aboutus-food-2.png" alt="Красивая тарелка с мясом" loading="lazy" />
                </picture>
                <picture class="index-about-us__food-secondary">
                    <img src="@/Containers/Index/UI/Assets/Images/index-aboutus-food-3.png" alt="Красивая тарелка с тостами" loading="lazy" />
                </picture>
            </div>
        </div>
    </section>
</template>

<script setup>
import BaseHeading from '@/Shared/Components/BaseHeading/BaseHeading.vue';
import BaseButton from '@/Shared/Components/BaseButton/BaseButton.vue';
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/vars";
@import "@/Containers/Index/UI/Assets/Scss/index";
@import "@/Shared/Assets/Scss/container";
@import "@/Shared/Assets/Scss/grid";
@import "@/Shared/Assets/Scss/touch";

.index-about-us {
    &__container {
        padding-top: 120px;
        gap: 50px;
        @include site-container;
        @include grid-row;
    }
    &__info {
        grid-column: 6 span;
    }
    &__strengths {
        list-style-position: inside;
        list-style-image: url(@/Shared/Assets/Images/Icons/check.svg);
        color: $white-color;
        @include inter-18-regular;
    }
    &__strengths-item {
        @include margin-vertical(20px);
    }
    &__button {
        @include margin-vertical(20px);
    }
    &__food {
        grid-column: 6 span;
        gap: 20px;
        @include grid-row(2);
        @include no-touch;
    }
    &__food-main {
        grid-column: 2 span;
    }
    &__food-secondary {
        grid-column: 1 span
    }
    &__slogan {
        @include slogan;
    }
    &__heading {
        @include heading;
    }
    &__description {
        @include description;
    }
}
</style>