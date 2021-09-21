<template>
  <v-btn v-if="showScroll" fab @click="scrollToTop" x-large id="scroll-button">
    <fa icon="arrow-up" />
  </v-btn>
</template>

<script>
export default {
  name: "scrollToTop",
  methods: {
    scrollToTop(){
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  data() {
    return {
      showScroll:false
    }
  },
  mounted() {
    console.log('biff')
    document.addEventListener('scroll',function(event) {
      const buffer = 20
      const hasScrolledPassBuffer = document.scrollingElement.scrollTop > buffer
      if (hasScrolledPassBuffer)  this.showScroll = true
      else this.showScroll = false
    }.bind(this))
  }

}
</script>

<style lang="sass" scoped>
@import 'assets/colors'

#scroll-button
  position: fixed
  top: 90vh
  left: 90vw

@media (max-width: $mobile-width)
  #scroll-button
    top: 85vh
    left: 75vw


</style>
