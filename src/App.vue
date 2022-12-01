<template>
    <TheHeader />
    <main>
        <RouterView v-slot="{ Component }">
            <Transition>
                <Component :is="Component" />
            </Transition>
        </RouterView>
    </main>
    <TheFooter />
</template>

<script setup>
import TheFooter from './Shared/Components/Layout/TheFooter/TheFooter.vue';
import TheHeader from './Shared/Components/Layout/TheHeader/TheHeader.vue';
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

picture {
    display: flex;
}

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

a {
    text-decoration: none;
}
</style>