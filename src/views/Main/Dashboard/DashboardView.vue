<template>
  <v-container fluid max-width="1200px">
    <GeralVision />

    <div class="d-flex ga-5">
      <BankAccounts />
      <CreditCards />
    </div>

    <div class="d-flex ga-5">
      <BillsToPay />
      <BillsToGain />
    </div>

    <MostExpenses />
  </v-container>
</template>

<script setup>
import BillsToPay from "./components/BillsToPay.vue";
import CreditCards from "./components/CreditCards.vue";
import GeralVision from "./components/GeralVision.vue";
import BillsToGain from "./components/BillsToGain.vue";
import BankAccounts from "./components/BankAccounts.vue";
import MostExpenses from "./components/MostExpenses.vue";
</script>

<style lang="scss" scoped></style>
