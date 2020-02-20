<template>
  <span>
    <span v-if="list[0]">
      <h1>Endereços</h1>
      <span v-for="item in list" v-bind:key="item.id">
        <v-card :class="setClassIfDesableAdress(item.active)">
          <h2 v-if='!item.active' class="ml-5 red--text">Inativo</h2>
          <v-row class="ml-2">
            <v-col cols="7">              
              <strong>Rua:</strong>
              {{item.street}},
              <strong>N.º</strong>
              {{item.number}}
            </v-col>
            <v-col cols="5">
              <strong>Criado:</strong>
              {{item.created_at}}
            </v-col>
          </v-row>
          <v-row class="ml-2">
            <v-col cols="7">
              <strong>Cidade:</strong>
              {{ item.city }}-{{item.state}} / {{item.cep}}
            </v-col>
            <v-col cols="5">
              <strong>Modificado:</strong>
              {{item.updated_at}}
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-col cols="8" class="ml-2">
              <span v-if="item.note">
                <strong>Observações</strong>
                <p>{{item.note}}</p>
              </span>
            </v-col>
            <v-col cols="2" class="mr-5">
              <v-btn class="update-btn" @click="edit(item.id)">Alterar</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </span>
    </span>
    <span v-if="!list[0]">
      <hr class="mb-5" />
      <h1>Nenhum Endereço Cadastrado</h1>
    </span>
    <v-row justify="end">
      <v-col cols="8"></v-col>
      <v-col cols="2">
        <v-btn class="save-btn" @click="setAdressDialog(true), adressId=''">Novo Endereço</v-btn>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>

    <hr class="mt-5" />
    <v-row justify="center">
      <v-dialog v-model="adressDialog" max-width="900px">
        <v-card class="adress-card">
          <form-adress :adressId='adressId' :peopleId="peopleId"></form-adress>
        </v-card>
      </v-dialog>
    </v-row>
  </span>
</template>

<script>
import formAdress from "@/views/Administration/Pages/People/components/Adress/formAdress";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    formAdress
  },

  data: function() {
    return {
      adressId: ''
    };
  },
  props: {
    peopleId: Number
  },
  computed: {
    ...mapState("Adress", ["list"]),
    ...mapState("Adress", ["adressDialog"])
  },
  methods: {
    ...mapActions("Adress", ["setList"]),
    ...mapActions("Adress", ["setAdressDialog"]),
    ...mapActions("Adress", ["show"]),
    
    edit(id) {
      this.show(id)
      this.adressId = id;
      this.setAdressDialog(true);
    },
    setClassIfDesableAdress(value){
      if(value == true){
        return 'mb-4 list-card'
      }else{
        return 'mb-4 list-card-off'
      }
    }
  },
  mounted() {
    this.setList(this.peopleId);
  
  }
};
</script>

<style scoped>
.list-card {
  background: rgb(165, 161, 161);
  color: rgb(41, 39, 39);
}

.list-card-off {
  background: rgb(231, 228, 228);
  color: rgb(131, 126, 126);
}

.adress-card {
  padding: 10px;
}
</style>