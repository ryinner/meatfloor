<template>
    <div class="loading" />
</template>

<script setup>

</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/vars";
.loading {
    width: 100%;
    height: 100%;
    animation: loading-pulse 1.8s ease-in-out infinite alternate;

    @keyframes loading-pulse {
        0% {
            background: $gray-color;
        }
        50% {
            background: $lighter-gray-color;
        }
        100% {
            background: $gray-color;
        }
    }
}
</style>