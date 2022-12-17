<template>
    <form @submit.prevent="" class="modal-auth__form">
        <BaseInput :inputAttrs="{name: 'login', type: 'text', placeholder: 'Логин'}" />
        <BaseInput :inputAttrs="{name: 'phone', type: 'text', placeholder: 'Номер телефона'}" />
        <BaseInput :inputAttrs="{name: 'email', type: 'email', placeholder: 'Почта'}" />
        <BaseInput :inputAttrs="{name: 'password', type: 'password', placeholder: 'Пароль'}" />
        <BaseButton size="sm" class="modal-auth__button">Создать аккаунт</BaseButton>
    </form>
</template>

<script setup>
import BaseButton from "../../BaseButton/BaseButton.vue";
import BaseInput from "../../BaseInput/BaseInput.vue";
</script>

<style lang="scss">

</style>