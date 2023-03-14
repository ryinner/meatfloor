import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
    const user = ref(localStorage.getItem("user"));

    const isAuthenticated = computed(() => user.value ? true : false);

    const authenticate = (token) => {
        user.value = token;
        localStorage.setItem("user", token);
    };

    const logout = () => {
        localStorage.removeItem('user');
        user.value = null;
    };

    return {
        user,
        isAuthenticated,
        authenticate,
        logout
    };
});