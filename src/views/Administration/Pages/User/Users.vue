<template>
  <span>
    <admin-blade>
        <h1 class="title-topo">Lista de Usuarios</h1>
        <span class='buttons-topo'>
                <v-btn
                  to='/form-user'
                  title='Novo Usuario'
                  color="green"
                  fab
                  small
                  dark
                  absolute
                  top
                  right
                  style="z-index: 100;"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
        </span>
        <v-text-field
          class="default-search"
          v-model="search"
          label="Busca"
          single-line
          hide-details
        ></v-text-field>
        <v-data-table class="default-table"
          :headers="headers"
          :items="data"
          :search="search"
          :footer-props="footer"
          >

            <template v-slot:item.nivel="{ item }">
              <v-chip :color="getColor(item.admin, item.store)" dark>{{ getname(item.admin, item.store) }}</v-chip>
            </template>
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editItem(item.id)" title="Edit">mdi-pencil</v-icon>
            </template>
            
          </v-data-table>
    </admin-blade>
  </span>
</template>

<script>
import AdminBlade from "@/views/Administration/Layouts/Blade";
import { baseApiUrl } from "@/global";
import axios from "axios";
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

Vue.use(VueToast);

export default {
  components: {
    AdminBlade
  },
  data: function() {
    return {
      search: "",
      titleTop: "",
      headers: [
        { text: "ID", value: "id", class: "black--text" },
        { text: "NOME", value: "name", class: "black--text" },
        { text: "E-MAIL", value: "email", class: "black--text" },
        { text: "NIVEL ACESSO", value: "nivel", class: "black--text" },
        { text: "CLIENTE", value: "fantasy_name", class: "black--text" },        
        {
          text: "AÇÕES",
          value: "action",
          sortable: false,
          class: "black--text"
        }
      ],
      footer: {
        itemsPerPageText: 'Itens por página',
        itemsPerPageAllText: 'Todos'
      },
      msgServer: [],
      data: []
    };
  },
  methods: {
    loadUsers() {
      this.msgServer = {};
      this.titleTop = "Lista Usuarios";
      const url = `${baseApiUrl}/users/index`;
      axios.post(url).then(res => {
        this.data = res.data;
      });
    },

    editItem(item) {
      this.$router.push(`form-user/${item}`);
    },

    getname(adm, store) {
      if (adm == true) return "Admin";
      else if (store == true) return "Loja";
      else return "Usuario";
    },
    
    getColor(adm, store) {
      if (adm == true) return "blue-grey";
      else if (store == true) return "blue";
      else return "purple";
    },
  },

  mounted() {
    this.loadUsers();

    if (sessionStorage.msgSave) {
      Vue.$toast.open({
        message: sessionStorage.msgSave,
        type: "success"
      });
      sessionStorage.removeItem("msgSave");
    }
  }
};
</script>

<style>
</style>