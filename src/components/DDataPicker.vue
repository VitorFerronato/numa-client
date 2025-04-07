<template>
  <div>
    <label class="text-body text-text-secondary">
      <slot name="title">{{ title }}</slot>
    </label>
    <v-date-input
      v-model="date"
      variant="outlined"
      density="comfortable"
      hide-details="auto"
      prepend-icon=""
      append-inner-icon="mdi-calendar"
      color="primary"
      class="mt-1"
    ></v-date-input>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
});

const date = ref(new Date());
</script>

<style lang="scss" scoped></style>
