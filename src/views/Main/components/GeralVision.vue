<template>
  <v-card class="pa-5 d-flex">
    <div class="w-50">
      <p class="text-text-secondary">Bom dia!</p>
      <p class="font-weight-bold text-h6">Vitor Ferronato</p>

      <div class="d-flex justify-center pl-4 mt-6 ga-8">
        <div class="text-center">
          <p class="text-text-secondary">Receita total</p>
          <p class="font-weight-bold text-success text-h5">R$ 100,00</p>
        </div>

        <v-divider vertical></v-divider>

        <div class="text-center">
          <p class="text-text-secondary">Despesa mensal</p>
          <p class="font-weight-bold text-error text-h5">R$ 100,00</p>
        </div>
      </div>
    </div>

    <v-divider vertical></v-divider>

    <div class="w-50">
      <p class="font-weight-bold text-center mt-4 text-h6">Acesso rápido</p>

      <div class="d-flex justify-center ga-8 mt-4">
        <div class="d-flex pa-4 ga-2 justify-center align-center flex-column">
          <v-icon size="35" color="error">mdi-minus-circle-outline</v-icon>
          <p class="text-text-secondary">Despesa</p>
        </div>

        <div class="d-flex pa-4 ga-2 justify-center align-center flex-column">
          <v-icon size="35" color="success">mdi-plus-circle-outline</v-icon>
          <p class="text-text-secondary">Receita</p>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup></script>

<style lang="scss" scoped></style>
