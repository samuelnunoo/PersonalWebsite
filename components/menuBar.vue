<template>
  <v-dialog
    fullscreen
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
      icon
      x-large
      v-bind="attrs"
      v-on="on"
      :color="menuColor"
    >
      <fa icon="bars"/>
    </v-btn>
    </template>
    <v-card>
      <h1> Hello! </h1>
    </v-card>
  </v-dialog>

</template>

<script>
export default {
  name: "menuBar",
  props: {
    isDark: {
      type:Boolean,
      default:false
    }
  },
  computed:{
    menuColor() {
      return this.isDark ?
      "white" : "black"
    }
  }
}
</script>

<style scoped>

</style>
