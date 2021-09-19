<template>
  <button>
    <div class="logo-container">
      <img :src="siteLogo">
      <div class="logo-title-container">
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
        "/siteLogoInverted.png":
        "/siteLogo.png"
    }
  }

}
</script>

<style lang="sass" scoped>
  img
    width: auto
    height: 100%

  dark
    color: black

  .logo-container
    width: auto
    height: 100%
    display: flex

  .logo-title-container
    height: 100%
    width: auto

  #logo-heading
    font-size: 1em
    font-weight: 400
    margin-top: 5px
    font-family: "Roboto Condensed"

  #logo-subscript
    font-size: 0.7em
    margin-top: -2.5px
    font-weight: 100
    font-family: "Roboto Condensed"



</style>
