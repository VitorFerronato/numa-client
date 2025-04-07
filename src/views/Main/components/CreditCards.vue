<template>
  <v-card class="pa-8 mt-5 w-50">
    <p class="font-weight-bold text-h6">Cartões</p>

    <div class="mt-4 border-left">
      <p class="text-text-secondary">Faturas de abril</p>
      <p>
        <span>R$</span>
        <span class="font-weight-bold text-h6">- 1.583,40</span>
      </p>
    </div>
    <v-divider class="my-6"></v-divider>

    <p class="font-weight-bold text-subtitle-1">Meus cartões</p>

    <div class="d-flex flex-column justify-space-between ga-4 mt-4">
      <div>
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex align-center ga-4">
            <div class="avatar"></div>
            <p>Bradesco</p>
          </div>
          <DBtn title="Ver fatura" variant="outlined" />
        </div>
        <div
          class="d-flex justify-space-between align-center px-8 py-2 mt-4 rounded-lg bg-background-light"
        >
          <div>
            <p class="text-subtitle-1">Límite disponível</p>
            <p>
              <span class="text-text-secondary">R$ </span>
              <span class="font-weight-bold">1.000,00</span>
            </p>
          </div>
          <div>
            <p class="text-subtitle-1">Fatura atual</p>
            <p>
              <span class="text-text-secondary">R$</span>
              <span class="font-weight-bold">1.000,00</span>
            </p>
          </div>
        </div>
      </div>

      <v-divider class="my-4"></v-divider>

      <div>
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex align-center ga-4">
            <div class="avatar"></div>
            <p>Nubank</p>
          </div>
          <DBtn title="Ver fatura" variant="outlined" />
        </div>
        <div
          class="d-flex justify-space-between align-center px-8 py-2 mt-4 rounded-lg bg-background-light"
        >
          <div>
            <p class="text-subtitle-1">Límite disponível</p>
            <p>
              <span class="text-text-secondary">R$ </span>
              <span class="font-weight-bold">1.000,00</span>
            </p>
          </div>
          <div>
            <p class="text-subtitle-1">Fatura atual</p>
            <p>
              <span class="text-text-secondary">R$</span>
              <span class="font-weight-bold">1.000,00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";
</script>

<style lang="scss" scoped>
.border-left {
  border-left: 4px solid $feedback-color-success-pure;
  border-radius: 4px;
  padding-left: 16px;
}

.avatar {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: 1px solid $feedback-color-success-pure;
}
</style>
