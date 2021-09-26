<template>
  <v-dialog
    v-model="dialog"
    fullscreen
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        plain
        icon
        x-large
        v-bind="attrs"
        v-on="on"
        :color="menuColor"
      >
        <fa icon="bars"/>
      </v-btn>
    </template>
    <v-card >
      <div class="button-container">
        <v-btn
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div @click="closeDialog" class="link-container">
        <a  href="/#home"> Home </a>
        <a  href="/#Type.io"> Projects </a>
        <a  href="/#resume"> Resume </a>
        <a  href="/#contact"> Contact </a>
      </div>
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
  },
  methods: {
    closeDialog(event) {
      const isAnchor = event.target.tagName == "A"
      if (isAnchor) this.dialog = false
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="sass" scoped>
.button-container
  justify-content: end
  padding: 10px 30px
  display: flex
  height: 5vh
.link-container > a
  color: black
  font-family: "Roboto Condensed"
  font-weight: bolder
  margin: 10px 0 10px
  font-size:  2em
.link-container
  display: flex
  height: 95vh
  margin-top: -10vh
  justify-content: center
  align-items: center
  height: 100vh
  flex-direction: column
</style>
