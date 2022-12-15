<template>
    <div class="input">
        <input class="input__field" v-bind="inputAttrs" />
        <label v-if="inputAttrs.placeholder?.length > 0" class="input__label">{{inputAttrs.placeholder}}</label>
    </div>
</template>

<script setup>
defineProps({
    inputAttrs: {
        type: Object,
        required: false,
        default: () => ({})
    },
})
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/indention";
@import "@/Shared/Assets/Scss/touch";
.input {
    position: relative;

    &__label {
        top: -6px;
        display: block;
        transition: 0.2s;
        position: absolute;
        color: $black-color;
        @include no-touch;
        @include inter-12-bold;
    }
    &__field {
        margin-top: 2px;
        outline: 0;
        border: 0;
        width: 100%;
        border-bottom: 1px solid $gray-color;
        background: transparent;
        transition: border-color 0.2s;
        @include padding-vertical(7px);
        @include inter-14-regular;

        &::placeholder {
            color: $gray-color;
        }
        &:placeholder-shown ~ .input__label {
            color: $gray-color;
            top: 8px;
            @include inter-14-regular;
        }
        &:focus {
            color: $black-color;
            padding-bottom: 6px;
            border-width: 2px;
            border-color: $primary-color;

            & ~ .input__label {
                color: $black-color;
                top: -6px;
                @include inter-12-bold;
            }
        }
    }
}
</style>