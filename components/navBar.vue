<template>
  <div id="navbar">
    <siteLogo :is-inverted="isDark"/>
    <menuBar :isDark="isDark"/>
  </div>
</template>
<script>
import siteLogo from "./siteLogo.vue";
import menuBar from "./menuBar";
export default {
  name: "navBar",
  components: {"siteLogo":siteLogo,"menuBar":menuBar},
  props: {
    isDark:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/colors'

#navbar
  width: 100%
  height: $navbar-height
  display: flex
  justify-content: space-between
  top: 0
  position: sticky
  background: transparent
  z-index: 300

@media (max-width: 500px)
  #navbar
    background: white



</style>
