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
export default {
  components: {Project,splashScreen,contact,resume},
}

</script>
<style lang="sass">

</style>
