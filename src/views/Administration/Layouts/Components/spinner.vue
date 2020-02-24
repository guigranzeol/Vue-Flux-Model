<template>
  <span >
    <div class="bg-spiner">
      <v-progress-circular class="spiner" :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
    </div>
  </span>
</template>

<script>
export default {
    computed:{
    }
};
</script>

<style>
.spiner{
    position: absolute;
    top: 50%;
    left:50%;  
}
.bg-spiner{
    position: absolute;
    background: rgba(253, 253, 253, 0.712);
    width: 100%;
    height: 100%;
    z-index: 100;
}
</style>