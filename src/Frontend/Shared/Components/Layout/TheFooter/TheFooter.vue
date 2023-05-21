<template>
    <footer class="footer">
        <hr class="footer__border" />
        <div class="footer__container">
            <div class="footer__about-us">
                <div class="footer__heading">О нас.</div>
                <div class="footer__about-us-description">
                    Мы обслуживаем клиентов с большой любовью и профессиональным подходом к делу. Для нас
                    нет ничего более важного, чем сытный и довольный клиент
                </div>
                <div class="footer__work-time">
                    <div class="footer__icon-container">
                        <div class="footer__icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12.5V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M26.4952 23.75L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.7761 15.5806H35.0261V9.33057" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M29.7227 29.7227C27.7997 31.6457 25.3497 32.9553 22.6825 33.4858C20.0153 34.0164 17.2506 33.7441 14.7381 32.7033C12.2256 31.6626 10.0782 29.9003 8.56729 27.6391C7.05642 25.3779 6.25 22.7195 6.25 20C6.25 17.2805 7.05642 14.6221 8.56729 12.3609C10.0782 10.0997 12.2256 8.33737 14.7381 7.29666C17.2506 6.25596 20.0153 5.98366 22.6825 6.51421C25.3497 7.04476 27.7997 8.35432 29.7227 10.2773L35.026 15.5806" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="footer__time">
                        <div class="footer__time-heading">
                            Часы работы
                        </div>
                        <div class="footer__time-info">
                            Понедельник-суббота: 8.00 - 20.00
                        </div>
                        <div class="footer__time-info">
                            Воскресенье: выходной
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__clear-fix" />
            <div class="footer__navigation">
                <div class="footer__heading">Полезные ссылки.</div>
                <NavigationList
                    :navigation="Navigation"
                    align="column"
                />
            </div>
            <div class="footer__clear-fix" />
            <div class="footer__help">
                <div class="footer__heading">Помощь.</div>
                <NavigationList
                    :navigation="NavigationHelp"
                    align="column"
                />
            </div>
            <div class="footer__background">
                <picture>
                    <img src="@/Shared/Assets/Images/Footer/green-footer.png" alt="Красивый цветочек" />
                </picture>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Navigation from "@/Shared/Assets/Maps/Navigation.js";
import NavigationHelp from "@/Shared/Assets/Maps/NavigationHelp";
import NavigationList from "../NavigationList/NavigationList.vue";
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/container";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/grid";
@import "@/Containers/Index/UI/Assets/Scss/index";
.footer {
    position: relative;
    background-color: $black-color;
    padding-bottom: 50px;
    &__border {
        width: 60%;
        margin: 120px auto;
        color: $primary-color;
        border-color: $primary-color;
        background-color: $primary-color;
    }
    &__container {
        gap: 20px;
        @include grid-row;
        @include site-container;
    }
    &__heading {
        color: $white-color;
        margin-bottom: 20px;
        @include helvetica-24-bold;
    }
    &__about-us, &__help, &__navigation {
        grid-column: 3 span;
    }
    &__clear-fix {
        grid-column: 1 span;
    }
    &__about-us-description {
        color: $white-color;
        margin-bottom: 20px;
        @include inter-16-regular;
    }
    &__work-time {
        display: flex;
    }
    &__icon-container {
        display: flex;
        align-items: center;
        margin-right: 20px;
    }
    &__icon {
        @include icon;
    }
    &__time-heading {
        color: $white-color;
        @include inter-18-regular;
    }
    &__time-info {
        color: $white-color;
        @include inter-14-regular;
    }
    &__background {
        position: absolute;
        right: 0;
        bottom: -2px;
        filter: blur(1px) brightness(0.9);
    }
}
</style>