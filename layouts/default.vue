<template>
  <v-app>
    <nav-bar :isDark="false"/>
      <Nuxt/>
    <scroll-to-top/>
  </v-app>
</template>

<script>
import ScrollSnap from "scroll-snap"


export default {
  data () {
    return {
      fullPageOptions: {

      }

    }
  },
  methods: {
    sineEase(x) {
      return -1 * (Math.cos(Math.PI * x) - 1) /2
    },
    bindScrollSnap() {
      const snapElement = new ScrollSnap(document.scrollingElement,{
        snapDestinationY: '100vh',
        threshold: 0.05,
        duration: 0,
        timeout: 2,
        easing: this.sineEase
      })
      snapElement.bind(() => console.log("snapped"))
    },

  },
  mounted() {

  }
}
</script>
<style>

</style>
