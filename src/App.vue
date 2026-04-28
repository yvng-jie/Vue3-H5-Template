<script setup>
  import { RouterView } from "vue-router"
  import { useI18n } from "vue-i18n"
  const { t, locale } = useI18n()

  const toggleLocale = () => {
    locale.value = locale.value === "zh" ? "en" : "zh"
  }
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div class="flex gap-2">
    <button @click="toggleLocale">Toggle Locale</button>
      {{ t("test") }}
  </div>

  <RouterView />
</template>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    color: #2c3e50;
  }
</style>
