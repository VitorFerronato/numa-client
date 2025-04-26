<template>
  <div>
    <DBtn
      @click="dialog = true"
      title="Adicionar conta"
      append-icon="mdi-plus"
      variant="tonal"
    />

    <v-dialog v-model="dialog" width="500">
      <v-card :disabled="isLoading" class="pa-8">
        <h4 class="mb-6">Adicionar conta</h4>

        <v-form @submit.prevent="validateForm" ref="form">
          <div class="d-flex flex-column align-center ga-4 mb-6">
            <DAvatar />
            <p class="text-text-secondary">Escolha um ícone</p>
          </div>

          <DTextField
            v-model="accountData.name"
            :rules="[(v) => !!v || 'Obrigatório informar o nome da conta']"
            title="Nome da conta"
            placeholder="Nome para identificar a conta"
          />

          <div class="d-flex justify-end mt-6">
            <DBtn
              :loading="isLoading"
              type="submit"
              title="Adicionar conta"
              append-icon="mdi-plus"
            />
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";
import DAvatar from "@/components/DAvatar.vue";
import DTextField from "@/components/DTextField.vue";

import { service } from "@/api";
import { useRouter } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();

const emit = defineEmits(["refreshAccounts"]);

const form = ref(null);
const dialog = ref(false);
const isLoading = ref(false);
const accountData = ref({
  name: null,
  balance: 0,
});

const resetAccountData = () => {
  accountData.value = {
    name: null,
    balance: null,
  };
  if (form.value) {
    form.value.reset();
  }
};

watch(dialog, (newValue) => {
  if (!newValue) {
    resetAccountData();
  }
});

const validateForm = async () => {
  const { valid } = await form.value.validate();

  if (valid) createAccount();
};

const createAccount = async () => {
  isLoading.value = true;
  try {
    await service.createAccount(accountData.value);
    router.push("/main/manage-accounts/accounts");
  } catch (error) {
    console.error("Erro ao criar conta:", error);
  } finally {
    isLoading.value = false;
    dialog.value = false;
    emit("refreshAccounts");
  }
};
</script>
