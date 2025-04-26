<template>
  <div class="d-flex justify-center">
    <v-card class="pa-6 w-50">
      <div class="d-flex justify-space-between align-center mb-6">
        <h2 class="text-h6">Editar Conta</h2>

        <DeleteAccountModal :account="accountData" :accountId="accountId" />
      </div>

      <div v-if="getAccountLoading" class="d-flex justify-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="40"
        ></v-progress-circular>
      </div>

      <v-form v-else @submit.prevent="validateForm" ref="form">
        <v-text-field
          v-model="accountData.name"
          :rules="[(v) => !!v || 'Nome é obrigatório']"
          label="Nome da conta"
          variant="outlined"
          density="comfortable"
          class="mb-4"
        />
        <v-text-field
          v-model="accountData.balance"
          :rules="[(v) => !!v || 'Saldo é obrigatório']"
          label="Saldo inicial"
          type="number"
          prefix="R$"
          variant="outlined"
          density="comfortable"
          class="mb-4"
        />
        <div class="d-flex justify-end ga-4">
          <v-btn
            :disabled="loading"
            @click="$router.back()"
            color="error"
            variant="outlined"
          >
            Cancelar
          </v-btn>
          <v-btn
            :loading="loading"
            color="success"
            variant="elevated"
            type="submit"
          >
            Salvar
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import DeleteAccountModal from "./DeleteAccountModal.vue";

import { service } from "@/api";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const form = ref(null);
const router = useRouter();
const loading = ref(false);
const accountId = ref(null);
const getAccountLoading = ref(false);
const accountData = ref({
  name: "",
  balance: 0,
});

const validateForm = async () => {
  const { valid } = await form.value.validate();

  if (valid) handleSubmit();
};

const handleSubmit = async () => {
  loading.value = true;
  try {
    accountData.value.balance = Number(accountData.value.balance);
    const accountId = router.currentRoute.value.params.id;
    await service.updateAccount(accountId, accountData.value);
    router.push("/main/manage-accounts/accounts");
  } catch (error) {
    console.error("Error updating account:", error);
  } finally {
    loading.value = false;
  }
};

const getAccountById = async (accountId) => {
  getAccountLoading.value = true;
  try {
    const response = await service.getAccountById(accountId);
    accountData.value = response;
  } catch (error) {
    console.error("Error getting account:", error);
  } finally {
    getAccountLoading.value = false;
  }
};

onMounted(() => {
  accountId.value = router.currentRoute.value.params.id;
  getAccountById(accountId.value);
});
</script>
