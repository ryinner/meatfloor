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
    <TheCopyright />
</template>

<script setup>
import TheCopyright from './Shared/Components/Layout/TheCopyRight/TheCopyright.vue';
import TheFooter from './Shared/Components/Layout/TheFooter/TheFooter.vue';
import TheHeader from './Shared/Components/Layout/TheHeader/TheHeader.vue';
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/fonts-face";
@include font-face-variations('Inter', 'Inter-VariableFont_slnt,wght');
@include font-face('PostNoBillsJaffna', 'PostNoBillsJaffna-Bold.woff', 700, "bold");
@include font-face('GreatVibes', 'GreatVibes-Regular.ttf', 400, "regular");
@include font-face('Helvetica', 'Helvetica-bold.otf', 700, "bold");

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