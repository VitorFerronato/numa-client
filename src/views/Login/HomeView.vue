<template>
  <v-container class="fill-height">
    <v-container class="text-center">
      <h1 class="text-h2 mb-6">Numa Finance</h1>

      <div class="mb-8">
        <h2 class="text-h5 mb-4">
          Sua plataforma completa de gestão financeira
        </h2>
        <v-row justify="center" class="mt-8">
          <v-col cols="12" md="8">
            <div class="features-grid">
              <v-card class="feature-card pa-4" flat>
                <h3 class="text-h6 mb-2">Controle de Despesas e Receitas</h3>
                <p>
                  Registre e acompanhe todas suas transações financeiras em um
                  só lugar
                </p>
              </v-card>

              <v-card class="feature-card pa-4" flat>
                <h3 class="text-h6 mb-2">Análise Gráfica</h3>
                <p>
                  Visualize seus gastos e ganhos através de gráficos intuitivos
                </p>
              </v-card>

              <v-card class="feature-card pa-4" flat>
                <h3 class="text-h6 mb-2">Gestão de Cartões</h3>
                <p>
                  Organize seus cartões de crédito e débito de forma eficiente
                </p>
              </v-card>

              <v-card class="feature-card pa-4" flat>
                <h3 class="text-h6 mb-2">Controle de Contas</h3>
                <p>
                  Gerencie múltiplas contas bancárias em uma única interface
                </p>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>

      <v-row justify="center" class="mt-8">
        <v-col cols="12" sm="6" md="4">
          <v-btn block size="large" color="primary" class="mb-4">
            Entrar
          </v-btn>
          <v-btn block size="large" variant="outlined"> Criar conta </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-card {
  background-color: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
}
</style>
