<template>
  <span>
    <v-form>
      <!-- Opcoes para Formulario -->
      <span></span>
      <!-- Opcoes para Formulario -->

      <!-- Default -->
      <v-row>
        <v-col sm="6" cols="12">
          <p v-if="formData.updated_at">
            <strong>Ultima Modificação:</strong>
            {{ formData.updated_at }}
          </p>
        </v-col>
        <v-col sm="6" cols="12">
          <p v-if="formData.created_at">
            <strong>Data Cadastro:</strong>
            {{ formData.created_at }}
          </p>
        </v-col>
      </v-row>
      <v-btn
        v-if="formData.id"
        color="green darken-2 white--text"
        class="mr-4"
        @click="saveUser()"
      >Salvar Alterações</v-btn>
      <v-btn
        v-else
        :disabled="!valid"
        color="green darken-2 white--text"
        class="mr-4"
        @click="save(formData)"
      >Salvar</v-btn>
    </v-form>
  </span>
</template>

<script>
import { rulesValidationFunction } from "@/utils/rulesFunctions";
import AdminBlade from "@/views/Administration/Layouts/Blade";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AdminBlade
  },
  data: function() {
    return {
    };
  },
  computed: {
    ...mapState("", ["userType", "errors", "formData"])
  },
  methods: {
    ...mapActions("", [
      "save",
      "cleanItem",
      "cleanErrors",
      "show",
      "update"
    ]),
    ...mapActions("", ["setList"]),
    rulesFunction(name, lengthNeed) {
      return rulesValidationFunction(name, lengthNeed);
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.show(this.$route.params.id);
    }
  },
  destroyed() {
    this.cleanItem();
    this.cleanErrors();
  }
};
</script>

<style>
</style>