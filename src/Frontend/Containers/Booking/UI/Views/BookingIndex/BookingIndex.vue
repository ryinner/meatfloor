<template>
    <div class="booking">
        <BookingTables />
    </div>
</template>

<script setup>
import BookingTables from '../../Components/BookingTables/BookingTables.vue';

</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/container";
.booking {
    @include site-container;
}
</style>