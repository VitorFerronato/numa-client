<template>
  <div class="d-flex justify-center">
    <v-card :disabled="isLoading" class="pa-8 w-50">
      <div class="d-flex justify-space-between align-center mb-8">
        <p class="font-weight-bold text-h6">Contas</p>
        <AddAccountModal @refreshAccounts="getAccounts" />
      </div>

      <!-- Empty state -->
      <DEmptyState
        v-if="!accounts.length && !isLoading"
        icon="mdi-bank-outline"
        title="Você ainda não possui contas cadastradas"
      />

      <!-- Loader -->
      <DListSkeletonLoader v-if="isLoading" />

      <!-- Accounts List -->
      <div
        v-else
        v-for="(account, index) in accounts"
        :key="index"
        class="account-item pa-4"
      >
        <router-link :to="`/main/manage-accounts/account/${account.id}`">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center ga-4">
              <DAvatar />
              <p>{{ account.name }}</p>
            </div>

            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </router-link>
        <v-divider class="my-8"></v-divider>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import DAvatar from "@/components/DAvatar.vue";
import DEmptyState from "@/components/DEmptyState.vue";
import AddAccountModal from "./AddAccountModal.vue";
import DListSkeletonLoader from "@/components/DListSkeletonLoader.vue";

import { service } from "@/api";
import { ref, onMounted } from "vue";

const accounts = ref({});
const isLoading = ref(true);

const getAccounts = async () => {
  isLoading.value = true;
  try {
    const response = await service.getAccounts();
    accounts.value = response;
  } catch (error) {
    console.error("Erro ao buscar contas:", error);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
};

onMounted(() => {
  getAccounts();
});
</script>

<style lang="scss" scoped>
.account-item {
  transition: background-color 0.3s ease;
  border-radius: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
