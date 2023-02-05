<template>
    <form @submit.prevent="auth" class="modal-auth__form" ref="form">
        <BaseInput :inputAttrs="{name: 'login', type: 'text', placeholder: 'Номер телефона или почта', required: true}" />
        <BaseInput :inputAttrs="{name: 'password', type: 'password', placeholder: 'Пароль', required: true}" />
        <BaseButton size="sm" class="modal-auth__button">Войти</BaseButton>
    </form>
</template>

<script setup>
import { auth as AuthRequest } from "@/Shared/Api/Auth.api";
import { useUserStore } from "@/Shared/State/useUserStore/useUserStore";
import { ref } from "vue";
import BaseButton from "../../BaseButton/BaseButton.vue";
import BaseInput from "../../BaseInput/BaseInput.vue";

const userState = useUserStore();
const form = ref(null);

const auth = () => AuthRequest(new FormData(form.value)).then(response => {
    if (response.data.success) {
        userState.authenticate(response.data.data);
    }
})
</script>