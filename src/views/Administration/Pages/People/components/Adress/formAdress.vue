<template>
  <span class="main">
    <h2>Formulario Endereço</h2>
    <v-row>
      <v-col sm="2" cols="12">
        <v-text-field
          color="amber darken-4"
          v-model="formData.cep"
          v-mask="'#####-###'"
          :rules="cepRules"
          @keyup="searchCep()"
          label="CEP *"
          required
        ></v-text-field>
        <!-- <strong class="orange--text">{{ errors.cep }}</strong> -->
      </v-col>
      <v-col sm="5" cols="12">
        <v-text-field
          color="amber darken-4"
          v-model="formData.city"
          :rules="cityRules"
          label="Cidade *"
          required
        ></v-text-field>
        <!-- <strong class="orange--text">{{ errors.cidade }}</strong> -->
      </v-col>
      <v-col sm="2" cols="12">
        <v-autocomplete
          v-model="formData.state"
          :items="BrazilStates"
          :rules="stateRules"
          item-text="name"
          item-value="value"
          label="Estado"
          color="amber darken-4"
        ></v-autocomplete>
        <!-- <strong class="orange--text">{{ errors.state }}</strong> -->
      </v-col>
      <v-col sm="3" cols="12">
        <v-text-field
          color="amber darken-4"
          v-model="formData.neighborhood"
          :rules="neighborhoodRules"
          label="Bairro *"
          required
        ></v-text-field>
        <!-- <strong class="orange--text">{{ errors.neighborhood }}</strong> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="9" cols="12">
        <v-text-field
          color="amber darken-4"
          v-model="formData.street"
          :rules="streetRules"
          label="Endereço *"
          required
        ></v-text-field>
        <!-- <strong class="orange--text">{{ errors.street }}</strong> -->
      </v-col>
      <v-col sm="3" cols="12">
        <v-text-field
          color="amber darken-4"
          v-model="formData.number"
          :rules="numberRules"
          label="Numero *"
          type="number"
          required
        ></v-text-field>
        <!-- <strong class="orange--text">{{ errors.number }}</strong> -->
      </v-col>
    </v-row>
    <v-btn class="mr-3 save-btn">Salvar</v-btn>
    <v-btn class="mr-3 cancel-btn" @click="setAdressDialog(false)"  >Fechar</v-btn>
  </span>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { mask } from "vue-the-mask";

export default {
  directives: { mask },

  data: function() {
    return {
      stateRules: [
        v => !!v || "Por favor insira um Estado",
      ],
      cepRules: [
        v => !!v || "Por favor insira um CEP",
        v => (v && v.length == 9) || "Por favor insira um CEP válido"
      ],
      numberRules: [
        v => !!v || "Por favor insira um Numero",
      ],
      neighborhoodRules: [
        v => !!v || "Por favor insira um Bairro",
      ],
      streetRules: [
        v => !!v || "Por favor insira uma Rua",
      ],
      cityRules: [v => !!v || "Por favor insira um Cidade"]
    };
  },
  computed: {
    ...mapState("Adress", ["formData"]),
    ...mapState("Adress", ["BrazilStates"]),
    ...mapState("Adress", ["errors"])
  },
  methods: {
    ...mapActions("People", ["setAdressDialog"]),
    searchCep() {
      if (this.formData.cep.length == 9) {
        this.$viaCep.buscarCep(this.formData.cep).then(obj => {
          (this.formData.city = obj.localidade),
            (this.formData.state = obj.uf),
            (this.formData.street = obj.logradouro),
            (this.formData.neighborhood = obj.bairro);
        });
      }
    }
  }
};
</script>

<style scoped>

</style>