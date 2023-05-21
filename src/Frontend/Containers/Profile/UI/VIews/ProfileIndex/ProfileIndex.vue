<template>
    <div class="profile">
        <h1 class="profile__heading">
            {{ userState.isAuthenticated ? userState.user.name : 'Пожалуйста авторизуйтесь' }}
        </h1>
        <section class="profile__reservations">
            <article 
                class="profile__reservation reservation"
                v-for="reservation in user.reservations"
                :key="reservation.id"
            >
                <h2 class="reservation__heading">Стол №{{ reservation.table_id }}</h2>
                <div class="reservation__time">С {{ pickTimeHelper(reservation.time_from) }} до {{ pickTimeHelper(reservation.time_to) }}</div>
                <div class="reservation__count">Ждем вас в количестве {{ reservation.count }} чел.</div>
                <div class="reservation__date">{{ dateConverterHelper(reservation.time_from) }}</div>
                <div class="reservation__button"><BaseButton size="sm" @click="remove(reservation.id)">Отменить</BaseButton></div>
            </article>
        </section>
    </div>
</template>

<script setup>
import { removeReservation } from '@/Containers/Booking/Functional/Api/reservation.api.js';
import { getProfileIndex } from '@/Containers/Profile/Functional/Api/profile.api.js';
import BaseButton from '@/Shared/Components/BaseButton/BaseButton.vue';
import dateConverterHelper from '@/Shared/Helpers/dateConverter.helper.js';
import pickTimeHelper from '@/Shared/Helpers/pickTime.helper.js';
import { useUserStore } from "@/Shared/State/useUserStore/useUserStore";
import { onMounted, ref } from 'vue';

const userState = useUserStore();

const user = ref({});

const getData = async () => await getProfileIndex().then(response => {
    user.value = response.data.user;
});

const remove = async (id) => await removeReservation(id).then(() => {
    user.value.reservations.splice(user.value.reservations.findIndex((reservation) => reservation.id === id), 1);
});

onMounted(getData)
</script>

<style lang="scss">
@import '@/Shared/Assets/Scss/container';
@import '@/Shared/Assets/Scss/vars';
@import '@/Shared/Assets/Scss/grid';
@import '@/Shared/Assets/Scss/fonts';
@import '@/Shared/Assets/Scss/indention';

.profile {
    @include site-container;
    &__heading {
        color: $white-color;
        @include helvetica-60-bold;
        @include margin-vertical(20px);
    }
    &__reservations {
        gap: 20px;
        @include grid-row;
    }
    &__reservation {
        padding: 20px;
        border-radius: 6px;
        grid-column: 3 span;
        border: 1px solid $primary-color;
    }
}

.reservation {
    &__heading {
        margin-bottom: 12px;
        color: $white-color;
        @include inter-18-bold;
    }

    &__date, &__count, &__time {
        text-align: center;
        color: $white-color;
        @include inter-16-regular;
    }

    &__button {
        display: flex;
        justify-content: center;
        margin-top: 14px;
    }
}
</style>