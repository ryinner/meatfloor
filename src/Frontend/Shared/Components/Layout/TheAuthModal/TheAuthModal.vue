<template>
    <BaseModal
        :isShow="isModalOpen"
        @close="emit('update:isModalOpen', false)"
    >
        <template #heading>
            <h4 class="modal-auth__header">
                <span
                    class="modal-auth__switcher"
                    :class="{'modal-auth__switcher--active': isAuthComponentActive}"
                    @click="modalTab = 'TheAuth'"
                >
                    Войти
                </span>
                /
                <span
                    class="modal-auth__switcher"
                    :class="{'modal-auth__switcher--active': !isAuthComponentActive}"
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
import { computed, ref } from "vue";
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

const isAuthComponentActive = computed(() => modalTab.value === 'TheAuth');
</script>

<style lang="scss">
@import '@/Shared/Assets/Scss/vars';

.modal-auth {
    &__switcher {
        color: $gray-color;
        &--active {
            color: $black-color;
        }
    }
}
</style>