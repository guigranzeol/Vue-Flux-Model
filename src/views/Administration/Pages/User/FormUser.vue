<template>
  <span>
    <admin-blade iconBtnTop="mdi-account-circle" routeBtnTop="/users">
      <span class="default-form-bg">
        <v-form class="mt-5 default-form" ref="form" v-model="valid">
          <h1 class="title-topo">Formulario Usuario</h1>
          <strong class="red--text">{{ errors.people_id }}</strong>
          <v-select
            v-model="formData.people_id"
            :items="list"
            item-text="fantasy_name"
            item-value="id"
            label="Cliente"
            color="amber darken-4"
          ></v-select>
          <v-text-field
            color="amber darken-4"
            v-model="formData.name"
            :rules="rulesFunction('nome')"
            label="Nome *"
            required
          ></v-text-field>
          <strong class="red--text">{{ errors.name }}</strong>
          <v-text-field
            color="amber darken-4"
            v-model="formData.email"
            :rules="emailRules"
            label="E-mail *"
            required
          ></v-text-field>
          <strong class="red--text">{{ errors.email }}</strong>
          <v-text-field
            color="amber darken-4"
            v-model="formData.password"
            :rules="rulesFunction('Senha', 6)"
            label="Senha *"
            type="password"
            required
          ></v-text-field>
          <strong class="red--text">{{ errors.password }}</strong>
          <v-text-field
            color="amber darken-4"
            v-model="formData.password_confirmation"
            :rules="rulesFunction('Senha', 6)"
            label="Confirmar Senha *"
            type="password"
            required
          ></v-text-field>
          <v-row>
            <v-col sm="2" cols="12">
              <v-select
                v-model="formData.user_type"
                :items="userType"
                item-text="name"
                item-value="value"
                label="Permissão"
                color="amber darken-4"
              ></v-select>
            </v-col>
            <v-col sm="2" cols="12">
              <v-switch color="amber darken-4" v-model="formData.admin" label="Admin"></v-switch>
            </v-col>
            <v-col sm="2" cols="12">
              <v-switch color="amber darken-4" v-if="formData.idse " v-model="formData.active" label="active"></v-switch>
            </v-col>
          </v-row>
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
            @click="update(formData)"
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
    </admin-blade>
  </span>
</template>

<script>
import { rulesValidationFunction } from "@/utils/rulesFunctions";
import AdminBlade from "@/Layouts/Blade";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AdminBlade
  },
  data: function() {
    return {
      valid:false,
      emailRules: [
        v => !!v || "Por favor insira um e-mail",
        v => /.+@.+\..+/.test(v) || "E-mail deve ser valido"
      ]
    };
  },
  computed: {
    ...mapState("User", ["userType", "errors", "formData"]),
    ...mapState("People", ["list"]),
  },
  methods: {
    ...mapActions("User", ["save", "cleanItem", "cleanErrors", 'show', 'update']),
    ...mapActions("People", ["setList"]),
    rulesFunction(name, lengthNeed) {
      return rulesValidationFunction(name, lengthNeed);
    }
  },
  mounted() {
    if(this.$route.params.id){
      this.show(this.$route.params.id);
    }
    this.setList()
  },
  destroyed() {
    this.cleanItem();
    this.cleanErrors();
  }
};
</script>

<style>
</style>