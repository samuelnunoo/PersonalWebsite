<template>
<div class="feature-container" :class="{'darkMode': isDark,
'reverse': isReverse
}">
  <div class="feature-text">
    <div class="text-content">
      <h1 class="feature-title"> {{title}}</h1>
      <p class="feature-description"> {{description}}</p>
    </div>
  </div>
  <div class="feature-image">
    <img :src="image"/>
  </div>
</div>
</template>

<script>
export default {
  name: "feature",
  props: {
    title: {
      type:String,
      required:true
    },
    description: {
      type:String,
      required:true
    },
    image: {
      type:String,
      required:true
    },
    isDark: {
      type:Boolean,
      default: false
    },
    isReverse: {
      type:Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>

  .reverse
    flex-direction: row-reverse

  .darkMode
    color: white
    background: black
  img
    border-radius: 10px

  .text-content
    align-self: center
    width: 200px

  .feature-title
    font-family: "Roboto Condensed"
    font-weight: bolder

  .feature-description
    font-family: "Roboto Condensed"
    font-weight: 100


  .feature-container
    width: 100vw
    height: 45vh
    padding: 2.5vh 0 2.5vh 0
    display: flex
    scroll-snap-align: start

  .feature-text
    flex-basis: 50%
    display: flex
    justify-content: center

  .feature-image
    flex-basis: 50%
    display: flex
    justify-content: center
</style>
