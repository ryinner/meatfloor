<template>
    <div class="input">
        <input class="input__field" :class="{'input__field--error': haveErrors}" v-bind="inputAttrs" />
        <label v-if="inputAttrs.placeholder?.length > 0" class="input__label">{{ inputAttrs.placeholder }}</label>
        <template v-if="haveErrors">
            <div class="input__errors" v-for="error in errors" :key="error">
                <span class="input__errors-item">{{error}}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    inputAttrs: {
        type: Object,
        required: false,
        default: () => ({})
    },
    errors: {
        type: Array,
        required: false,
        default: () => ([])
    }
});

const haveErrors = computed(() => props.errors.length > 0)
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/indention";
@import "@/Shared/Assets/Scss/touch";
.input {
    position: relative;
    @include margin-vertical(6px);
    &__label {
        top: -8px;
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
        @include padding-vertical(6px);
        @include inter-14-regular;

        &--error {
            border-bottom: 1px solid $red-color !important;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px $white-color inset;
        }

        &::placeholder {
            color: transparent;
        }
        &:placeholder-shown ~ .input__label {
            color: $gray-color;
            top: 8px;
            @include inter-14-regular;
        }
        &:focus {
            color: $black-color;
            padding-bottom: 6px;
            border-width: 1px;
            border-color: $primary-color;

            & ~ .input__label {
                color: $black-color;
                top: -6px;
                @include inter-12-bold;
            }
        }
        &--white {
            color: $white-color;
            & ~ .input__label {
                color: $white-color !important;
            }

            &:focus {
                color: $white-color !important;
                & ~ .input__label {
                    color: $white-color !important;
                }
            }
        }
    }

    &__errors {
        margin-bottom: 12px;
    }

    &__errors-item {
        color: $red-color;
        @include inter-12-regular;
        @include margin-right(4px);
    }
}
</style>