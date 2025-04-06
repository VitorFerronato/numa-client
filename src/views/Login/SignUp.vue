<template>
  <v-card class="pa-5">
    <h4 class="text-h4 text-text text-center mb-5">Sign up</h4>

    <v-form :disabled="isLoading" @submit.prevent="validateForm" ref="formRef">
      <div>
        <DTextfield v-model="name" title="Name" />
      </div>

      <div class="my-6">
        <DTextfield v-model="email" title="Email" />
      </div>

      <div class="mb-6">
        <DTextfield v-model="password" title="Password" />
      </div>

      <div>
        <DTextfield v-model="confirmPassword" title="Confirm password" />
      </div>

      <DBtn title="Sign up" block :loading="isLoading" class="my-6" />

      <router-link to="/login/sign-in">
        <DBtn
          :loading="isLoading"
          title="Already have an account"
          variant="tonal"
          block
        />
      </router-link>
    </v-form>
  </v-card>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";
import DTextfield from "@/components/DTextfield.vue";

import { ref } from "vue";

const name = ref("");
const email = ref("");
const formRef = ref(null);
const password = ref("");
const isLoading = ref(false);
const confirmPassword = ref("");

const validateForm = async () => {
  isLoading.value = true;
  const isValid = await formRef.value.validate();
  if (isValid) signIn();
};

const signIn = () => {
  console.log("Sign in");
  isLoading.value = false;
};
</script>

<style lang="scss" scoped></style>
