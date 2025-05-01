<template>
  <div class="d-flex justify-center">
    <v-card class="pa-6 w-50">
      <div class="d-flex justify-space-between align-center mb-6">
        <div class="d-flex align-center ga-4">
          <div class="d-flex ga-4 align-center">
            <v-icon @click="router.push('/main/manage-accounts/credit-cards')"
              >mdi-chevron-left</v-icon
            >
            <DAvatar />
          </div>
          <div>
            <p class="text-h6">{{ creditCard?.name }}</p>
            <p class="text-text-secondary text-body-2">
              Fecha dia {{ getFormattedDay(creditCard?.closeDate) }} \ Vence dia
              {{ getFormattedDay(creditCard?.dueDate) }}
            </p>
          </div>
        </div>

        <div class="d-flex ga-4">
          <DBtn
            color="primary"
            title="Editar cartão"
            append-icon="mdi-pencil"
            variant="tonal"
          />
          <DeleteAccountModal :data="creditCard" :id="creditCardId" isCredit />
        </div>
      </div>

      <div class="border-left mt-10">
        <p class="text-text-secondary">Fatura atual</p>
        <p class="text-h6">R$ 5000 (mock)</p>
        <p class="text-text-secondary text-body-2">
          Limite disponível de R$ {{ formatCurrency(creditCard?.limit) }}
        </p>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";
import DAvatar from "@/components/DAvatar.vue";
import DeleteAccountModal from "../Accounts/DeleteAccountModal.vue";

import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { formatCurrency } from "@/utils/formatCurrency";

import { service } from "@/api";

const router = useRouter();
const creditCard = ref(null);
const creditCardId = ref(null);

const getCreditCardById = async (creditCardId) => {
  try {
    const response = await service.getCreditCardById(creditCardId);
    creditCard.value = response;
  } catch (error) {
    console.error("Error getting credit card:", error);
  }
};

const getFormattedDay = (date) => {
  if (!date) return "-";

  return date.split("-")[2];
};

onMounted(() => {
  creditCardId.value = router.currentRoute.value.params.id;
  getCreditCardById(creditCardId.value);
});
</script>

<style lang="scss" scoped>
.border-left {
  border-left: 5px solid #1d8527;
  padding-left: 16px;
  border-radius: 4px;
}
</style>
