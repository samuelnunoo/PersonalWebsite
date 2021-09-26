<template>
<div
  class="feature-container"
  :class="{'darkMode': isDark,'reverse': isReverse}"
>
  <div class="feature-text">
    <div class="text-content">
      <h1 class="feature-title"> {{title}}</h1>
      <p class="feature-description"> {{description}}</p>
    </div>
  </div>
  <div class="feature-image" >
    <gif class='gif' :class='{"cover": cover}' :gif="gif" :image="image"/>
  </div>
</div>
</template>

<script>
import Gif from "./gif";
export default {
  name: "feature",
  components: {"gif":Gif},
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
    cover: {
      type:Boolean,
      default:false
    },
    gif: {
      type: String,
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
  @import "assets/colors"
  .reverse
    flex-direction: row-reverse

  .darkMode
    color: white
    background: black

  .gif
    border-radius: 10px
    height: 100%

  .text-content
    align-self: center
    width: 50%
    word-break: break-word

  .feature-title
    font-family: "Roboto Condensed"
    font-weight: bolder

  .feature-description
    font-family: "Roboto Condensed"
    font-weight: 100




  .feature-container
    width: 100vw
    height: 50vh
    height: calc(var(--vh,1vh) * 50)
    padding: 2.5vh 0 2.5vh 0
    display: flex
    scroll-snap-align: start

  .feature-text
    flex-basis: 50vw
    display: flex
    justify-content: center

  .feature-image
    flex-basis: 50vw
    display: flex
    justify-content: center
    align-items: center



  @media (max-width: $mobile-width)
    .feature-container
      flex-direction: column-reverse
      height: 100vh
      height: calc(var(--vh,1vh) * 100)
      width: 100vw
      background: white
      padding: 0

    .feature-image
      padding: 0

    .text-container
      width: 80%

    .feature-image
      height: 50vh
      height: calc(var(--vh,1vh) * 50)

    .text-content
      color: white

    .gif
      width: 100vw
      height: 100%
      object-fit: contain
      border-radius: 0

    .cover
      width: 100vw
      height: 50vh
      height: calc(var(--vh,1vh) * 50)
      object-fit: cover


    .feature-text
      flex-basis: 50%
      text-align: center
      background: black

    .darkMode
      background: white



  @media (max-width: $mobile-medium)
    .feature-text
      flex-basis: 50%

    .feature-container
      background: white

    .darkMode
      background: white

    .cover
      width: 100vw
      height: 50vh
      height: calc(var(--vh,1vh) * 50)
      object-fit: cover



  @media (max-width: $mobile-small)
    .gif
      width: 100vw
      height: 100%

    .cover
      width: 100vw
      height: 50vh
      height: calc(var(--vh,1vh) * 50)
      object-fit: cover

    .feature-text
      flex-basis: 50%
      background: white

    .text-content
      align-self: start
      color: black
      max-width: 90%

    .feature-container
      background: white

</style>
