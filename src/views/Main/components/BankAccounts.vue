<template>
  <v-card class="pa-8 mt-5 w-50">
    <p class="font-weight-bold text-h6">Contas</p>
    <div class="mt-4 border-left">
      <p class="text-text-secondary">Saldo Geral</p>
      <p>
        <span>R$</span> <span class="font-weight-bold text-h6">100,00</span>
      </p>
    </div>
    <v-divider class="my-6"></v-divider>

    <p class="font-weight-bold text-subtitle-1">Minhas contas</p>

    <div class="d-flex flex-column justify-space-between ga-4 mt-4">
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center ga-4">
          <div class="avatar"></div>
          <p>Bradesco</p>
        </div>

        <p class="font-weight-medium">R$ 100,00</p>
      </div>

      <v-divider class="my-4"></v-divider>

      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center ga-4">
          <div class="avatar"></div>
          <p>Nubank</p>
        </div>

        <p class="font-weight-medium">R$ 280,00</p>
      </div>
    </div>

    <DBtn title="Gerenciar contas" variant="tonal" block class="mt-8" />
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
