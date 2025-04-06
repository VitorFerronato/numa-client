<template>
  <v-card class="pa-5">
    <h4 class="text-h4 text-center mb-5">Sign in</h4>

    <v-form :disabled="isLoading" @submit.prevent="validateForm" ref="formRef">
      <div class="mb-6">
        <DTextfield v-model="email" title="Email" />
      </div>

      <div>
        <DTextfield v-model="password" title="Password" />
      </div>

      <DBtn
        :loading="isLoading"
        title="Sign in"
        type="submit"
        block
        class="my-6"
      />

      <router-link to="/login/sign-up">
        <DBtn
          :disabled="isLoading"
          title="Create an account"
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
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const formRef = ref(null);
const password = ref("");
const isLoading = ref(false);

const validateForm = async () => {
  isLoading.value = true;
  const isValid = await formRef.value.validate();
  console.log(isValid);
  if (isValid) signIn();
};

const signIn = () => {
  console.log("Sign in");
  setTimeout(() => {
    isLoading.value = false;
    router.push("/main/dashboard");
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
