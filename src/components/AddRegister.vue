<template>
  <div>
    <v-dialog v-model="dialog" width="500" id="add-register">
      <template v-slot:activator="{ props }">
        <div
          v-bind="props"
          @click="dialog = true"
          class="d-flex pa-4 ga-2 justify-center align-center flex-column button-destaq"
        >
          <v-icon size="35" :color="expense ? 'error' : 'success'">{{
            expense ? "mdi-minus-circle-outline" : "mdi-plus-circle-outline"
          }}</v-icon>

          <p class="text-text-secondary">
            {{ expense ? "Despesa" : "Receita" }}
          </p>
        </div>
      </template>

      <v-card class="pa-8">
        <div class="d-flex justify-space-between align-center mb-6">
          <h4>{{ expense ? "Nova despesa" : "Nova receita" }}</h4>
          <v-icon size="25" color="text-secondary" @click="dialog = false"
            >mdi-close</v-icon
          >
        </div>

        <v-form @submit.prevent="validateForm">
          <DTextField v-model="newEntry.name" title="Descrição" />

          <div class="d-flex align-center ga-4 mt-4">
            <div class="w-50">
              <DTextField
                v-model="newEntry.value"
                title="Valor"
                prepend-inner-icon="mdi-currency-usd"
                type="number"
                hide-spin-buttons
              />
            </div>

            <div class="w-50">
              <DDataPicker v-model="newEntry.date" title="Data" />
            </div>
          </div>

          <div class="d-flex align-center ga-4 mt-4">
            <div class="w-50">
              <DCombobox
                v-model="newEntry.destinyAccount"
                :items="accounts"
                title="Conta/Cartão"
                item-title="name"
                item-value="id"
              />
            </div>

            <div class="w-50">
              <DCombobox
                v-model="newEntry.category"
                :items="categories"
                title="Categoria"
              />
            </div>
          </div>
          <v-divider class="my-4"></v-divider>

          <div v-if="repeatEntry" class="d-flex flex-column ga-2 mt-4">
            <p>Repetir</p>
            <DCheckbox
              :model-value="isFixedExpense"
              @update:model-value="handleCheckboxChange('fixed')"
              title="Despesa fixa"
            />
            <DCheckbox
              title="Lançamento parcelado"
              :model-value="isInstallment"
              @update:model-value="handleCheckboxChange('installment')"
            />
          </div>

          <div v-if="isFixedExpense" class="d-flex align-center ga-4 mt-4">
            <div class="w-100">
              <DTextField
                v-model="newEntry.fixedEntry"
                title="Repetir"
                placeholder="Mensal"
              />
            </div>
          </div>

          <div v-if="isInstallment">
            <div class="d-flex align-center ga-4 mt-4">
              <div class="w-50">
                <DTextField v-model="newEntry.qtdInstallment" placeholder="2" />
              </div>
              <div class="w-50">
                <DTextField
                  v-model="newEntry.installmentRepeat"
                  placeholder="meses"
                />
              </div>
            </div>

            <p class="text-body mt-4">
              Serão lançadas 2 parcelas de
              <span class="text-text-secondary">R$ 0,00</span>
            </p>
          </div>

          <div class="d-flex align-center justify-center ga-10 mt-6">
            <div
              @click="toggleRepeatEntry"
              class="d-flex flex-column align-center justify-center cursor-pointer ga-2"
            >
              <div
                :class="[
                  'd-flex align-center justify-center avatar',
                  repeatEntry ? 'box-marked' : '',
                ]"
              >
                <v-icon color="text-secondary">mdi-repeat</v-icon>
              </div>
              <p>Repetir</p>
            </div>

            <div class="d-flex flex-column align-center justify-center ga-2">
              <div class="d-flex align-center justify-center avatar">
                <v-icon color="text-secondary">mdi-note-text</v-icon>
              </div>
              <p>Observação</p>
            </div>
          </div>

          <DBtn title="Salvar" type="submit" block class="mt-6" />
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import DBtn from "@/components/DBtn.vue";
import DCheckbox from "@/components/DCheckbox.vue";
import DCombobox from "@/components/DCombobox.vue";
import DTextField from "@/components/DTextField.vue";
import DDataPicker from "@/components/DDataPicker.vue";

import { ref, onMounted } from "vue";
import { service } from "@/api";

const props = defineProps({
  expense: {
    type: Boolean,
    default: false,
  },
});

const dialog = ref(false);
const accounts = ref([]);
const categories = ref([]);
const repeatEntry = ref(false);
const isInstallment = ref(false);
const isFixedExpense = ref(false);
const newEntry = ref({
  date: new Date(),
  name: "",
  value: 0,
  category: null,
  fixedEntry: null,
  qtdInstallment: null,
  destinyAccount: null,
  installmentRepeat: null,
});

const toggleRepeatEntry = () => {
  repeatEntry.value = !repeatEntry.value;

  if (!repeatEntry.value) {
    isFixedExpense.value = false;
    isInstallment.value = false;
  }
};

const handleCheckboxChange = (type) => {
  if (type === "fixed") {
    isFixedExpense.value = !isFixedExpense.value;
    if (isFixedExpense.value) isInstallment.value = false;
  } else {
    isInstallment.value = !isInstallment.value;
    if (isInstallment.value) isFixedExpense.value = false;
  }
};

const validateForm = () => {
  console.log(newEntry.value);
};

const getAccounts = async () => {
  try {
    const response = await service.getAccounts();
    accounts.value = response;
  } catch (error) {
    console.error("Erro ao buscar contas:", error);
  }
};

const getCategories = async () => {
  try {
    const response = await service.getCategories();
    categories.value = response;
  } catch (error) {
    console.error("Erro ao buscar contas:", error);
  }
};

onMounted(() => {
  getAccounts();
  getCategories();
});
</script>

<style lang="scss" scoped>
#add-register {
  ::-webkit-scrollbar {
    width: 0 !important;
    margin-right: 80px;
  }

  .avatar {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    border: 1px solid #666666;
  }
}

.button-destaq {
  cursor: pointer;
  width: 100px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: 0.5s;

  &:hover {
    background-color: #f5f5f5;
  }
}
.box-marked {
  background-color: #f5f5f5;
}
</style>
