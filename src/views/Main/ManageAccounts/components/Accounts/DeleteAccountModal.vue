<template>
  <div>
    <DBtn
      :title="buttonName"
      @click="dialog = true"
      color="error"
      append-icon="mdi-trash-can"
      variant="tonal"
    />

    <v-dialog v-model="dialog" width="500" :persistent="isLoading">
      <v-card :disabled="isLoading" class="pa-8">
        <h4 class="mb-6">Excluir {{ name }}</h4>

        <div class="text-center">
          <p class="mb-6">
            Tem certeza que deseja excluir {{ name }}
            <strong>{{ data?.name ?? "-" }} ?</strong>
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
            :title="buttonName"
            @click="deleteAccount"
            type="submit"
            color="error"
            append-icon="mdi-trash-can"
          />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";

import { ref, computed } from "vue";
import { service } from "@/api";
import { useRouter } from "vue-router";

const router = useRouter();

const dialog = ref(false);
const isLoading = ref(false);

const emit = defineEmits(["refreshAccounts"]);
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  isCredit: {
    type: Boolean,
    default: false,
  },
});

const name = computed(() => {
  return props.isCredit ? "o cartão" : "a conta";
});

const buttonName = computed(() => {
  return props.isCredit ? "Excluir cartão" : "Excluir conta";
});

const deleteAccount = async () => {
  isLoading.value = true;

  const method = props.isCredit ? "deleteCreditCard" : "deleteAccount";

  try {
    await service[method](props.id);

    dialog.value = false;
    redirect();
  } catch (error) {
    console.error("Error deleting account:", error);
  } finally {
    isLoading.value = false;
  }
};

const redirect = () => {
  props.isCredit
    ? router.push("/main/manage-accounts/credit-cards")
    : router.push("/main/manage-accounts/accounts");
};
</script>
