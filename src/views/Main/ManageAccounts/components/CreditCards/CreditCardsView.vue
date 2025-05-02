<template>
  <div class="d-flex justify-center">
    <v-card class="pa-8 w-50">
      <div class="d-flex justify-space-between align-center mb-8">
        <p class="font-weight-bold text-h6">Cartões</p>

        <AddOrEditCreditCardModal @refreshCreditCards="getCreditCards" />
      </div>

      <DEmptyState
        v-if="!creditCards.length && !isLoading"
        icon="mdi-credit-card-outline"
        title="Você ainda não possui cartões cadastrados"
      />

      <DListSkeletonLoader v-if="isLoading" />

      <div
        v-else
        v-for="(creditCard, index) in creditCards"
        :key="index"
        class="credit-card-item pa-4"
      >
        <router-link :to="`/main/manage-accounts/credit-card/${creditCard.id}`">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center ga-4">
              <DAvatar />
              <p>{{ creditCard.name }}</p>
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
import AddOrEditCreditCardModal from "./AddOrEditCreditCardModal.vue";
import DListSkeletonLoader from "@/components/DListSkeletonLoader.vue";

import { service } from "@/api";
import { ref, onMounted } from "vue";

const creditCards = ref([]);
const isLoading = ref(true);

const getCreditCards = async () => {
  try {
    const response = await service.getCreditCards();
    creditCards.value = response;
  } catch (error) {
    console.error("Erro ao buscar cartões:", error);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
};

onMounted(() => {
  getCreditCards();
});
</script>

<style lang="scss" scoped>
.credit-card-item {
  transition: background-color 0.3s ease;
  border-radius: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
