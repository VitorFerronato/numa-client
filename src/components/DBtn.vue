<template>
  <v-btn
    v-bind="$attrs"
    :color="color"
    @click="$emit('click', $event)"
    class="text-capitalize text-white"
  >
    {{ title }}
  </v-btn>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "primary",
  },
});

defineEmits(["click"]);
</script>
