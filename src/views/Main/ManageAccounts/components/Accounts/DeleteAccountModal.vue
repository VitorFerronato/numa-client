<template>
  <div>
    <DBtn
      @click="dialog = true"
      color="error"
      title="Excluir conta"
      append-icon="mdi-trash-can"
      variant="tonal"
    />

    <v-dialog v-model="dialog" width="500" :persistent="isLoading">
      <v-card :disabled="isLoading" class="pa-8">
        <h4 class="mb-6">Excluir conta</h4>

        <div class="text-center">
          <p class="mb-6">
            Tem certeza que deseja excluir a conta
            <strong>{{ account?.name ?? "-" }} ?</strong>
          </p>
          <p class="color-error">Essa ação não podera ser desfeita</p>
        </div>

        <div class="d-flex justify-end mt-6">
          <DBtn
            :disabled="isLoading"
            @click="dialog = false"
            type="submit"
            color="error"
            title="Cancelar"
            variant="tonal"
            class="mr-4"
          />
          <DBtn
            :loading="isLoading"
            @click="deleteAccount"
            type="submit"
            color="error"
            title="Excluir conta"
            append-icon="mdi-trash-can"
          />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";

import { ref } from "vue";
import { service } from "@/api";
import { useRouter } from "vue-router";

const router = useRouter();

const dialog = ref(false);
const isLoading = ref(false);

const emit = defineEmits(["refreshAccounts"]);
const props = defineProps({
  account: {
    type: Object,
    required: true,
  },
  accountId: {
    type: String,
    required: true,
  },
});

const deleteAccount = async () => {
  isLoading.value = true;
  try {
    await service.deleteAccount(props.accountId);
    router.push("/main/manage-accounts/accounts");
    dialog.value = false;
  } catch (error) {
    console.error("Error deleting account:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
