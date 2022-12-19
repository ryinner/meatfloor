import { defineAsyncComponent } from "vue";

export default defineAsyncComponent({
    loader: () => import(/*  webpackChunkName: "base-modal" */ "./BaseModal.vue"),
    delay: 300,
});