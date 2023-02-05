<template>
    <div class="menu">
        <h1 class="menu__heading">Меню ресторана</h1>
        <div class="menu__container">
            <section class="menu__items">
                <MenuItem 
                    class="menu__dish"
                    v-for="dish in sortedMenuItems"
                    :key="dish.id"
                    :dish="dish"
                />
            </section>
            <div class="menu__filter">
                <form class="menu__filter-form" ref="form">
                    <BaseInput :input-attrs="{placeholder: 'Название блюда...', name: 'name', class: 'input__field--white'}"/>
                    <div class="menu__filter-categories-heading">Категории</div>
                    <div class="menu__filter-categories-list">
                        <ul>
                            <li v-for="category in categories" :key="category.id" class="menu__filter-category">
                                <BaseCheckbox :input-attrs="{class: 'checkbox__field--white', name: 'categories_ids', value: category.id}">{{ category.name }}</BaseCheckbox>
                            </li>
                        </ul>
                    </div>
                    <div class="menu__filter-submit">
                        <BaseButton class="menu__filter-button" size="sm" @click.prevent="sortItems">Найти</BaseButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import sortMenuItemsAction from '@/Containers/Menu/Functional/Actions/SortMenuItems.action';
import { getMenuItems } from '@/Containers/Menu/Functional/Api/menu.api';
import BaseButton from '@/Shared/Components/BaseButton/BaseButton.vue';
import BaseCheckbox from '@/Shared/Components/BaseCheckbox/BaseCheckbox.vue';
import BaseInput from '@/Shared/Components/BaseInput/BaseInput.vue';
import { onMounted, ref } from 'vue';
import MenuItem from '../../Components/MenuItem/MenuItem.vue';

const form = ref(null);
const categories = ref([]);
const menuItems = ref([]);
const sortedMenuItems = ref([]);

const getData = async () => await getMenuItems().then(response => {
    menuItems.value = response.data.dishes;
    categories.value = response.data.categories;
    sortItems()
});

function sortItems() {
    sortedMenuItems.value = sortMenuItemsAction(menuItems.value, form.value);
}

onMounted(getData);
</script>

<style lang="scss">
@import '@/Shared/Assets/Scss/fonts';
@import '@/Shared/Assets/Scss/vars';
@import '@/Shared/Assets/Scss/indention';
@import '@/Shared/Assets/Scss/grid';
@import '@/Shared/Assets/Scss/container';

.menu {
    @include site-container;
    &__heading {
        text-align: center;
        color: $white-color;
        @include helvetica-60-bold;
        @include margin-vertical(20px);
    }
    &__container {
        gap: 20px;
        @include grid-row;
    }
    &__items {
        gap: 20px;
        grid-column: 9 span;
        @include grid-row;
    }
    &__dish {
        grid-column: 3 span;
    }
    &__filter {
        grid-column: 3 span;
    }
    &__filter-form {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid $gray-color;
        position: sticky;
        top: 20px;
    }
    &__filter-categories-heading {
        color: $white-color;
        @include margin-vertical(12px);
        @include helvetica-24-bold;
    }
    &__filter-category {
        @include margin-vertical(6px);
    }
    &__filter-submit {
        display: flex;
        justify-content: center;
        @include margin-vertical(20px);
    }
    &__filter-button {
        width: 60%;
    }
}
</style>