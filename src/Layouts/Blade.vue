<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="blue-grey darken-3"
      class="white--text"
    >      
      <v-list dense>
        <router-link class="navbar-icons" to="/users">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="icons-list">mdi-account-circle</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="titles-list">Usuarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link class="navbar-icons" to="/people">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="icons-list">mdi-store</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="titles-list">Clientes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="grey darken-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="titles-list" />
      <v-toolbar-title class="titles-list">
        <img class="avatar-init" src="img/logo.png" />        
      </v-toolbar-title>
        <p class="avatar-title">Guilherme Granzeol</p>
    </v-app-bar>
      <avatar-options v-if='false'></avatar-options>
      <div class="top-nav-btn">
      <v-btn >Logout</v-btn>
      </div>
    <v-content>
      <v-container>
        <span class="buttons-topo">
          <v-btn
            v-if="iconBtnTop"
            :to="routeBtnTop"
            fab
            small
            dark
            absolute
            bottom
            right
            fixed
            class="actions-btn"
          >
            <v-icon class="actions-btn-icon">{{iconBtnTop}}</v-icon>
          </v-btn>
        </span>
        <spinner v-show="spinnerFullScreen" />
        <slot></slot>
      </v-container>
    </v-content>

    <v-footer app>
      <span>Gransys &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Spinner from "@//Layouts/Components/spinner";
import { mapState } from "vuex";
export default {
  props: {
    iconBtnTop: String,
    routeBtnTop: String
  },
  components: {
    Spinner
  },
  computed: {
    ...mapState("Spinner", ["spinnerFullScreen"])
  },
  data: () => ({
    drawer: null
  })
};
</script>
<style scoped>

.icons-list {
  color: white;
  font-size: 30px;
}

.titles-list {
  font-size: 20px !important;
  color: rgb(226, 225, 225);
}

.buttons-topo{    
    top: 0%;
    right: 2vw;
    z-index: 100;
}

.avatar-title{
  color: aqua;
  margin-top: 10px;
  margin-left: 20px;
}

.avatar-init {
  margin-top: 5px;
  max-height: 40px;
}

.actions-btn{
    margin-bottom: 3%;
    margin-right: 2%;
    z-index: 100 !important;
    background-color: rgb(14, 187, 14) !important;
    color: rgb(6, 28, 150) !important;
    height: 55px !important;
    width: 55px !important;
}

.top-nav-btn{
  display: flex;
  color: white;
  z-index: 100;
}

.top-nav-btn button{
  display: flex;
  align-items: flex-end;
  color: black;
  z-index: 100;
}

</style>