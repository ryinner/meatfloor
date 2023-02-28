<template>
    <section class="about-us-main">
        <div class="about-us-main__food">
            <div class="about-us-main__food--left">
                <picture>
                    <img
                        src="../../../Assets/Images/AboutUs/taco.png"
                        alt="Ну очень красивая еда"
                        loading="lazy"
                        decoding="async"
                    />
                </picture>
            </div>
            <div class="about-us-main__food--right">
                <picture>
                    <img
                        src="../../../Assets/Images/AboutUs/chiken.png"
                        alt="Ну очень красивая еда 2"
                        loading="lazy"
                        decoding="async"
                    />
                </picture>
                <picture>
                    <img
                        src="../../../Assets/Images/AboutUs/salat.png"
                        alt="Ну очень красивая еда 3"
                        loading="lazy"
                        decoding="async"
                    />
                </picture>
            </div>
        </div>
        <div class="about-us-main__information">
            <div class="about-us-main__text-content">
                <BaseHeading class="about-us-main__slogan" :level="2">О нас</BaseHeading>
                <h2 class="about-us-main__heading"><span class="about-us-main__heading--primary">Еда</span> это важная часть здоровой жизни</h2>
                <div class="about-us-main__description">
                    Мы поставили перед собой задачу - помогать людям правильно и вкусно питаться.
                    Без этого невозможно наслаждаться жизнью, ведь весь наш день зависит от качества
                    потребляемой пищи. У нас можно отведать завтрак, который задаст правильный старт дню, прийти и отобедать с коллегами,
                    и, конечно же, провести семейный ужин.
                </div>
            </div >
        </div>
    </section>
</template>

<script setup>
import BaseHeading from '@/Shared/Components/BaseHeading/BaseHeading.vue';

</script>

<style lang="scss">
@import '@/Shared/Assets/Scss/vars';
@import '@/Shared/Assets/Scss/grid';
@import '@/Shared/Assets/Scss/fonts';
@import '@/Shared/Assets/Scss/indention';

.about-us-main {
    gap: 20px;
    display: grid;
    @include grid-row;

    &__food {
        gap: 20px;
        display: flex;
        grid-column: 6 span;

        &--right {
            gap: 20px;
            display: flex;
            padding-top: 40px;
            flex-direction: column;
        }
    }

    &__information {
        display: flex;
        align-items: center;
        grid-column: 6 span;
    }

    &__slogan {
        color: $primary-color;
        @include great-vibes-32-regular;
    }

    &__heading {
        color: $white-color;
        @include helvetica-60-bold;
        @include padding-vertical(20px);
        &--primary {
            color: $primary-color;
        }
    }

    &__description {
        color: $white-color;
        @include inter-16-regular;
    }
}
</style>