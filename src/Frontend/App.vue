<template>
    <TheHeader />
    <main>
        <RouterView v-slot="{ Component }">
            <Transition name="app-fade">
                <Component :is="Component" />
            </Transition>
        </RouterView>
    </main>
    <TheFooter />
    <TheCopyright />
</template>

<script setup>
import TheCopyright from './Shared/Components/Layout/TheCopyright/TheCopyright.vue';
import TheFooter from './Shared/Components/Layout/TheFooter/TheFooter.vue';
import TheHeader from './Shared/Components/Layout/TheHeader/TheHeader.vue';
</script>

<style lang="scss">
@import "@/Shared/Assets/Scss/fonts-face";
@import "@/Shared/Assets/Scss/transitions";
@import "@/Shared/Assets/Scss/vars";
@include font-face-variations('Inter', 'Inter-VariableFont_slnt,wght');
@include font-face('PostNoBillsJaffna', 'PostNoBillsJaffna-Bold.woff', 700, "bold");
@include font-face('GreatVibes', 'GreatVibes-Regular.ttf', 400, "regular");
@include font-face('Helvetica', 'Helvetica-bold.otf', 700, "bold");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: $black-color;
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
    color: inherit;
    text-decoration: none;
}

.app-fade {
    @include fade;
}
</style>