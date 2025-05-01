<template>
  <div>
    <label class="text-body text-text-secondary">
      <slot name="title">{{ title }}</slot>
    </label>
    <v-date-input
      :model-value="modelValue"
      @update:model-value="handleDateUpdate"
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
defineProps({
  title: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [Date, String],
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleDateUpdate = (date) => {
  if (date) {
    // Format date to YYYY-MM-DD
    const formattedDate = new Date(date).toISOString().split("T")[0];
    emit("update:modelValue", formattedDate);
  } else {
    emit("update:modelValue", null);
  }
};
</script>

<style lang="scss" scoped></style>
