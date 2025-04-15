<template>
  <div class="d-flex justify-center">
    <v-card :disabled="isLoading" class="pa-8 w-50">
      <div class="d-flex justify-space-between align-center mb-8">
        <p class="font-weight-bold text-h6">Contas</p>
        <AddAccountModal @refreshAccounts="getAccounts" />
      </div>

      <h4
        class="text-subtitle-1 text-center"
        v-if="!accounts.length && !isLoading"
      >
        Nenhuma conta encontrada
      </h4>

      <!-- Skeleton Loader -->
      <div v-if="isLoading" class="skeleton-container">
        <div v-for="n in 3" :key="n" class="skeleton-item">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center ga-4">
              <v-skeleton-loader
                type="avatar"
                width="43"
                height="43"
                class="skeleton-avatar"
              ></v-skeleton-loader>
              <v-skeleton-loader
                type="text"
                width="150"
                height="24"
              ></v-skeleton-loader>
            </div>
            <v-skeleton-loader
              type="text"
              width="24"
              height="24"
            ></v-skeleton-loader>
          </div>
          <v-divider class="my-8"></v-divider>
        </div>
      </div>

      <!-- Accounts List -->
      <div v-else v-for="(account, index) in accounts" :key="index">
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
import AddAccountModal from "./AddAccountModal.vue";

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
    isLoading.value = false;
  }
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

.skeleton-container {
  .skeleton-item {
    margin-bottom: 8px;
  }

  .skeleton-avatar {
    border-radius: 50%;
  }
}
</style>
