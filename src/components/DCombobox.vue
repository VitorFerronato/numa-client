<template>
  <div>
    <label class="label-comboBox">
      <slot name="title">{{ title }}</slot>
    </label>

    <v-combobox
      v-bind="$attrs"
      :items="items"
      variant="outlined"
      density="comfortable"
      hide-details="auto"
      color="primary"
      class="mt-1"
    >
    </v-combobox>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
