<template>
  <v-app>
    <nav-bar :isDark="false"/>
    <Nuxt/>
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
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
  }
}
</script>
<style>
  html {
    overscroll-behavior-y: none;
    overscroll-behavior-x: none;
  }
</style>
