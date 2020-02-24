<template>
  <span>
    <h1>Formulario Telefone</h1>
    <v-row class="pl-5">
      <v-col sm="2" cols="2">
        <v-select
          v-model="formData.type"
          label="Tipo"
          :items="listTypes"
          item-text="name"
          item-value="value"
        ></v-select>
        <strong class="orange--text">{{ errors.type }}</strong>
      </v-col>
      <v-col sm="4" cols="4">
        <v-text-field
          v-model="formData.number"
          v-mask="['(##) ####-####', '(##) #.####-####']"
          label="Numero"
          :rules="rulesFunction('Numero', 13)"
        ></v-text-field>
        <strong class="orange--text">{{ errors.number }}</strong>
      </v-col>
      <v-col sm="5" cols="5">
        <v-textarea rows="1" v-model="formData.note" label="Observação"></v-textarea>
      </v-col>
    </v-row>
    <v-row v-if="formData.id">
      <v-col cols="12">
        <v-switch color="amber darken-4" v-model="formData.active" label="Ativo"></v-switch>
      </v-col>
    </v-row>
    <v-btn v-if="formData.id" class="cancel-btn ml-4" @click="updatePhone()">Salvar Alteração</v-btn>
    <v-btn v-else class="cancel-btn ml-4" @click="savePhone()">Salvar</v-btn>
    <v-btn class="cancel-btn ml-4" @click="setPhoneDialog(false), cleanPhoneItem()">Fechar</v-btn>
  </span>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { rulesValidationFunction } from "@/utils/rulesFunctions";
import { mask } from "vue-the-mask";
import { removeOverCaractersForNumbers } from "@/utils/masksFunctions";

export default {
  data: function() {
    return {};
  },
  directives: { mask },
  props: {
    people_id: Number
  },
  computed: {
    ...mapState("Phone", ["formData"]),
    ...mapState("Phone", ["errors"]),
    ...mapState("Phone", ["listTypes"])
  },
  methods: {
    ...mapActions("Phone", [
      "setPhoneDialog",
      "save",
      "update",
      "cleanPhoneItem"
    ]),

    rulesFunction(name, lengthNeed) {
      return rulesValidationFunction(name, lengthNeed);
    },
    savePhone() {
      this.formData.number = removeOverCaractersForNumbers(
        this.formData.number
      );
      this.formData.people_id = this.people_id;
      this.save(this.formData);
    },
    updatePhone() {
      this.formData.number = removeOverCaractersForNumbers(
        this.formData.number
      );
      this.update(this.formData);
    }
  }
};
</script>

<style>
</style>