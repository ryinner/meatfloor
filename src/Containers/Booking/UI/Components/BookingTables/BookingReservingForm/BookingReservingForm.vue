<template>
    <BaseModalAsync :is-show="isReserving" @close="emit('update:isReserving', false)">
        <template #heading>
            <span class="reserving-modal__heading">Забронировать столик №{{ id }}</span>
        </template>
        <template #body>
            <form ref="form" @submit.prevent="reserve" v-if="user?.id">
                <div class="reserving-modal__form-control reserving-modal__datetime">
                    <BaseInput class="reserving-modal__date" :input-attrs="{type: 'date', name: 'date', required: true, min: today}" />
                    <BaseInput class="reserving-modal__time" title="С какого времени" :input-attrs="{type: 'time', name: 'time-from', required: true, min: '08:00', max: '21:00'}" />
                    <BaseInput class="reserving-modal__time" title="До какого времени" :input-attrs="{type: 'time', name: 'time-to', required: true, min: '08:00', max: '21:00'}" />
                </div>
                <div class="reserving-modal__form-control">
                    <BaseInput class="reserving-modal__count" :input-attrs="{type: 'number', name: 'count', required: true, placeholder: 'Количество человек', max: 6, min: 1}" />
                </div>
                <div class="reserving-modal__form-control">
                    <BaseButton size="sm">Забронировать</BaseButton>
                    <div class="reserving-modal__error" v-if="errors?.form">{{ errors.form }}</div>
                </div>  
            </form>
            <div v-else>
                <h3 class="reserving-modal__not-auth">Пожалуйста войдите в аккаунт, чтобы забронировать столик</h3>
            </div>
        </template>
    </BaseModalAsync>
</template>

<script setup>
import { createReservation } from '@/Containers/Booking/Functional/Api/reservation.api';
import BaseButton from '@/Shared/Components/BaseButton/BaseButton.vue';
import BaseInput from '@/Shared/Components/BaseInput/BaseInput.vue';
import BaseModalAsync from '@/Shared/Components/BaseModal/BaseModal.async';
import { useUserStore } from '@/Shared/State/useUserStore/useUserStore';
import { ref } from 'vue';

const props = defineProps({
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
const user = useUserStore().user;
const today = new Date().toISOString().split('T')[0];

const form = ref(null);
const errors = ref({});
const reserve = () => {
    const formData = new FormData(form.value);
    formData.append('user_id', user.id)
    formData.append('table_id', props.id);
    createReservation(formData).then(response => {
        if (response.data.success) {
            emit('update:isReserving', false)
            errors.value = {};
        } else {
            errors.value = response.data.errors;
        }
    });
}
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/indention";
.reserving-modal {
    &__heading {
        @include inter-16-regular;
    }
    &__not-auth {
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
    &__error {
        color: $red-color;
        @include inter-14-regular;
    }
}
</style>