<template>
  <v-app>
    <Header v-if="route.path.startsWith('/main')" />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component
          :is="Component"
          :class="route.path.startsWith('/main') ? 'main-view' : ''"
        />
      </transition>
    </router-view>
  </v-app>
</template>

<script setup>
import Header from "@/components/Header.vue";

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
.main-view {
  margin-top: $header-height;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
