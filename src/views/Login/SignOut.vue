<template>
  <div class="d-flex flex-column align-center ga-4">
    <v-progress-circular
      color="primary"
      size="60"
      indeterminate
    ></v-progress-circular>
    <p>Saindo...</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/login/sign-in");
  }, 3000);
});
</script>
