<template>
  <v-container fluid max-width="1200px">
    <v-card class="pa-8">
      <div class="d-flex align-center justify-space-between mb-10">
        <h4 class="text-h6">Lançamentos</h4>

        <div class="d-flex align-center ga-5">
          <v-icon>mdi-chevron-left</v-icon>
          <p>Abril 2025</p>
          <v-icon>mdi-chevron-right</v-icon>
        </div>

        <v-icon>mdi-list-box</v-icon>
      </div>

      <div>
        <div>
          <p class="text-h6 mb-4">25</p>
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center ga-5">
              <div class="avatar"></div>
              <p>Salário - final</p>
            </div>
            <div class="d-flex align-center ga-5">
              <v-icon size="20px">mdi-repeat</v-icon>
              <div class="avatar avatar-small"></div>
              <p>Bradesco</p>
            </div>
            <p>+ R$ 1.000,00</p>
          </div>
          <v-divider class="my-5"></v-divider>
        </div>
        <div>
          <p class="text-h6 mb-4">26</p>
          <div class="d-flex align-center justify-space-between mb-4">
            <div class="d-flex align-center ga-5">
              <div class="avatar"></div>
              <p>Salário - final</p>
            </div>
            <div class="d-flex align-center ga-5">
              <v-icon size="20px">mdi-repeat</v-icon>
              <div class="avatar avatar-small"></div>
              <p>Bradesco</p>
            </div>
            <p>+ R$ 1.000,00</p>
          </div>
          <div class="d-flex align-center justify-space-between mb-4">
            <div class="d-flex align-center ga-5">
              <div class="avatar"></div>
              <p>Salário - final</p>
            </div>
            <div class="d-flex align-center ga-5">
              <v-icon size="20px">mdi-repeat</v-icon>
              <div class="avatar avatar-small"></div>
              <p>Bradesco</p>
            </div>
            <p>+ R$ 1.000,00</p>
          </div>
          <div class="d-flex align-center justify-space-between mb-4">
            <div class="d-flex align-center ga-5">
              <div class="avatar"></div>
              <p>Salário - final</p>
            </div>
            <div class="d-flex align-center ga-5">
              <v-icon size="20px">mdi-repeat</v-icon>
              <div class="avatar avatar-small"></div>
              <p>Bradesco</p>
            </div>
            <p>+ R$ 1.000,00</p>
          </div>
          <v-divider class="my-5"></v-divider>
        </div>
      </div>

      <div class="d-flex justify-end">
        <TotalRecipe />
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import TotalRecipe from "./TotalRecipe.vue";
</script>

<style lang="scss" scoped>
.avatar {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: 1px solid $feedback-color-success-pure;
}

.avatar-small {
  width: 30px;
  height: 30px;
}
</style>
