<template>
  <span>
    <span class="main">
      <h2>Formulario Endereço</h2>
      <v-row>
        <v-col sm="2" cols="12">
          <v-text-field
            v-model="formData.cep"
            v-mask="'#####-###'"
            :rules="rulesFunction('Cep', 8)"
            @keyup="searchCep()"
            label="CEP *"
          ></v-text-field>
          <strong class="orange--text">{{ errors.cep }}</strong>
        </v-col>
        <v-col sm="5" cols="12">
          <v-text-field
            v-model="formData.city"
            :rules="rulesFunction('Cidade', 2)"
            label="Cidade *"
          ></v-text-field>
          <strong class="orange--text">{{ errors.cidade }}</strong>
        </v-col>
        <v-col sm="2" cols="12">
          <v-autocomplete
            v-model="formData.state"
            :items="BrazilStates"
            :rules="rulesFunction('Estado')"
            item-text="name"
            item-value="value"
            label="Estado"
            color="amber darken-4"
          ></v-autocomplete>
          <strong class="orange--text">{{ errors.state }}</strong>
        </v-col>
        <v-col sm="3" cols="12">
          <v-text-field
            v-model="formData.neighborhood"
            :rules="rulesFunction('Bairro', 2)"
            label="Bairro *"
          ></v-text-field>
          <strong class="orange--text">{{ errors.neighborhood }}</strong>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="9" cols="12">
          <v-text-field v-model="formData.street" :rules="rulesFunction('Rua')" label="Endereço *"></v-text-field>
          <strong class="orange--text">{{ errors.street }}</strong>
        </v-col>
        <v-col sm="3" cols="12">
          <v-text-field
            v-model="formData.number"
            :rules="rulesFunction('Numero')"
            label="Numero *"
            type="number"
            required
          ></v-text-field>
          <strong class="orange--text">{{ errors.number }}</strong>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea v-model="formData.note" label="Observações"></v-textarea>
        </v-col>
      </v-row>
      <v-row v-if="formData.id">
        <v-col cols="12">
          <v-switch color="amber darken-4" v-model="formData.active" label="Ativo"></v-switch>
        </v-col>
      </v-row>
      <v-btn v-if="formData.id" class="mr-3 save-btn" @click="update(formData)">Salvar Alteraço</v-btn>
      <v-btn v-else class="mr-3 save-btn" @click="saveAdress()">Salvar</v-btn>
      <v-btn class="mr-3 cancel-btn" @click="setAdressDialog(false), cleanAdressItem()">Fechar</v-btn>
    </span>
  </span>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { mask } from "vue-the-mask";
import { rulesValidationFunction } from "@/utils/rulesFunctions";

export default {
  directives: { mask },
  props: {
    peopleId: Number
  },

  data: function() {
    return {};
  },
  computed: {
    ...mapState("Adress", ["formData"]),
    ...mapState("Adress", ["BrazilStates"]),
    ...mapState("Adress", ["errors"])
  },
  methods: {
    ...mapActions("Adress", ["setAdressIfCep"]),
    ...mapActions("Adress", ["cleanAdressItem"]),
    ...mapActions("Adress", ["setAdressDialog"]),
    ...mapActions("Adress", ["save"]),
    ...mapActions("Adress", ["update"]),

    rulesFunction(name, lengthNeed) {
      return rulesValidationFunction(name, lengthNeed);
    },
    saveAdress() {
      let data = {
        people_id: this.peopleId,
        ...this.formData
      };
      this.save(data);
    },

    searchCep() {
      if (this.formData.cep.length == 9) {
        let data = {};

        this.$viaCep.buscarCep(this.formData.cep).then(obj => {
          (data.city = obj.localidade),
            (data.state = obj.uf),
            (data.street = obj.logradouro),
            (data.neighborhood = obj.bairro),
            (data.note = this.formData.note),
            (data.number = this.formData.number),
            (data.cep = this.formData.cep),
            this.setAdressIfCep(data);
        });
      }
    }
  }
};
</script>

<style scoped>
</style>