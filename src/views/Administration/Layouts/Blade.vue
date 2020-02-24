<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color='blue-grey darken-3'
      class="white--text"
    >
    
   
      <v-list dense >
        <router-link
        class="navbar-icons "
        to="/users">
        <v-list-item link >
          <v-list-item-action >
            <v-icon class="icons-list" >mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="titles-list">Usuarios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link
        class="navbar-icons "
        to="/people">
        <v-list-item link >
          <v-list-item-action >
            <v-icon class="icons-list" >mdi-store</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="titles-list">Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color='grey darken-4'
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="titles-list"/>
      <v-toolbar-title class="titles-list">Administração</v-toolbar-title>
    </v-app-bar>

    <v-content >
      <v-container>
        <span class="buttons-topo">
          <v-btn
            v-if='iconBtnTop'
            :to="routeBtnTop"
            fab
            small
            dark
            absolute
            top
            right
            fixed
            class="actions-btn"
          >
            <v-icon class="actions-btn-icon">{{iconBtnTop}}</v-icon>
          </v-btn>
        </span>
        <spinner v-show='spinnerFullScreen'/>
      <slot></slot>
      </v-container>
    </v-content>


    <v-footer app>
      <span>Gransys &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Spinner from "@/views/Administration/Layouts/Components/spinner";
import { mapState } from "vuex";
  export default {
    props: {
      iconBtnTop: String,
      routeBtnTop: String,
    },
  components: {
    Spinner
  },
  computed:{
    ... mapState("Spinner" ,["spinnerFullScreen"]) 
  },
    data: () => ({
      drawer: null,
    }),
  }
</script>
<style scoped>
.icons-list{
  color: white;
  font-size: 30px;
}
.titles-list{
  font-size: 20px !important;
  color: rgb(226, 225, 225);
}
</style>