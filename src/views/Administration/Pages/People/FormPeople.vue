<template>
  <span>
    <admin-blade iconBtnTop="mdi-store" routeBtnTop="/people">
      <span class="default-form-bg">
        <v-form class="mt-5 default-form" ref="form" v-model="valid">
          <h1 class="title-topo">Dados Cliente</h1>
          <v-row>
            <v-col sm="2" cols="12">
              <v-switch
                @change="companyRules(formData.company)"
                color="amber darken-4"
                v-model="formData.company"
                label="Empresa"
              ></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="6" cols="12">
              <v-text-field
                v-model="formData.fantasy_name"
                :rules="rulesFunction('Nome', 2)"
                label="Nome *"
              ></v-text-field>
              <strong class="red--text">{{errors.fantasy_name}}</strong>
            </v-col>
            <v-col sm="6" cols="12">
              <v-text-field
                v-if="formData.company"
                v-model="formData.social_name"
                :rules="rulesFunction('Rezao Social', 2)"
                label="Razao Social *"
              ></v-text-field>
              <strong class="red--text">{{errors.social_name}}</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="2" cols="12">
              <v-text-field v-model="formData.birhtday" label="Data de Nascimento *" type="date"></v-text-field>
            </v-col>
            <v-col sm="2" cols="12">
              <v-text-field
                v-mask="['###.###.###-##', '##.###.###/####-##']"
                v-model="formData.cpf_cnpj"
                :rules="rulesFunction(cpfCnpjLabel, CpfSize)"
                :label="cpfCnpjLabel"
                required
              ></v-text-field>
              <strong class="red--text">{{errors.cpf_cnpj}}</strong>
            </v-col>
            <v-col sm="2" cols="12">
              <v-text-field
                v-mask="['##.###.###-#', '########-##']"
                v-model="formData.ie_rg"
                :label="ieRg"
              ></v-text-field>
              <strong class="red--text">{{errors.ie_rg}}</strong>
            </v-col>
            <v-col sm="5" cols="12">
              <v-text-field
                color="amber darken-4"
                v-model="formData.email"
                :rules="emailRules"
                label="E-mail"
              ></v-text-field>
              <strong class="red--text">{{errors.email}}</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="12" cols="12">
              <v-row>
                <v-col>
                  <v-textarea v-model="formData.note" label="Observações"></v-textarea>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="3" cols="12">
              <p v-if="formData.updated_at">
                <strong>Ultima Modificação:</strong>
                {{ toConvertData(formData.updated_at) }}
              </p>
            </v-col>
            <v-col sm="3" cols="12">
              <p v-if="formData.created_at">
                <strong>Data Cadastro:</strong>
                {{ toConvertData(formData.created_at) }}
              </p>
            </v-col>
          </v-row>
          <span></span>
          <v-btn
            v-if="id"
            color="green darken-2 white--text"
            class="mr-4"
            @click="SaveUpdateWithMask('update')"
          >Salvar Alterações</v-btn>
          <v-btn
            v-else
            :disabled="!valid"
            color="green darken-2 white--text"
            class="mr-4"
            @click="SaveUpdateWithMask('save')"
          >Salvar Usuario</v-btn>
          <hr class="mt-5" />
          <list-phone v-if="formData.id" :peopleId="formData.id"></list-phone>
          <hr v-if="formData.id" class="mt-5" />
          <span v-if="formData.id">
            <list-adress :peopleId="formData.id"></list-adress>
          </span>
        </v-form>
      </span>
    </admin-blade>
  </span>
</template>

<script>
import { mapActions, mapState } from "vuex";
import listAdress from "@/views/Administration/Pages/People/components/Adress/listAdress";
import listPhone from "@/views/Administration/Pages/People/components/Phones/listPhone";
import AdminBlade from "@/views/Administration/Layouts/Blade";
import { dateFormatDMA } from "@/utils/dateFunctions";
import { rulesValidationFunction } from "@/utils/rulesFunctions";
import { mask } from "vue-the-mask";
import { removeOverCaractersForNumbers } from "@/utils/masksFunctions";
import { toUpperCaseFirstLetter } from "@/utils/textFunctions";

export default {
  directives: { mask },

  components: {
    AdminBlade,
    listAdress,
    listPhone
  },
  data: function() {
    return {
      newAdress: false,
      ieRg: "I. Estadual",
      cpfCnpjLabel: "CNPJ",
      id: this.$route.params.id,
      valid: false,
      CpfSize: 18,
      emailRules: [
        v => !!v || "Por favor insira um e-mail",
        v => /.+@.+\..+/.test(v) || "E-mail deve ser valido"
      ]
    };
  },
  computed: {
    ...mapState("People", ["errors"]),
    ...mapState("People", ["formData"])
  },
  methods: {
    ...mapActions("People", ["save"]),
    ...mapActions("People", ["update"]),
    ...mapActions("People", ["show"]),
    ...mapActions("People", ["cleanErrors"]),
    ...mapActions("People", ["cleanItem"]),
    ...mapActions("Adress", ["cleanAdressList"]),
    ...mapActions("Phone", ["cleanPhoneList"]),

    rulesFunction(name, lengthNeed) {
      return rulesValidationFunction(name, lengthNeed);
    },

    SaveUpdateWithMask(saveOrUpdate) {
      this.formData.fantasy_name = toUpperCaseFirstLetter(
        this.formData.fantasy_name
      );
      this.formData.fantasy_name = toUpperCaseFirstLetter(
        this.formData.fantasy_name
      );

      if (this.formData.ie_rg) {
        this.formData.ie_rg = removeOverCaractersForNumbers(
          this.formData.ie_rg
        );
      }
      if (this.formData.cpf_cnpj) {
        this.formData.cpf_cnpj = removeOverCaractersForNumbers(
          this.formData.cpf_cnpj
        );
      }
      if (saveOrUpdate == "save") {
        this.save(this.formData);
      } else {
        this.update(this.formData);
      }
    },
    companyRules(value) {
      if (value) {
        this.ieRg = "I. Estadual";
        this.cpfCnpjLabel = "CNPJ";
        this.CpfSize = 18;
      } else {
        this.formData.social_name = "";
        this.cpfCnpjLabel = "CPF";
        this.ieRg = "RG";
        this.CpfSize = 14;
      }
    },
    toConvertData(data) {
      return dateFormatDMA(data);
    }
  },
  mounted() {
    if (this.id) {
      this.show(this.id);
      this.CpfSize = 11;
    }
  },
  destroyed() {
    this.cleanErrors();
    this.cleanItem();
    this.cleanAdressList();
    this.cleanPhoneList()
  }
};
</script>