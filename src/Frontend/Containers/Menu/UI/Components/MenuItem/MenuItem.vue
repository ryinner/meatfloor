<template>
    <article class="menu-dish" @click="isShow = true">
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
        <BaseModalAsync class="menu-modal" :is-show="isShow" @close="isShow = false">
            <template #heading><h4 class="menu-modal__heading">{{ dish.name }}</h4></template>
            <template #body>
                <div class="menu-modal__body">
                    <picture class="menu-modal__image">
                        <img :src="dish.image" :alt="dish.name" />
                    </picture>
                    <div class="menu-modal__info">
                        <div class="menu-modal__description">{{ dish.description }}</div>
                        <div class="menu-modal__values">
                            <span class="menu-modal__callories">{{ dish.callories }} ккал.</span>
                            <span class="menu-modal__price">{{ dish.price }} руб.</span>
                        </div>
                    </div>
                </div>
            </template>
        </BaseModalAsync>
    </article>
</template>

<script setup>
import BaseModalAsync from '@/Shared/Components/BaseModal/BaseModal.async';
import { ref } from 'vue';

defineProps({
    dish: {
        type: Object,
        required: true
    }
});

const isShow = ref(false);
</script>

<style lang="scss">
@import '@/Shared/Assets/Scss/vars';
@import '@/Shared/Assets/Scss/fonts';
@import '@/Shared/Assets/Scss/grid';

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

.menu-modal {
    &__heading {
        @include inter-18-bold;
    }

    &__body {
        gap: 40px;
        display: grid;
        max-width: 600px;
        @include grid-row;
    }

    &__image {
        grid-column: 4 span;
    }

    &__info {
        grid-column: 8 span;
    }

    &__description {
        @include inter-14-regular;
    }

    &__values {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
    }

    &__price {
        color: $primary-color;
        @include inter-14-bold;
    }

    &__callories {
        @include inter-14-bold;
    }
}
</style>