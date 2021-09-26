<template>
  <button @click="goToHome">
    <div class="logo-container">
      <img :src="siteLogo">
      <div class="logo-title-container" :class="{'dark-font': isInverted}">
        <h1 id="logo-heading"> Samuel Nunoo</h1>
        <p id="logo-subscript"> Full-Stack Developer</p>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "siteLogo",
  props: {
    isInverted: {
      type:Boolean,
      default:false
    }

  },
  computed: {
    siteLogo () {
      return this.isInverted ?
        "/logo/siteLogoInverted.png":
        "/logo/siteLogo.png"
    }
  },
  methods: {
    goToHome() {
      this.$router.push({path:"/"})
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "assets/colors"

  img
    width: auto
    height: $navbar-height

  .dark-font
    color: white

  .logo-container
    width: 200px
    height: 100%
    display: flex

  .logo-title-container
    height: 100%
    width: auto


  #logo-heading
    font-size: 1em
    font-weight: bolder
    margin-top: 5px
    margin-bottom: -1px
    font-family: "Roboto Condensed"

  #logo-subscript
    font-size: 0.7em
    margin-top: -2.5px
    font-weight: 100
    font-family: "Roboto Condensed"
</style>
