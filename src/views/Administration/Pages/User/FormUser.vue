<template>
  <span>
    <admin-blade>
      <h1 class="title-topo">Formulario Usuario</h1>
      <span class="buttons-topo">
        <v-btn
          to="/users"
          title="Novo Usuario"
          color="green"
          fab
          small
          dark
          absolute
          top
          right
          style="z-index: 100;"
        >
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </span>

      <v-form class="mt-5" ref="form" v-model="valid">
        <strong class="red--text">{{ msgServer.people_id }}</strong>
        <v-text-field
          color="amber darken-4"
          v-model="formData.name"
          :rules="nameRules"
          label="Nome *"
          required
        ></v-text-field>
        <strong class="red--text">{{ msgServer.name }}</strong>
        <v-text-field
          color="amber darken-4"
          v-model="formData.email"
          :rules="emailRules"
          label="E-mail *"
          required
        ></v-text-field>
        <strong class="red--text">{{ msgServer.email }}</strong>
        <v-text-field
          color="amber darken-4"
          v-model="formData.password"
          :rules="passwordRules"
          label="Senha *"
          type="password"
          required
        ></v-text-field>
        <strong class="red--text">{{ msgServer.password }}</strong>
        <v-text-field
          color="amber darken-4"
          v-model="formData.password_confirmation"
          :rules="passwordRules"
          label="Confirmar Senha *"
          type="password"
          required
        ></v-text-field>
        <v-row>
          <v-col sm="2" cols="12">
            <v-switch color="amber darken-4" v-model="formData.store" label="Store" required></v-switch>
          </v-col>
          <v-col sm="2" cols="12">
            <v-switch color="amber darken-4" v-model="formData.admin" label="Admin" required></v-switch>
          </v-col>
          <v-col sm="2" cols="12">
            <v-switch
              color="amber darken-4"
              v-if="id"
              v-model="formData.active"
              label="active"
              required
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="3" cols="12">
            <p v-if="formData.updated_at">
              <strong>Ultima Modificação:</strong>
              {{ formData.updated_at }}
            </p>
          </v-col>
          <v-col sm="3" cols="12">
            <p v-if="formData.created_at">
              <strong>Data Cadastro:</strong>
              {{ formData.created_at }}
            </p>
          </v-col>
        </v-row>

        <v-btn
          v-if="id"
          color="green darken-2 white--text"
          class="mr-4"
          @click="saveUser"
        >Salvar Alterações</v-btn>
        <v-btn
          v-else
          :disabled="!valid"
          color="green darken-2 white--text"
          class="mr-4"
          @click="saveUser"
        >Salvar Usuario</v-btn>

        <v-btn @click="reset" to="/users" color="red darken-4 white--text" class="mr-4">Cancelar</v-btn>
      </v-form>
    </admin-blade>
  </span>
</template>

<script>
import AdminBlade from "@/views/Administration/Layouts/Blade";
import { baseApiUrl } from "@/global";
import axios from "axios";
import { dateFormatDMA } from "@/utils/dateFunctions";

export default {
  components: {
    AdminBlade
  },
  data: function() {
    return {
      id: this.$route.params.id,
      clients: {},
      formData: {
        admin: false,
        store: false
      },
      valid: false,
      passwordRules: [
        v => !!v || "Senha Obrigatoria",
        v => (v && v.length >= 6) || "Senha deve conter no minimo 6 caracteres"
      ],
      nameRules: [
        v => !!v || "Nome Obrigatorio",
        v => (v && v.length >= 3) || "Nome deve conter mais que 3 caracteres"
      ],
      emailRules: [
        v => !!v || "E-mail Obrigatorio",
        v => /.+@.+\..+/.test(v) || "E-mail deve ser valido"
      ],
      msgServer: [],

      confirm: false
    };
  },
  methods: {
    saveUser() {
      this.msgServer = {};
      axios
        .post(`${baseApiUrl}/users/create`, this.formData)
        .then(res => {
          if (res.data == 201) {
            sessionStorage.setItem(
              "msgSave",
              `O Usuario ${this.formData.name} foi cadastrado com sucesso!`
            );
            this.$router.push({ path: "/users" });
          }
          if (res.data == 202) {
            sessionStorage.setItem(
              "msgSave",
              `O Usuario ${this.formData.name} foi atualizado com sucesso!`
            );
            this.$router.push({ path: "/users" });
          } else {
            this.msgServer = res.data;
          }
        })
        .catch(e => {
          alert(`${e}`);
          this.msgServer = e;
        });
    },

    reset() {
      this.$refs.form.reset();
      this.$router.push({ path: "adm/users" });
    },

    loadUser() {
      axios
        .post(`${baseApiUrl}/users/show`, `id = ${this.id}`)
        .then(res => {
          this.formData = res.data[0];
          this.formData.updated_at = dateFormatDMA(this.formData.updated_at);
          this.formData.created_at = dateFormatDMA(this.formData.created_at);
        })
        .catch(e => {
          alert(`${e}`);
          this.msgServer = e;
        });
    }
  },
  mounted() {
    if (this.id) {
      this.loadUser();
    }
  }
};
</script>

<style>
</style>