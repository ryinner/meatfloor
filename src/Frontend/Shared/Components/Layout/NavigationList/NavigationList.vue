<template>
    <nav class="navigation">
        <ul class="navigation__list" :class="{'navigation__list--column': align === 'column'}">
            <li class="navigation__item" v-for="(navigationItem, index) in navigation" :key="index">
                <RouterLink class="navigation__link" :to="{name: navigationItem.route}">{{navigationItem.name}}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
defineProps({
    align: {
        type: String,
        default: "row"
    },
    navigation: {
        type: Array,
        required: true,
    }
});
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
        &--column {
            flex-direction: column;
        }
    }
    &__list--column &__item {
        @include margin-bottom(20px);
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