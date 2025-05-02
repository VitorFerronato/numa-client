<template>
  <v-card class="pa-8 mt-5 w-50">
    <p class="font-weight-bold text-h6">Cartões</p>

    <div class="mt-4 border-left">
      <p class="text-text-secondary">Faturas de abril ( mock )</p>
      <p>
        <span>R$</span>
        <span class="font-weight-bold text-h6">- 1.583,40 ( mock)</span>
      </p>
    </div>
    <v-divider class="my-6"></v-divider>

    <p class="font-weight-bold text-subtitle-1">Meus cartões</p>

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
      v-else-if="!creditCards.length && !isLoading"
      icon="mdi-credit-card-outline"
      title="Você ainda não possui cartões cadastrados"
    />

    <div v-else class="d-flex flex-column justify-space-between ga-4 mt-4">
      <div v-for="(creditCard, index) in creditCards">
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex align-center ga-4">
            <div class="avatar"></div>
            <p>{{ creditCard.name }}</p>
          </div>
          <DBtn title="Ver fatura" variant="outlined" />
        </div>
        <div
          class="d-flex justify-space-between align-center px-8 py-2 mt-4 rounded-lg bg-background-light"
        >
          <div>
            <p class="text-subtitle-1">Límite disponível</p>
            <p>
              <span class="font-weight-bold">{{
                formatCurrency(creditCard.limit)
              }}</span>
            </p>
          </div>
          <div>
            <p class="text-subtitle-1">Fatura atual</p>
            <p>
              <span class="font-weight-bold">R$ 1.000,00 (mock)</span>
            </p>
          </div>
        </div>
      </div>

      <v-divider class="my-4"></v-divider>
    </div>

    <div class="mt-auto">
      <router-link to="/main/manage-accounts/credit-cards">
        <DBtn title="Gerenciar cartões" variant="tonal" block class="mt-8" />
      </router-link>
    </div>
  </v-card>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";
import DEmptyState from "@/components/DEmptyState.vue";

import { service } from "@/api";
import { ref, onMounted } from "vue";
import { formatCurrency } from "@/utils/formatCurrency";

const isLoading = ref(true);
const creditCards = ref([]);

const getCreditCards = async () => {
  try {
    const response = await service.getCreditCards();
    creditCards.value = response;
  } catch (error) {
    console.error("Erro ao buscar cartões:", error);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  }
};

onMounted(() => {
  getCreditCards();
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
