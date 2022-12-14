<template>
    <header class="header" :class="{'header--opacity': route.meta?.headerOpacity}">
        <div class="header__content">
            <div class="header__logo">
                <RouterLink :to="{name: 'index'}">
                    <span class="logo"><span class="logo__primary">Meat</span>floor</span>
                </RouterLink>
            </div>
            <div class="header__navigation">
                <NavigationList
                    :navigation="Navigation"
                />
            </div>
            <div class="header__controls">
                <TheSearch class="header__button"/>
                <TheUser class="header__button"/>
                <TheCart class="header__button"/>
            </div>
        </div>
    </header>
</template>

<script setup>
import Navigation from "@/Shared/Assets/Maps/Navigation.js";
import { useRoute } from "vue-router";
import NavigationList from "../NavigationList/NavigationList.vue";
import TheCart from "../TheCart/TheCart.vue";
import TheSearch from "../TheSearch/TheSearch.vue";
import TheUser from "../TheUser/TheUser.vue";

const route = useRoute();
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/grid";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/container";
@import "@/Shared/Assets/Scss/indention";
@import "@/Shared/Assets/Scss/shadow";

.header {
    padding: 20px 0;
    background-color: $black-color;
    position: relative;
    z-index: 2;
    &--opacity {
        border-bottom: 1px solid $black-color;
        background-color: transparent !important
    }
    &__content {
        @include grid-row;
        @include site-container;
    }
    &__navigation {
        grid-column: 7;
        display: flex;
        align-items: center;
    }
    &__controls {
        grid-column: 12;
        display: flex;
        align-items: center;
        justify-content: flex-end
    }
    &__button {
        @include margin-right(10px);
    }
}
.logo {
    @include post-no-bills-jaffna-24-bold;
    color: $white-color;
    transition: 300ms ease-in;
    &__primary {
        color: $primary-color;
    }
    &:hover {
        transition: 300ms ease-out;
        color: $primary-color;
        @include shadow-primary;
    }
}
</style>