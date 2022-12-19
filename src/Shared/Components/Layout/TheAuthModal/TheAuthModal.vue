<template>
    <BaseModal
        :isShow="isModalOpen"
        @close="emit('update:isModalOpen', false)"
    >
        <template #heading>
            <h4 class="modal-auth__header">
                <span
                    class="modal-auth__switcher"
                    @click="modalTab = 'TheAuth'"
                >
                    Войти
                </span>
                /
                <span
                    class="modal-auth__switcher"
                    @click="modalTab = 'TheRegistration'"
                >
                    Регистрация
                </span>
            </h4>
        </template>
        <template #body>
            <Component
                :is="modalList[modalTab]"
                @registrationSuccess="modalTab = 'TheAuth'"
            />
        </template>
    </BaseModal>
</template>


<script setup>
import { ref } from "vue";
import BaseModal from '../../BaseModal/BaseModal.async';
import TheAuth from "../TheAuth/TheAuth.vue";
import TheRegistration from "../TheRegistration/TheRegistration.vue";

defineProps({
    isModalOpen: {
        type: Boolean,
        required: true,
    }
})

const emit = defineEmits({
    "update:isModalOpen": null,
})

const modalList = {
    TheAuth,
    TheRegistration
}

const modalTab = ref('TheAuth');
</script>

<style lang="scss" scoped>

</style>