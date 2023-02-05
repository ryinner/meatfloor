<template>
    <div class="error-by-server-code">
        <h1 class="error-by-server-code__header">404</h1>
        <section class="error-by-server-code__section">
            <h2 class="error-by-server-code__heading">Ох, похоже вы зашли не туда</h2>
            <div class="error-by-server-code__text">
                Страница не найдена! Может быть вы зашли сюда случайно, в любом случае выход из ситуации снизу!
            </div>
            <div class="error-by-server-code__helper">
                <RouterLink class="error-by-server-code__link button button--lg" :to="{name: 'index'}">На главную</RouterLink>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@import '@/Shared/Assets/Scss/container';
@import '@/Containers/Errors/UI/Assets/Scss/errors-text';

.error-by-server-code {
    @include site-container;
    @include errors-text;
}
</style>