<template>
  <label class="prd-checkbox">
    <input
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
      type="checkbox"
      class="prd-checkbox__input"
    />
    <span class="prd-checkbox__checkmark"></span>
    <span class="prd-checkbox__label">
      {{ title }}
    </span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.prd-checkbox {
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  user-select: none;
}

.prd-checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.prd-checkbox__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid $color-primary;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.prd-checkbox:hover .prd-checkbox__checkmark {
  border-color: #666;
}

.prd-checkbox__input:checked ~ .prd-checkbox__checkmark {
  background-color: $color-primary;
  border-color: $color-primary;
}

.prd-checkbox__checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 4px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.prd-checkbox__input:checked ~ .prd-checkbox__checkmark:after {
  display: block;
}

.prd-checkbox__input:disabled ~ .prd-checkbox__checkmark {
  background-color: #f5f5f5;
  border-color: #ddd;
  cursor: not-allowed;
}

.prd-checkbox__input:disabled:checked ~ .prd-checkbox__checkmark {
  background-color: #ccc;
}

.prd-checkbox__label {
  margin-left: 8px;
  font-size: 14px;
  color: #333;
}

.prd-checkbox__input:disabled
  + .prd-checkbox__checkmark
  + .prd-checkbox__label {
  color: #999;
  cursor: not-allowed;
}
</style>
