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
                            class="index-menu__categories-item"
                        >
                            {{category.name}}
                        </li>
                    </ul>
                    <div class="index-menu__food">

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
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/container";
@import "@/Containers/Index/UI/Assets/Scss/index";
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/fonts";
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;
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
}
</style>