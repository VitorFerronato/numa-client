<template>
  <div class="d-flex flex-column align-center justify-center py-8">
    <v-icon size="40" color="text-text-secondary" class="mb-4">{{
      icon
    }}</v-icon>
    <p class="text-text-secondary text-center">
      {{ title }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
