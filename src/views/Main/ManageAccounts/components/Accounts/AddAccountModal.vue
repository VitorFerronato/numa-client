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

        <div class="d-flex flex-column align-center ga-4 mb-6">
          <div class="avatar"></div>
          <p class="text-text-secondary">Escolha um ícone</p>
        </div>

        <DTextField
          v-model="accountData.name"
          title="Nome da conta"
          placeholder="Nome para identificar a conta"
        />

        <div class="d-flex justify-end mt-6">
          <DBtn
            :loading="isLoading"
            @click="createAccount"
            title="Adicionar conta"
            append-icon="mdi-plus"
          />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";
import DTextField from "@/components/DTextField.vue";

import { ref } from "vue";
import { service } from "@/api";
import { useRouter } from "vue-router";

const router = useRouter();

const emit = defineEmits(["refreshAccounts"]);

const dialog = ref(false);
const isLoading = ref(false);
const accountData = ref({
  name: "",
  balance: 0,
});

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

<style lang="scss" scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid $feedback-color-success-pure;
}
</style>
