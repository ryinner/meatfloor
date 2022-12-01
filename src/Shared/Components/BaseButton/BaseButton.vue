<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/shadow";
.button {
    color: $white-color;
    background-color: $primary-color;
    cursor: pointer;
    padding: 12px 24px;
    border-radius: 32px;
    transition: 300ms all ease-in;
    border: 1px solid transparent;
    @include inter-16-regular;
    &:hover {
        color: $white-color;
        background-color: $black-color;
        border: 1px solid $primary-color;
        transition: 300ms all ease-out;
        @include shadow-primary;
    }
}
</style>