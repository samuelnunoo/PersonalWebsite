<template>
<v-list class="list">
  <socialItem
    image="/email.png"
    title="Email"
  />
  <socialItem
    link='https://www.github.com/samuelnunoo'
    image="/github.png"
    title="Github"
    :isDark="true"
  />
  <socialItem
    link="https://www.linkedin.com/in/samuelnunoo/"
    image="/linkedin.png"
    title="Linkedin"
  />

</v-list>
</template>

<script>
import socialItem from "./socialItem";
export default {
  name: "social",
  components: {
    socialItem
  }
}
</script>

<style lang="sass" scoped>
.list
  width: 80%
  max-width:  500px
</style>
