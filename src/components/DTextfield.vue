<template>
  <div>
    <label class="text-body text-text">
      <slot name="title">{{ title }}</slot>
    </label>

    <v-text-field
      v-bind="$attrs"
      @input="$emit('input', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      variant="outlined"
      density="comfortable"
      hide-details="auto"
      color="primary"
      class="mt-1"
    >
    </v-text-field>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});

defineEmits(["input", "blur", "focus"]);
</script>
