<template>
  <div id="navbar">
    <siteLogo :is-inverted="true"/>
  </div>
</template>

<script>
import siteLogo from "./siteLogo.vue";
export default {
  name: "navBar",
 components: {"siteLogo":siteLogo},
}
</script>

<style lang="sass" scoped>
#navbar
  width: 100%
  height: 50px
  display: flex
  justify-content: space-between
  top: 0
  position: sticky
  z-index: 300
</style>
