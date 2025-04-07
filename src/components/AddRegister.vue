<template>
  <div>
    <v-dialog v-model="dialog" width="500" id="add-register">
      <template v-slot:activator="{ props }">
        <div
          v-bind="props"
          @click="dialog = true"
          class="d-flex pa-4 ga-2 justify-center align-center flex-column"
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

        <v-form>
          <DTextField title="Descrição" />

          <div class="d-flex align-center ga-4 mt-4">
            <div class="w-50">
              <DTextField
                title="Valor"
                prepend-inner-icon="mdi-currency-usd"
                type="number"
                hide-spin-buttons
              />
            </div>

            <div class="w-50">
              <DDataPicker title="Data" />
            </div>
          </div>

          <div class="d-flex align-center ga-4 mt-4">
            <div class="w-50">
              <DCombobox title="Conta/Cartão" :items="categories" />
            </div>

            <div class="w-50">
              <DCombobox title="Categoria" :items="categories" />
            </div>
          </div>
          <v-divider class="my-4"></v-divider>

          <div class="d-flex flex-column ga-2 mt-4">
            <p>Repetir</p>
            <DCheckbox title="Despesa fixa" />
            <DCheckbox title="Lançamento parcelado" />
          </div>

          <DCombobox placeholder="Mensal" class="mt-6" />

          <div class="d-flex align-center ga-4 mt-4">
            <div class="w-50">
              <DTextField placeholder="2" />
            </div>
            <div class="w-50">
              <DTextField placeholder="meses" />
            </div>
          </div>

          <div class="d-flex align-center justify-center ga-10 mt-6">
            <div class="d-flex flex-column align-center justify-center ga-2">
              <div class="d-flex align-center justify-center avatar">
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
import DTextField from "@/components/DTextField.vue";
import DDataPicker from "@/components/DDataPicker.vue";
import DCombobox from "@/components/DCombobox.vue";
import DBtn from "@/components/DBtn.vue";
import DCheckbox from "@/components/DCheckbox.vue";
import { ref } from "vue";
const dialog = ref(false);
const date = ref(new Date());
const props = defineProps({
  expense: {
    type: Boolean,
    default: false,
  },
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
</style>
