<template>
  <span>
    <admin-blade iconBtnTop="mdi-plus" routeBtnTop="/form-people">
      <h1 class="title-topo">Lista de Clientes</h1>
        
      <v-text-field class="default-search" v-model="search" label="Busca" single-line hide-details></v-text-field>

   
      <span>
        <v-data-table
          class="default-table"
          :headers="headers"
          :items="list"
          :search="search"
          :footer-props="footer"
        >
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item.id)" title="Edit">mdi-pencil</v-icon>
          </template>
        </v-data-table>
      </span>
    </admin-blade>
  </span>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AdminBlade from "@/Layouts/Blade";
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
        { text: "CLIENTE", value: "fantasy_name", class: "black--text" },
        { text: "E-MAIL", value: "email", class: "black--text" },
        {
          text: "AÇÕES",
          value: "action",
          sortable: false,
          class: "black--text"
        }
      ],
      footer: {
        itemsPerPageText: "Itens por página",
        itemsPerPageAllText: "Todos"
      },
    };
  },

  computed: {
    ...mapState("People", ["list"])
  },

  methods: {
    ...mapActions("People", ["setList"]),
    editItem(item) {
      this.$router.push(`form-people/${item}`);
    }
  },

  mounted() {
    this.setList();
    toastAlert("success");
  }
};
</script>