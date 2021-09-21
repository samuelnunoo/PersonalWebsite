<template>
  <div>
    <v-list-item  @click='goToLink' class="link-item" :class="{'dark-mode': isDark}">

      <v-list-item-icon>
        <img :src="image"/>
      </v-list-item-icon>
      <v-list-item-title class="link-title" :class="{'dark-mode': isDark}"> {{title}} </v-list-item-title>
    </v-list-item>
    <v-snackbar
      v-model="copyAlert"
      top
      color="black"
      app
      timeout="3000"
      elevation="20"
    > Email has been copied to clipboard!
    </v-snackbar>
  </div>

</template>

<script>
import rot13 from "rot13-cipher"
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
  data() {
    return {
      copyAlert:false
    }
  },
  methods: {
    goToLink() {
      const isEmail= this.title.toLowerCase() == 'email';
      if (isEmail) this.copyEmail();
      else window.open(this.link,"_blank");
    },
    copyEmail(){
      const email = rot13("fnan2018@zlznvy.cbzban.rqh")
      const clipBoard = navigator.clipboard
      clipBoard.writeText(email).then(_ => this.copyNotification() )
    },
    copyNotification() {
      this.copyAlert = true
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
