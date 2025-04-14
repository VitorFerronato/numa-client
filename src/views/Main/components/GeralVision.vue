<template>
  <v-card class="pa-8 d-flex">
    <div class="w-50">
      <p class="text-text-secondary">Bom dia!</p>
      <p class="font-weight-bold text-h6">Vitor Ferronato</p>

      <div class="d-flex justify-center pl-4 mt-6 ga-8">
        <div class="d-flex justify-center align-center flex-column text-center">
          <p class="text-text-secondary">Receita total</p>

          <v-skeleton-loader
            v-if="isLoading"
            type="ossein"
            height="35px"
            width="100px"
          ></v-skeleton-loader>

          <p class="font-weight-bold text-success text-h5" v-else>
            R$ {{ accountStats.totalBalance }}
          </p>
        </div>

        <v-divider vertical></v-divider>

        <div class="d-flex justify-center align-center flex-column text-center">
          <p class="text-text-secondary">Despesa mensal</p>

          <v-skeleton-loader
            v-if="isLoading"
            type="ossein"
            height="35px"
            width="100px"
          ></v-skeleton-loader>

          <p class="font-weight-bold text-error text-h5" v-else>
            R$ {{ accountStats.totalExpenses }}
          </p>
        </div>
      </div>
    </div>

    <v-divider vertical></v-divider>

    <div class="w-50">
      <p class="font-weight-bold text-center mt-4 text-h6">Acesso rápido</p>

      <div class="d-flex justify-center ga-8 mt-4">
        <AddRegister expense />

        <AddRegister />
      </div>
    </div>
  </v-card>
</template>

<script setup>
import AddRegister from "@/components/AddRegister.vue";

import { service } from "@/api";
import { ref, onMounted } from "vue";

const isLoading = ref(true);
const accountStats = ref({});

const getAccountStats = async () => {
  isLoading.value = true;
  try {
    const response = await service.getAccountStats();
    accountStats.value = response;
  } catch (error) {
    console.error("Erro ao buscar dados da conta:", error);
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

onMounted(() => {
  getAccountStats();
});
</script>

<style lang="scss" scoped></style>
