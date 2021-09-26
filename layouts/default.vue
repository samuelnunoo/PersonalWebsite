<template>
  <v-app>
    <nav-bar :isDark="false"/>
    <Nuxt/>
    <scroll-to-top/>
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
export default {
  data () {
    return {
      components: {"nav-bar":navBar},
    }
  },
  mounted() {

  }
}
</script>
