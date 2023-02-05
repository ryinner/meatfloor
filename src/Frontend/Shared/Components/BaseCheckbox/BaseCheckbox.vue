<template>
    <div class="checkbox">
        <input class="checkbox__field" :id="hash" v-bind="inputAttrs" type="checkbox" />
        <label class="checkbox__label" :for="hash"><span class="checkbox__icon" /><slot /></label>
    </div>
</template>

<script setup>
import generateHashHelper from '@/Shared/Helpers/generateHash.helper';

defineProps({
    inputAttrs: {
        type: Object,
        required: false,
    }
});

const hash = generateHashHelper();
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/fonts";

.checkbox {
    position: relative;

    &__label {
        top: 0;
        left: 0;
        position: absolute;
        display: inline-block;
        color: $black-color;
        @include inter-14-regular;
    }

    &__field {
        &:checked + .checkbox__label .checkbox__icon {
            background-color: $primary-color;
            border-color: $primary-color;
        }

        &:checked + .checkbox__label .checkbox__icon::after {
            content: '\2713';
            position: absolute;
            top: 2px;
            font-size: 16px;
            line-height: 8px;
        }
    }

    &__icon {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        margin-bottom: -2px;
        display: inline-block;
        color: $white-color;
        border: 1px solid;
        border-color: $gray-color;
        background-color: $white-color;
        position: relative;
    }
}
</style>