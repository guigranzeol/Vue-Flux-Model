<template>
<span>
  <admin-blade>
    <h1>Default</h1>
    <v-btn @click="setList"></v-btn>
      {{list}}
      
  </admin-blade>
</span>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import AdminBlade from '@/views/Administration/Layouts/Blade'

export default {
  
  components:{
    AdminBlade
  },
  computed:{
      ...mapState('Default', ['list'])
  },
  methods:{
      ...mapActions('Default', ['setList'])
  },
  mounted() {
    this.setList()
  }

}
</script>

<style>

</style>