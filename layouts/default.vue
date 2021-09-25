<template>
  <v-app>
    <nav-bar :isDark="false"/>
    <Nuxt/>
    <scroll-to-top/>
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
import _ from "lodash"
export default {
  data () {
    return {
      clipped: false,
      components: {"nav-bar":navBar},
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      computed: {
        copyAlert() {
          return this.$store.state.alert
        }
      }
    }
  },
  mounted() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh',`${vh}px`)
    window.scrollTo(0,1);
    window.addEventListener("resize",() => {
      console.log("Changing")
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh',`${vh}px`)
    })
  }
}
</script>
<style>

</style>
