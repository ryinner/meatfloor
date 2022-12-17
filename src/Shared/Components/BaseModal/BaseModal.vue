<template>
    <Teleport to="body">
        <Transition name="modal" mode="out-in">
            <div class="modal" v-if="isShow" v-bind="$attrs">
                <div class="modal__background" @click="emit('close')" />
                <div class="modal__content">
                    <div class="modal__heading"><slot name="heading" /></div>
                    <div class="modal__body"><slot name="body" /></div>
                    <div class="modal__footer"><slot name="footer" /></div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
defineProps({
    isShow: {
        type: Boolean,
        required: true,
    }
});
const emit = defineEmits({
    close: null
});
</script>

<script>
export default {
    inheritAttrs: false,
}
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/positions";
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/transitions";
@import "@/Shared/Assets/Scss/indention";
.modal {
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    @include scale;
    &__background {
        top: 0;
        left: 0;
        z-index: 11;
        position: absolute;
        width: 100%;
        height: 100%;
        background: #000000a8;
    }
    &__content {
        min-height: 200px;
        min-width: 320px;
        padding: 20px 30px;
        background-color: $white-color;
        border-radius: 4px;
        position: relative;
        z-index: 12;
    }
    &__heading {
        border-bottom: 1px solid $black-color;
        @include padding-vertical(4px);
    }
    &__body {
        @include padding-vertical(6px);
    }
}
</style>