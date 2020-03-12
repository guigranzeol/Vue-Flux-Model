<template>
  <span>
    <span v-if="list[0]">
      <h1>Telefones</h1>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Tipo</th>
              <th class="text-left">Numero</th>
              <th class="text-left">Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="item.id" :class='checkCanceled(item.active)'>
              <td>{{ transformType(item.type) }}</td>
              <td>{{ numberMask(item.number) }}</td>
              <td>
                <v-btn text icon @click="edit(item.id)">
                  <i class="fas fa-edit"></i>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </span>
    <span v-else>
      <h1 class="mt-4 text-center red--text">Nenhum Telefone Cadastrado</h1>
    </span>
    <v-row justify="center">
      <spinner-dialog :dialog="phoneDialog">
        <v-card class="dialog-default">
          <form-phone :people_id="peopleId"></form-phone>
        </v-card>
      </spinner-dialog>
    </v-row>
    <v-row justify="end">
      <v-col cols="8"></v-col>
      <v-col cols="2">
        <v-btn class="save-btn mt-4" @click="setPhoneDialog(true)">Cadastrar Telefone</v-btn>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </span>
</template>

<script>
import spinnerDialog from "@/Layouts/Components/spinnerDialog";
import formPhone from "@/views/Administration/Pages/People/components/Phones/formPhone";
import { mapActions, mapState } from "vuex";
import { transformTypeInName } from "@/utils/phoneFunctions";
import { modifyNumberForMaskPhone } from "@/utils/masksFunctions";

export default {
  props: {
    peopleId: Number
  },
  components: {
    formPhone,
    spinnerDialog
  },
  computed: {
    ...mapState("Phone", ["phoneDialog"]),
    ...mapState("Phone", ["list"])
  },
  methods: {
    ...mapActions("Phone", ["setPhoneDialog", "setList", "show"]),
    edit(id) {
      this.show(id);
      this.setPhoneDialog(true);
    },
    transformType(type) {
      return transformTypeInName(type);
    },
    numberMask(number) {
      return modifyNumberForMaskPhone(number);
    },
    checkCanceled(value){
      return !value ? 'canceled-item': ''
    }
  },
  mounted() {
    this.setList(this.peopleId);
  }
};
</script>

<style>
.canceled-item{
  text-decoration: line-through
}
</style>