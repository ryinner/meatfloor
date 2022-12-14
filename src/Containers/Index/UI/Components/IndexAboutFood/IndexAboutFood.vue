<template>
    <section class="index-about-food">
        <div class="index-about-food__background">
            <picture>
                <img src="@/Containers/Index/UI/Assets/Images/index-background-grass.png" alt="Красивая еда" loading="lazy" />
            </picture>
        </div>
        <div class="index-about-food__container">
            <div class="index-about-food__header">
                <BaseHeading class="index-about-food__slogan">Категории еды</BaseHeading>
                <div class="index-about-food__heading">
                    <span class="index-about-food__heading--primary">Вы</span>бери еду для себя
                </div>
            </div>
            <div class="index-about-food__food">
                <picture class="index-about-food__food-item">
                    <img src="@/Containers/Index/UI/Assets/Images/index-aboutfood-1.png" alt="Красивая еда" loading="lazy" />
                </picture>
                <picture class="index-about-food__food-item">
                    <img src="@/Containers/Index/UI/Assets/Images/index-aboutfood-2.png" alt="Красивая еда" loading="lazy" />
                </picture>
                <picture class="index-about-food__food-item">
                    <img src="@/Containers/Index/UI/Assets/Images/index-aboutfood-3.png" alt="Красивая еда" loading="lazy" />
                </picture>
                <picture class="index-about-food__food-item">
                    <img src="@/Containers/Index/UI/Assets/Images/index-aboutfood-4.png" alt="Красивая еда" loading="lazy" />
                </picture>
            </div>
        </div>
    </section>
</template>

<script setup>
import BaseHeading from '@/Shared/Components/BaseHeading/BaseHeading.vue';
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/container";
@import "@/Shared/Assets/Scss/vars";
@import "@/Containers/Index/UI/Assets/Scss/index";
@import "@/Shared/Assets/Scss/grid";
.index-about-food {
    position: relative;
    &__container {
        @include section-padding;
        @include site-container;
    }
    &__background {
        position: absolute;
        right: 0;
        bottom: -400px;
    }
    &__header {
        text-align: center
    }
    &__slogan {
        @include slogan;
    }
    &__heading {
        @include heading;
    }
    &__food {
        gap: 30px;
        @include grid-row;
    }
    &__food-item {
        position: relative;
        grid-column: 3 span;
    }
}
</style>