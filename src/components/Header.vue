<template>
  <header class="header">
    <p>Numa</p>
    <div class="d-flex ga-5">
      <router-link to="/main/dashboard">Visão geral</router-link>
      <router-link to="/main/entry">Lançamentos</router-link>
    </div>
    <router-link to="/login/sign-out">
      <v-icon color="white">mdi-logout</v-icon>
    </router-link>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: $header-height;
  background-color: $color-primary;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>
