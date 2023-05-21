<template>
    <div class="booking-tables">
        <BookingTablesItem
            v-for="table in BookingTablesMap"
            :key="table.id"
            :id="table.id"
            class="booking-tables__item"
        />
        <div class="booking-tables__item booking-tables__entry" />
    </div>
</template>

<script setup>
import BookingTablesMap from '../../Assets/Maps/BookingTablesMap';
import BookingTablesItem from './BookingTablesItem/BookingTablesItem.vue';

</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/grid";
@import "@/Shared/Assets/Scss/fonts";

.booking-tables {
    min-height: 400px;
    min-width: 400px;
    padding: 20px;
    overflow-y: auto;
    background-color: $darker-gray-color;
    border: 1px solid $brawn-color;
    gap: 20px;
    @include grid-row(12);
    @include grid-column(5, 150px);

    &__item, &__entry {
        grid-column: 6 span;
    }

    &__entry {
        position: relative;

        &::before {
            content: '';
            width: calc(100% - 40px);
            height: 2px;
            background-color: $brawn-color;
            position: absolute;
            left: -20px;
            top: 10%;
        }

        &::after {
            content: 'Вход';
            left: 13%;
            top: 50%;
            position: absolute;
            color: $white-color;
            @include helvetica-24-bold;
        }
    }
}
</style>