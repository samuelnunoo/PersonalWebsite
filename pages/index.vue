<template>
  <div>
    <splashScreen/>
    <Project/>
    <resume/>
    <contact/>
  </div>
</template>

<script>
import resume from "./resume"
import splashScreen from "../components/splashScreen";
import Project from "./projects"
import contact from "./contact"
import tilt from "vanilla-tilt"
export default {
  components: {Project,splashScreen,contact,resume},

}

</script>
<style lang="sass">

</style>
