<template>
  <v-card class="pa-8 mt-5 w-50 d-flex flex-column" style="min-height: 500px">
    <div>
      <p class="font-weight-bold text-h6">Contas</p>
      <div class="mt-4 border-left">
        <p class="text-text-secondary">Saldo Geral</p>
        <v-skeleton-loader
          v-if="totalBalanceLoading"
          type="ossein"
          height="35px"
          width="100px"
        ></v-skeleton-loader>

        <p v-else>
          <span class="font-weight-bold text-h6">{{
            formatCurrency(totalBalance)
          }}</span>
        </p>
      </div>

      <v-divider class="my-6"></v-divider>

      <p class="font-weight-bold text-subtitle-1">Minhas contas</p>

      <div class="d-flex flex-column justify-space-between ga-4 mt-4">
        <div v-if="isLoading">
          <div v-for="n in 3" :key="n">
            <v-skeleton-loader
              type="list-item-avatar-two-line"
              class="mb-4"
            ></v-skeleton-loader>
            <v-divider class="my-4"></v-divider>
          </div>
        </div>

        <DEmptyState
          v-else-if="!isLoading && !accounts.length"
          icon="mdi-bank-outline"
          title="Você ainda não possui contas cadastradas"
        />

        <div v-else>
          <div v-for="(account, index) in accounts" :key="index">
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center ga-4">
                <DAvatar />
                <p>{{ account.name }}</p>
              </div>
              <p class="font-weight-medium">
                {{ formatCurrency(account.balance) }}
              </p>
            </div>
            <v-divider class="my-4"></v-divider>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-auto">
      <router-link to="/main/manage-accounts/accounts">
        <DBtn title="Gerenciar contas" variant="tonal" block class="mt-8" />
      </router-link>
    </div>
  </v-card>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";
import DAvatar from "@/components/DAvatar.vue";
import DEmptyState from "@/components/DEmptyState.vue";

import { service } from "@/api";
import { ref, onMounted } from "vue";
import { formatCurrency } from "@/utils/formatCurrency";

const accounts = ref({});
const isLoading = ref(true);
const totalBalance = ref(0);
const totalBalanceLoading = ref(true);

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

const getTotalBalance = async () => {
  totalBalanceLoading.value = true;
  try {
    const response = await service.getTotalBalance();
    totalBalance.value = response;
  } catch (error) {
    console.error("Erro ao buscar saldo total:", error);
  } finally {
    setTimeout(() => {
      totalBalanceLoading.value = false;
    }, 2000);
  }
};

onMounted(() => {
  getAccounts();
  getTotalBalance();
});
</script>

<style lang="scss" scoped>
.border-left {
  border-left: 4px solid $feedback-color-success-pure;
  border-radius: 4px;
  padding-left: 16px;
}
</style>
