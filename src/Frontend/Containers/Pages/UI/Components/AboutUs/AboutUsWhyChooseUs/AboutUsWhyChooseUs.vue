<template>
    <section class="about-us-why-choose-us">
        <BaseHeading
            class="about-us-why-choose-us__heading"
            :level="2"
        >
            Почему именно мы
        </BaseHeading>
        <div class="about-us-why-choose-us__description">Самая лучшая еда премиального качества</div>
        <div class="about-us-why-choose-us__food">
            <picture>
                <img
                    src="../../../Assets/Images/AboutUs/fish.png"
                    alt="Ну очень красивая еда"
                    loading="lazy"
                    decoding="async"
                />
            </picture>
        </div>
        <div class="about-us-why-choose-us__icons-list">
            <div class="about-us-why-choose-us__icon-item">
                <picture class="about-us-why-choose-us__icon-picture">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20V45" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.9375 67.5001C19.4389 63.6634 22.8581 60.5114 26.8851 58.3296C30.9122 56.1478 35.4199 55.0051 40 55.0051C44.5801 55.0051 49.0879 56.1478 53.1149 58.3296C57.142 60.5114 60.5611 63.6634 63.0625 67.5001" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M70 20L40 30L10 20L40 10L70 20Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M52.9063 25.6875C55.1995 28.1918 56.7147 31.3092 57.267 34.6597C57.8193 38.0101 57.3849 41.4489 56.0168 44.5568C54.6487 47.6647 52.4059 50.3074 49.562 52.1628C46.718 54.0182 43.3957 55.0061 40 55.0061C36.6043 55.0061 33.282 54.0182 30.438 52.1628C27.5941 50.3074 25.3513 47.6647 23.9832 44.5568C22.6151 41.4489 22.1807 38.0101 22.733 34.6597C23.2854 31.3092 24.8005 28.1918 27.0938 25.6875" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </picture>
                <div class="about-us-why-choose-us__icon-name">Лучшие повара</div>
                <div class="about-us-why-choose-us__icon-description">Здесь вас будут обслуживать только профессионалы и мастера кулинарного искусства</div>
            </div>
            <div class="about-us-why-choose-us__icon-item">
                <picture class="about-us-why-choose-us__icon-picture">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5 7.5V17.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M37.5 7.5V17.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M47.5 7.5V17.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 67.5H65" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.0313 67.5C21.2465 65.3045 17.1924 61.7817 14.3507 57.3501C11.5089 52.9186 9.99892 47.7644 10 42.5V27.5H65V42.5C65.0011 47.7644 63.4911 52.9186 60.6493 57.3501C57.8076 61.7817 53.7535 65.3045 48.9687 67.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M65 27.5C67.6522 27.5 70.1957 28.5536 72.0711 30.4289C73.9464 32.3043 75 34.8478 75 37.5V40C75 42.6522 73.9464 45.1957 72.0711 47.0711C70.1957 48.9464 67.6522 50 65 50H63.9375" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </picture>
                <div class="about-us-why-choose-us__icon-name">Вкусная еда</div>
                <div class="about-us-why-choose-us__icon-description">Большой ассортимент разнообразной кухни</div>
            </div>
            <div class="about-us-why-choose-us__icon-item">
                <picture class="about-us-why-choose-us__icon-picture">
                    <svg width="80" height="78" viewBox="0 0 80 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.9688 20.5C44.8012 20.5 48.7188 16.5825 48.7188 11.75C48.7188 6.91751 44.8012 3 39.9688 3C35.1363 3 31.2188 6.91751 31.2188 11.75C31.2188 16.5825 35.1363 20.5 39.9688 20.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M48.0928 40.0937L58.9678 48.5312C59.6867 49.1297 60.6034 49.4378 61.5378 49.3952C62.4723 49.3525 63.3571 48.9622 64.0185 48.3007C64.6799 47.6393 65.0703 46.7545 65.1129 45.8201C65.1556 44.8856 64.8475 43.969 64.249 43.25L51.874 27.3438C51.2973 26.7612 50.6112 26.2984 49.855 25.982C49.0988 25.6655 48.2875 25.5018 47.4678 25.5H32.4678C30.8041 25.5089 29.2104 26.171 28.0303 27.3438L15.6553 43.25C15.0109 43.9652 14.6663 44.9009 14.6928 45.8632C14.7193 46.8255 15.1149 47.7407 15.7976 48.4194C16.4803 49.0981 17.3979 49.4883 18.3603 49.5091C19.3228 49.5299 20.2564 49.1798 20.9678 48.5312L31.8428 40.0937L23.1553 67.4688C22.946 67.9161 22.8268 68.4002 22.8047 68.8936C22.7825 69.3869 22.8577 69.8798 23.026 70.3441C23.1943 70.8084 23.4524 71.235 23.7856 71.5996C24.1188 71.9641 24.5205 72.2595 24.9678 72.4688C25.4151 72.678 25.8993 72.7972 26.3926 72.8194C26.886 72.8415 27.3789 72.7663 27.8432 72.598C28.3075 72.4297 28.7341 72.1716 29.0986 71.8384C29.4631 71.5053 29.7585 71.1036 29.9678 70.6562L39.9678 54.9063L49.9678 70.6562C50.1631 71.1231 50.4509 71.5456 50.8139 71.8982C51.1768 72.2509 51.6074 72.5265 52.0797 72.7083C52.5519 72.8902 53.0561 72.9745 53.5618 72.9564C54.0676 72.9382 54.5644 72.8178 55.0224 72.6026C55.4804 72.3873 55.8901 72.0815 56.2268 71.7037C56.5634 71.3259 56.8202 70.8839 56.9815 70.4042C57.1428 69.9245 57.2054 69.4172 57.1655 68.9127C57.1255 68.4082 56.9838 67.917 56.749 67.4688L48.0928 40.0937Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </picture>
                <div class="about-us-why-choose-us__icon-name">Отличное обслуживание</div>
                <div class="about-us-why-choose-us__icon-description">Все наши официанты отвечают стандартам мирового качества обслуживания</div>
            </div>
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

.about-us-why-choose-us {
    &__heading {
        color: $white-color;
        text-align: center;
        @include helvetica-60-bold;
    }

    &__description {
        color: $white-color;
        text-align: center;
        @include inter-16-regular;
    }

    &__food {
        @include padding-vertical(40px);
    }

    &__icons-list {
        display: flex;
        @include grid-row;
    }

    &__icon-item {
        display: grid;
        grid-column: 4 span;
        text-align: center;
    }

    &__icon-picture {
        justify-content: center;
    }

    &__icon-name {
        color: $white-color;
        @include margin-vertical(12px);
        @include helvetica-24-bold;
    }

    &__icon-description {
        color: $white-color;
        align-self: end;
        @include inter-14-regular;
    }
}
</style>