<template>
    <form @submit.prevent="registration" class="modal-auth__form" ref="form">
        <BaseInput :inputAttrs="{name: 'fio', type: 'text', placeholder: 'ФИО', required: true}" />
        <BaseInput :inputAttrs="{name: 'phone', type: 'text', placeholder: 'Номер телефона', required: true}" :errors="errors?.phone" />
        <BaseInput :inputAttrs="{name: 'email', type: 'email', placeholder: 'Почта', required: true}" :errors="errors?.email" />
        <BaseInput :inputAttrs="{name: 'password', type: 'password', placeholder: 'Пароль', required: true}" />
        <BaseButton size="sm" class="modal-auth__button">Создать аккаунт</BaseButton>
    </form>
</template>

<script setup>
import { registration as registrationRequest } from "@/Shared/Api/Auth.api";
import { ref } from "vue";
import BaseButton from "../../BaseButton/BaseButton.vue";
import BaseInput from "../../BaseInput/BaseInput.vue";

const emit = defineEmits({
    registrationSuccess: null
})

const form = ref(null);
const errors = ref({});

const registration = () => registrationRequest(new FormData(form.value)).then(response => {
    if (response.data.success) {
        emit("success");
    } else {
        errors.value = response.data.errors;
    }
});
</script>

<style lang="scss">

</style>