<template>
    <section class="index-hero">
        <div class="index-hero__background">
            <picture>
                <img class="index-hero__background-image" src="@/Containers/Index/UI/Assets/Images/index-hero.png" />
            </picture>
        </div>
        <div class="index-hero__container">
            <div class="index-hero__info">
                <div class="index-hero__slogan">Это вкусно и восхитительно!</div>
                <div class="index-hero__heading"><h2><span class="index-hero__heading--primary">Ис</span>кусство приготовления пищи</h2></div>
                <div class="index-hero__description">Лучшие блюда премиального качества от профессионалов</div>
                <div class="index-hero__button"><RouterLink :to="{name: 'menu'}" class="button button--lg">Посмотреть меню</RouterLink></div >
            </div>
            <div class="index-hero__food">
                <picture>
                    <img src="@/Containers/Index/UI/Assets/Images/index-hero-food.png" alt="Ну очень красивое блюдо" />
                </picture>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/container";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/grid";
@import "@/Shared/Assets/Scss/touch";
@import "@/Containers/Index/UI/Assets/Scss/index";
.index-hero {
    position: relative;
    &__background {
        top: -10%;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        position: absolute;
        filter: brightness(0.1);
        @include no-touch;
    }
    &__container {
        z-index: 1;
        min-height: 850px;
        position: relative;
        padding-top: 120px;
        gap: 50px;
        @include grid-row;
        @include site-container;
    }
    &__info {
        grid-column: 6 span;
    }
    &__food {
        grid-column: 6 span;
        @include no-touch;
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
    &__button {
        @include margin-vertical(40px);
    }
}
</style>