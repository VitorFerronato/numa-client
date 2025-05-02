<template>
  <div>
    <DBtn
      :title="buttonName"
      :append-icon="buttonIcon"
      @click="dialog = true"
      variant="tonal"
    />

    <v-dialog v-model="dialog" width="500" :persistent="isLoading">
      <v-card :disabled="isLoading" class="pa-8">
        <h4 class="mb-6">Adicionar cartão</h4>

        <v-form @submit.prevent="validateForm" ref="form">
          <div class="d-flex flex-column align-center ga-4 mb-6">
            <DAvatar />
            <p class="text-text-secondary">Escolha um ícone</p>
          </div>

          <DTextField
            v-model="creditCardData.name"
            :rules="[(v) => !!v || 'Obrigatório informar o nome do cartão']"
            title="Nome do cartão"
            placeholder="Nome para identificar o cartão"
            class="mb-6"
          />

          <DTextField
            v-model="creditCardData.limit"
            :rules="[(v) => !!v || 'Obrigatório informar o limite disponível']"
            type="number"
            prefix="R$"
            title="Limite disponível"
            placeholder="Limite disponível para o cartão"
          />

          <div class="d-flex align-center ga-4 my-4">
            <DDataPicker
              v-model="creditCardData.closeDate"
              title="Data de fechamento"
              class="flex-grow-1"
            />
            <DDataPicker
              v-model="creditCardData.dueDate"
              title="Data de vencimento"
              class="flex-grow-1"
            />
          </div>

          <DCombobox
            v-model="creditCardData.accountId"
            :items="accounts"
            :loading="getAccountsLoading"
            :disabled="getAccountsLoading"
            :rules="[(v) => !!v || 'Obrigatório informar a conta!']"
            item-title="name"
            item-value="id"
            title="Conta de pagamento padrão"
          />

          <div class="d-flex justify-end mt-6">
            <DBtn
              :loading="isLoading"
              type="submit"
              title="Confirmar"
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
import DCombobox from "@/components/DCombobox.vue";
import DTextField from "@/components/DTextField.vue";
import DDataPicker from "@/components/DDataPicker.vue";

import { service } from "@/api";
import { ref, watch, onMounted, computed } from "vue";

const emit = defineEmits(["refreshCreditCards"]);
const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false,
  },
  creditCardToEdit: {
    type: Object,
    required: false,
  },
});

const form = ref(null);
const dialog = ref(false);
const accounts = ref([]);
const isLoading = ref(false);
const getAccountsLoading = ref(false);
const creditCardData = ref({
  name: null,
  limit: null,
  closeDate: null,
  dueDate: null,
});

const buttonName = computed(() => {
  return props.isEdit ? "Editar cartão" : "Adicionar cartão";
});

const buttonIcon = computed(() => {
  return props.isEdit ? "mdi-pencil" : "mdi-plus";
});

const getAccounts = async () => {
  getAccountsLoading.value = true;
  try {
    const response = await service.getAccounts();
    accounts.value = response;
  } catch (error) {
    console.error("Erro ao buscar contas:", error);
  } finally {
    getAccountsLoading.value = false;
  }
};

const validateForm = async () => {
  const { valid } = await form.value.validate();

  if (valid) createOrEditCreditCard();
};

const createOrEditCreditCard = async () => {
  isLoading.value = true;

  const request = buildRequest();

  try {
    if (props.creditCardToEdit) {
      await service.updateCreditCard(creditCardData.value.id, request);
    } else await service.createCreditCard(request);
  } catch (error) {
    console.error("Erro ao criar cartão:", error);
  } finally {
    isLoading.value = false;
    dialog.value = false;
    emit("refreshCreditCards");
  }
};

const buildRequest = () => {
  return {
    name: creditCardData.value.name,
    account: creditCardData.value.accountId,
    limit: Number(creditCardData.value.limit),
    closeDate: creditCardData.value.closeDate,
    dueDate: creditCardData.value.dueDate,
  };
};

const resetCreditCardData = () => {
  creditCardData.value = {
    name: null,
    limit: null,
    closeDate: null,
    dueDate: null,
    accountId: null,
  };
  if (form.value) {
    form.value.reset();
  }
};

watch(dialog, (newValue) => {
  if (newValue && props.creditCardToEdit) {
    creditCardData.value = {
      name: props.creditCardToEdit.name,
      limit: props.creditCardToEdit.limit,
      closeDate: props.creditCardToEdit.closeDate,
      dueDate: props.creditCardToEdit.dueDate,
      accountId: props.creditCardToEdit.account,
      id: props.creditCardToEdit.id,
    };
  }

  if (!newValue) resetCreditCardData();
});

onMounted(() => {
  getAccounts();
});
</script>
