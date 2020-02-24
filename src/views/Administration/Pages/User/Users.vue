<template>
  <span>
    <admin-blade iconBtnTop="mdi-plus" routeBtnTop="/form-user">
        <h1 class="title-topo">Lista de Usuarios</h1>
        <v-text-field
          class="default-search"
          v-model="search"
          label="Busca"
          single-line
          hide-details
        ></v-text-field>
        <v-data-table class="default-table"
          :headers="headers"
          :items="list"
          :search="search"
          :footer-props="footer"
          >
          <template v-slot:item.nivel="{ item }">
              <span  class="mr-2" title="Edit">{{getAcessType(item.user_type)}}</span>
            </template>
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="edit(item.id)" title="Edit">mdi-pencil</v-icon>
            </template>
          </v-data-table>
    </admin-blade>
  </span>
</template>

<script>
import AdminBlade from "@/views/Administration/Layouts/Blade";
import { mapActions, mapState } from 'vuex';
import { toastAlert } from "@/utils/Alerts/toast";

export default {
  components: {
    AdminBlade
  },
  data: function() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id", class: "black--text" },
        { text: "NOME", value: "name", class: "black--text" },
        { text: "E-MAIL", value: "email", class: "black--text" }, 
        { text: "Nivel", value: "nivel", class: "black--text" },    
        { text: "Adm", value: "admin", class: "black--text" },  
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
      msgServer: []
    };
  },
  computed:{
    ...mapState('User', ["list", "userType"]),
  },
  methods: {
    ...mapActions('User', ["setList"]),

    edit(item) {
      this.$router.push(`form-user/${item}`);
    },

    getAcessType(value){
      let response = this.userType.filter( function(item){
         return item.value == value
      })      
      return response[0].name
    },
  },

  mounted() {
    this.setList()
    toastAlert("success");
  }
};
</script>

<style>
</style>