import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
    const userParsed = localStorage.getItem("user") === null ? null : JSON.parse(localStorage.getItem("user"));
    const user = ref(userParsed);

    const isAuthenticated = computed(() => user.value ? true : false);

    const authenticate = (token) => {
        user.value = token;
        localStorage.setItem("user", JSON.stringify(token));
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