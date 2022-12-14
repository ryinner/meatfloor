<template>
    <section class="index-choose-and-pick">
        <div class="index-choose-and-pick__container">
            <div class="index-choose-and-pick__info">
                <BaseHeading class="index-choose-and-pick__slogan">Выберите и закажите</BaseHeading>
                <div class="index-choose-and-pick__heading">
                    <span class="index-choose-and-pick__heading--primary">Из</span> нашего меню
                </div>
            </div>
            <div class="index-choose-and-pick__menu index-menu" v-scroll="getMenu">
                <div class="index-menu__categories">
                    <ul class="index-menu__categories-list">
                        <li
                            v-for="category in categories" :key="category.id"
                            @click="changeSelectedCategory(category)"
                            class="index-menu__categories-item"
                            :class="{'index-menu__categories-item--primary': selectedCategory === category}"
                        >
                            {{category.name}}
                        </li>
                    </ul>
                    <div class="index-menu__food">
                        <div class="index-menu__selected-category">
                            <picture>
                                <img :src="selectedCategory.image" :alt="selectedCategory.name" />
                            </picture>
                        </div>
                        <div class="index-menu__selected-category-food">
                            <div class="index-menu__dish" v-for="dish in selectedCategory.dishes" :key="dish.id">
                                <picture class="index-menu__dish-image">
                                    <img :src="dish.image" :alt="dish.name" />
                                </picture>
                                <div class="index-menu__dish-info">
                                    <div class="index-menu__dish-name" :title="dish.name">{{dish.name}}</div>
                                    <div class="index-menu__dish-description" :title="dish.description">{{dish.description}}</div>
                                    <div class="index-menu__dish-price">{{dish.price}} руб.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { getIndexMenu } from "@/Containers/Index/Functional/Api/index.api";
import BaseHeading from '@/Shared/Components/BaseHeading/BaseHeading.vue';
import { ref } from "vue";

const categories = ref([]);
const selectedCategory = ref({});
const getMenu = async () => await getIndexMenu().then(response => {
    categories.value = response.data;
    selectedCategory.value = categories.value[0];
});
const changeSelectedCategory = (category) => {
    selectedCategory.value = category;
};
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/container";
@import "@/Containers/Index/UI/Assets/Scss/index";
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/grid";
@import "@/Shared/Assets/Scss/text";

.index-choose-and-pick {
    &__container {
        @include section-padding;
        @include site-container;
    }
    &__slogan {
        text-align: center;
        @include slogan;
    }
    &__heading {
        text-align: center;
        @include heading;
    }
}

.index-menu {
    &__categories-list {
        gap: 70px;
        display: grid;
        list-style-type: none;
        margin-bottom: 50px;
        @include grid-row;
    }
    &__categories-item {
        color: $white-color;
        cursor: pointer;
        @include inter-18-regular;
        transition: 300ms all ease-out;
        &:hover, &--primary {
            color: $primary-color;
            transition: 300ms all ease-in;
        }
    }
    &__selected-category-food, &__food {
        gap: 20px;
        @include grid-row;
    }
    &__selected-category {
        grid-column: 4 span;
    }
    &__selected-category-food {
        grid-column: 8 span;
    }
    &__dish {
        gap: 10px;
        height: 100px;
        grid-column: 6 span;
        @include grid-row(6);
        &-image {
            height: 100%;
            grid-column: 1 span;
            border-radius: 4px;
        }
        &-info {
            grid-column: 5 span;
        }
        &-name {
            color: $white-color;
            @include text-ellipsis(1);
            @include inter-20-bold;
        }
        &-description {
            color: $white-color;
            @include text-ellipsis;
            @include inter-14-regular;
        }
        &-price {
            color: $primary-color;
        }
    }
}
</style>