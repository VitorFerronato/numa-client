<template>
  <v-card class="pa-8 mt-5 w-50">
    <p class="font-weight-bold text-h6">Contas</p>
    <div class="mt-4 border-left">
      <p class="text-text-secondary">Saldo Geral</p>
      <v-skeleton-loader
        v-if="isLoading"
        type="ossein"
        height="35px"
        width="100px"
      ></v-skeleton-loader>

      <p v-else>
        <span>R$ </span>
        <span class="font-weight-bold text-h6">{{
          accounts.generalBalance
        }}</span>
      </p>
    </div>

    <v-divider class="my-6"></v-divider>

    <p class="font-weight-bold text-subtitle-1">Minhas contas</p>

    <div class="d-flex flex-column justify-space-between ga-4 mt-4">
      <template v-if="isLoading">
        <div v-for="n in 3" :key="n">
          <v-skeleton-loader
            type="list-item-avatar-two-line"
            class="mb-4"
          ></v-skeleton-loader>
          <v-divider class="my-4"></v-divider>
        </div>
      </template>
      <template v-else>
        <div v-for="(account, index) in accounts.accounts" :key="index">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center ga-4">
              <div class="avatar"></div>
              <p>{{ account.name }}</p>
            </div>
            <p class="font-weight-medium">R$ {{ account.balance }}</p>
          </div>
          <v-divider class="my-4"></v-divider>
        </div>
      </template>
    </div>

    <DBtn title="Gerenciar contas" variant="tonal" block class="mt-8" />
  </v-card>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";

import { service } from "@/api";
import { ref, onMounted } from "vue";

const accounts = ref({});
const isLoading = ref(true);

const getAccounts = async () => {
  try {
    const response = await service.getAccounts();
    accounts.value = response;
  } catch (error) {
    console.error("Erro ao buscar contas:", error);
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

onMounted(() => {
  getAccounts();
});
</script>

<style lang="scss" scoped>
.border-left {
  border-left: 4px solid $feedback-color-success-pure;
  border-radius: 4px;
  padding-left: 16px;
}

.avatar {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: 1px solid $feedback-color-success-pure;
}
</style>
