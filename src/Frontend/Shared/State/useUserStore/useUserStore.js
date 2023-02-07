import { Buffer } from 'buffer';
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
    const jwt = ref(localStorage.getItem("jwt"));

    const isAuthenticated = computed(() => jwt.value?.length ? true : false);
    const user = computed(() => isAuthenticated.value ? JSON.parse(Buffer.from((jwt.value.split('.')[1]), "base64").toString()).user : null);

    const authenticate = (token) => {
        jwt.value = token;
        localStorage.setItem("jwt", token);
    };

    const logout = () => {
        localStorage.removeItem('jwt');
    };

    return {
        user,
        jwt,
        isAuthenticated,
        authenticate,
        logout
    };
});