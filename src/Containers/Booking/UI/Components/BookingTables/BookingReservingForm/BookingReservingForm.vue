<template>
    <BaseModalAsync :is-show="isReserving" @close="emit('update:isReserving', false)">
        <template #heading>
            <span class="reserving-modal__heading">Забронировать столик №{{ id }}</span>
        </template>
        <template #body>
            <form ref="form">
                <div class="reserving-modal__form-control reserving-modal__datetime">
                    <BaseInput class="reserving-modal__date" :input-attrs="{type: 'date', name: 'date', required: true}" />
                    <BaseInput class="reserving-modal__time" :input-attrs="{type: 'time', name: 'time', required: true}" />
                </div>
                <div class="reserving-modal__form-control">
                    <BaseInput class="reserving-modal__count" :input-attrs="{type: 'number', name: 'count', required: true, placeholder: 'Количество человек', max: 6, min: 1}" />
                </div>
                <div class="reserving-modal__form-control">
                    <BaseButton size="sm">Забронировать</BaseButton>
                </div>
            </form>
        </template>
    </BaseModalAsync>
</template>

<script setup>
import BaseButton from '@/Shared/Components/BaseButton/BaseButton.vue';
import BaseInput from '@/Shared/Components/BaseInput/BaseInput.vue';
import BaseModalAsync from '@/Shared/Components/BaseModal/BaseModal.async';
import { ref } from 'vue';

defineProps({
    isReserving: {
        type: Boolean,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
});

const emit = defineEmits({
    'update:isReserving': null
});

const form = ref(null);
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/indention";
.reserving-modal {
    &__heading {
        @include inter-18-bold;
    }
    &__datetime {
        display: flex;
    }
    &__date {
        width: 100%;
    }
    &__form-control {
        @include padding-vertical(2px);
    }
}
</style>