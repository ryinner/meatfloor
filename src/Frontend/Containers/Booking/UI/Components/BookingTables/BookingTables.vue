<template>
    <div class="booking-tables">
        <BookingTablesItem
            v-for="table in BookingTablesMap"
            :key="table.id"
            :id="table.id"
        />
    </div>
</template>

<script setup>
import BookingTablesMap from '../../Assets/Maps/BookingTablesMap';
import BookingTablesItem from './BookingTablesItem/BookingTablesItem.vue';

</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/grid";
.booking-tables {
    min-height: 400px;
    min-width: 400px;
    padding: 20px;
    overflow-y: auto;
    background-color: $brawn-color;
    gap: 20px;
    @include grid-row(3);
    @include grid-column(4, 150px);
}
</style>