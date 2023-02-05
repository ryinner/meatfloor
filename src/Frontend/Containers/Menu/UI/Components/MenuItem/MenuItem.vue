<template>
    <article class="menu-dish">
        <picture class="menu-dish__image">
            <img :src="dish.image" :alt="dish.name" />
        </picture>
        <div class="menu-dish__info">
            <div class="menu-dish__name" :title="dish.name">
                {{ dish.name }}
            </div>
            <div class="menu-dish__price">
                {{ dish.price }} руб.
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    dish: {
        type: Object,
        required: true
    }
});
</script>

<style lang="scss">
@import '@/Shared/Assets/Scss/vars';
@import '@/Shared/Assets/Scss/fonts';

.menu-dish {
    display: flex;
    flex-direction: column;
    max-height: 300px;

    &__image {
        flex: 1;
    }

    &__info {
        flex: 0;
    }

    &__name {
        color: $white-color;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @include inter-14-bold;
    }

    &__price {
        color: $primary-color;
        @include inter-14-bold;
    }
}
</style>