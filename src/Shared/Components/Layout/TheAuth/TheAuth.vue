<template>
    <form @submit.prevent="" class="modal-auth__form">
        <BaseInput :inputAttrs="{name: 'login', type: 'text', placeholder: 'Логин'}" />
        <BaseInput :inputAttrs="{name: 'password', type: 'password', placeholder: 'Пароль'}" />
        <BaseButton size="sm" class="modal-auth__button">Войти</BaseButton>
    </form>
</template>

<script setup>
import BaseButton from "../../BaseButton/BaseButton.vue";
import BaseInput from "../../BaseInput/BaseInput.vue";

</script>