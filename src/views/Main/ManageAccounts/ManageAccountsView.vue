<template>
  <div>
    <v-tabs v-model="tab" align-tabs="center" class="my-6">
      <v-tab to="/main/manage-accounts/accounts" value="accounts">
        <v-icon start>mdi-bank</v-icon>
        Contas
      </v-tab>
      <v-tab to="/main/manage-accounts/credit-cards" value="cards">
        <v-icon start>mdi-credit-card</v-icon>
        Cartões
      </v-tab>
    </v-tabs>

    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(null);
</script>
