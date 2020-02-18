<template>
  <span>
    <span v-if="list[0]">
      <h1>Endereços</h1>
      <span v-for="item in list" v-bind:key="item.id">
        <v-card class="mb-4 list-card">
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
              <v-btn class="update-btn" @click="show(item.id)">Alterar</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </span>
    </span>
    <span v-if="!list[0]">
        <hr class="mb-5">
        <h1>Nenhum Endereço Cadastrado</h1>
    </span>
    <v-row justify="end">
        <v-col cols='8'></v-col>
        <v-col cols='2'>
            <v-btn class="save-btn" @click="setAdressDialog(true)">Novo Endereço</v-btn>
        </v-col>
        <v-col cols="1"></v-col>
    </v-row>
    
    <hr class="mt-5">
  </span>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    peopleId: Number
  },
  computed: {
    ...mapState("Adress", ["list"])
  },
  methods: {
    ...mapActions("Adress", ["setList"]),
    ...mapActions("Adress", ["setAdressDialog"]),
    ...mapActions("Adress", ["setAdressDialog"]),
  },
  mounted() {
    this.setList(this.peopleId);
  }
};
</script>

<style scoped>
.list-card {
  background: rgb(221, 218, 218);
  color: rgb(41, 39, 39);
}
</style>