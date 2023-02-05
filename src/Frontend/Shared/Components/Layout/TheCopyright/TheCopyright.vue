<template>
    <div class="copyright">
        <div class="copyright__container">
            <div class="copyright__text">Все права защищены ©2022 - {{new Date().getFullYear()}} Meatfloor</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/container";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/vars";
.copyright {
    background-color: $primary-color;
    &__container {
        padding: 16px 0;
        @include site-container;
    }
    &__text {
        color: $white-color;
        @include inter-16-regular;
    }
}
</style>