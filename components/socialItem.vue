<template>
<v-list-item  @click='goToLink' class="link-item" :class="{'dark-mode': isDark}">
  <v-list-item-icon>
    <img :src="image"/>
  </v-list-item-icon>
  <v-list-item-title class="link-title" :class="{'dark-mode': isDark}"> {{title}} </v-list-item-title>
</v-list-item>
</template>

<script>
export default {
  name: "socialItem",
  props: {
    title: {
      type:String,
      required:true
    },
    image: {
      type:String,
      required:true
    },
    link: {
      type:String,
      required:true
    },
    isDark: {
      type:Boolean,
      default: false
    }
  },
  methods: {
    goToLink() {
      console.log("Ok")
      window.open(this.link,"_blank")
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/colors'

.dark-mode
  background: black
  color: white

img
  width: 5em
  height: 5em

.link-title
  font-weight: bolder
  margin-left: 10%

.link-item
  color: white

@media (max-width: $mobile-width)
  img
    width: 3em
    height: 3em





</style>
