<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item" v-for="(navigationItem, index) in Navigation" :key="index">
                <RouterLink class="navigation__link" :to="{name: navigationItem.route}">{{navigationItem.name}}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import Navigation from "@/Shared/Assets/Maps/Navigation.js";
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/indention";
@import "@/Shared/Assets/Scss/shadow";
.navigation {
    &__list {
        display: flex;
        list-style-type: none;
    }
    &__item {
        @include margin-right(20px);
        @include inter-16-regular;
    }
    &__link {
        color: $white-color;
        white-space: nowrap;
        transition: 300ms ease-in-out;
        &:hover {
            color: $primary-color;
            transition: 300ms ease-in;
            @include shadow-primary;
        }
    }
}
</style>