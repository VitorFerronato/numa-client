<template>
  <v-card class="pa-8 mt-5 w-50">
    <p class="font-weight-bold text-h6 mb-8">Contas a receber</p>

    <div>
      <div class="bills late text-center mb-6">
        Contas atrasadas para receber
      </div>

      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="avatar"></div>
          <div class="ml-4 text-body-1">
            <p>Academia</p>
            <p class="text-text-secondary">05/04/2025</p>
          </div>
        </div>

        <div>
          <p>R$ 100,00</p>
        </div>
      </div>

      <v-divider class="my-4"></v-divider>

      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="avatar"></div>
          <div class="ml-4 text-body-1">
            <p>Jiu-jitsu</p>
            <p class="text-text-secondary">05/04/2025</p>
          </div>
        </div>

        <div>
          <p>R$ 100,00</p>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="bills late text-center mb-6">Receber hoje</div>

      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="avatar"></div>
          <div class="ml-4 text-body-1">
            <p>Água</p>
            <p class="text-text-secondary">05/04/2025</p>
          </div>
        </div>

        <div>
          <p>R$ 100,00</p>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="bills next text-center mb-8">Próximas</div>

      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="avatar"></div>
          <div class="ml-4 text-body-1">
            <p>Água</p>
            <p class="text-text-secondary">05/04/2025</p>
          </div>
        </div>

        <div>
          <p>R$ 100,00</p>
        </div>
      </div>

      <v-divider class="my-4"></v-divider>

      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="avatar"></div>
          <div class="ml-4 text-body-1">
            <p>Água</p>
            <p class="text-text-secondary">05/04/2025</p>
          </div>
        </div>

        <div>
          <p>R$ 100,00</p>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.bills {
  padding: 10px;
  border-radius: 10px;
}

.late {
  background-color: $feedback-color-success-light;
  color: $feedback-color-success-dark;
}

.next {
  background-color: #e0e0e0;
  color: #666666;
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
</style>
