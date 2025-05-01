<template>
  <div class="skeleton-container">
    <div v-for="n in 3" :key="n" class="skeleton-item">
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center ga-4">
          <v-skeleton-loader
            type="avatar"
            width="43"
            height="43"
            class="skeleton-avatar"
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="text"
            width="150"
            height="24"
          ></v-skeleton-loader>
        </div>
        <v-skeleton-loader
          type="text"
          width="24"
          height="24"
        ></v-skeleton-loader>
      </div>
      <v-divider class="my-8"></v-divider>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-container {
  .skeleton-item {
    margin-bottom: 8px;
  }

  .skeleton-avatar {
    border-radius: 50%;
  }
}
</style>
