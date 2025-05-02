<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <div class="d-flex align-center ga-4">
        <div class="d-flex ga-4 align-center mr-6">
          <v-icon @click="router.push('/main/manage-accounts/credit-cards')"
            >mdi-chevron-left</v-icon
          >
          <v-skeleton-loader type="avatar" width="40" height="40" />
        </div>
        <div>
          <v-skeleton-loader type="heading" width="200" />
          <v-skeleton-loader type="text" width="300" />
        </div>
      </div>
      <div class="d-flex ga-4">
        <v-skeleton-loader type="button" width="100" />
        <v-skeleton-loader type="button" width="100" />
      </div>
    </div>

    <div v-if="true" class="border-left mt-10">
      <v-skeleton-loader type="text" width="150" />
      <v-skeleton-loader type="heading" width="200" />
      <v-skeleton-loader type="text" width="250" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
