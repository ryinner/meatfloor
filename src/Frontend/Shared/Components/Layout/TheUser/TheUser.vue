<template>
    <div class="user">
        <picture class="user__image" @click="isOpen = !isOpen">
            <svg class="user__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.1569 15 12.0002 15C13.8434 15 15.6542 15.4851 17.2506 16.4065C18.8471 17.3279 20.1729 18.6533 21.0949 20.2493" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </picture>
        <TheAuthModal v-if="!userState.isAuthenticated" v-model:isModalOpen="isOpen" />
        <div class="user__menu" v-else-if="isOpen">
            <ul class="user__menu-list">
                <li class="user__menu-item"><RouterLink class="user__menu-link" :to="{name: 'profile'}">Профиль</RouterLink></li>
                <li class="user__menu-item" @click="userState.logout()">Выход</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from "@/Shared/State/useUserStore/useUserStore";
import { ref } from "vue";
import TheAuthModal from "../TheAuthModal/TheAuthModal.vue";

const userState = useUserStore();
const isOpen = ref(false);
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/icon";
@import "@/Shared/Assets/Scss/fonts";
@import "@/Shared/Assets/Scss/vars";
@import "@/Shared/Assets/Scss/shadow";

.user {
    position: relative;
    &__image {
        @include icon-24;
    }
    &__icon {
        @include icon-base-style;
    }
    &__menu {
        top: 100%;
        right: 0;
        padding: 6px 12px;
        position: absolute;
    }
    &__menu-list {
        background-color: $black-color;
        border-radius: 6px;
        list-style-type: none;
        border: 1px solid $primary-color;
    }
    &__menu-item {
        padding: 6px 12px;
        cursor: pointer;
        color: $white-color;
        transition: 300ms ease-out;
        @include inter-16-regular;
        &:not(:last-child) {
            border-bottom: 1px solid $primary-color;
        }
        &:hover {
            transition: 300ms ease-in;
            color: $primary-color;
            @include shadow-primary;
        }
    }
    &__menu-link {
        color: inherit
    }
}
.modal-auth {
    &__header {
        @include inter-18-regular;
    }
    &__switcher {
        cursor: pointer;
    }
    &__button {
        width: 100%;
        margin-top: 24px;
    }
}
</style>