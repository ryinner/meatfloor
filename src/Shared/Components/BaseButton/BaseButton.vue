<template>
    <button class="button" :class="`button--${size}`">
        <slot />
    </button>
</template>

<script setup>
defineProps({
    size: {
        type: String,
        default: "lg",
        validator: (value) => ["sm", "md", "lg"].includes(value),
    }
})
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/shadow";
.button {
    color: $white-color;
    background-color: $primary-color;
    cursor: pointer;
    border-radius: 32px;
    transition: 300ms all ease-in;
    border: 1px solid transparent;
    &--sm {
        padding: 6px 12px;
        @include inter-14-regular;
    }
    &--lg {
        padding: 12px 24px;
        @include inter-16-regular;
    }
    &:hover {
        color: $white-color;
        background-color: $black-color;
        border: 1px solid $primary-color;
        transition: 300ms all ease-out;
        @include shadow-primary;
    }
}
</style>