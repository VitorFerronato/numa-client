<template>
  <div class="d-flex justify-center">
    <v-card
      :disabled="getAccountLoading"
      :loading="getAccountLoading"
      class="pa-6 w-50"
    >
      <div class="d-flex justify-space-between align-center mb-6">
        <h2 class="text-h6">Editar Conta</h2>
        <v-btn
          :loading="loading"
          @click="deleteAccount"
          color="error"
          variant="tonal"
          type="submit"
        >
          Excluir conta
        </v-btn>
      </div>

      <v-form @submit.prevent="validateForm" ref="form">
        <v-text-field
          v-model="accountData.name"
          label="Nome da conta"
          :rules="[(v) => !!v || 'Nome é obrigatório']"
          variant="outlined"
          density="comfortable"
          class="mb-4"
        />
        <v-text-field
          v-model="accountData.balance"
          label="Saldo inicial"
          type="number"
          prefix="R$"
          :rules="[(v) => !!v || 'Saldo é obrigatório']"
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
import { service } from "@/api";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const form = ref(null);
const router = useRouter();
const loading = ref(false);
const getAccountLoading = ref(false);

const accountData = ref({
  name: "",
  balance: 0,
  includeInTotal: true,
});

const validateForm = async () => {
  const { valid } = await form.value.validate();

  if (!valid) return;

  handleSubmit();
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

const deleteAccount = async () => {
  getAccountLoading.value = true;
  try {
    await service.deleteAccount(router.currentRoute.value.params.id);
    router.push("/main/manage-accounts/accounts");
  } catch (error) {
    console.error("Error deleting account:", error);
  } finally {
    getAccountLoading.value = false;
  }
};

onMounted(() => {
  const accountId = router.currentRoute.value.params.id;
  getAccountById(accountId);
});
</script>
