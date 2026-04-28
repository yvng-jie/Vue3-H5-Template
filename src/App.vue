<script setup>
  import { RouterView, RouterLink } from "vue-router"
  import { useI18n } from "vue-i18n"
  const { t, locale } = useI18n()

  const toggleLocale = () => {
    locale.value = locale.value === "zh" ? "en" : "zh"
  }
</script>

<template>
  <h1 class="text-xs font-bold underline">Hello Vue3-H5-Template!</h1>
  <div class="flex gap-2">
    <van-button
      type="primary"
      @click="toggleLocale"
      >{{ t("ToggleLocale") }}</van-button
    >
  </div>

  <van-row class="flex justify-center item-center text-xs gap-x-2">
    <van-col>
      <router-link to="/">{{ t("Home") }}</router-link>
    </van-col>
    <van-col>
      <router-link to="/portfolio">{{ t("Portfolio") }}</router-link>
    </van-col>
    <van-col>
      <router-link to="/team">{{ t("Team") }}</router-link>
    </van-col>
  </van-row>
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
    row-gap: 12px;
    justify-content: center;
    align-items: center;
    color: #2c3e50;
  }
</style>
