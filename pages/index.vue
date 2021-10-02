<template>
  <div class="content-container" id="main">
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
import ScrollToTop from "../components/scrollToTop";
import Gif from "../components/gif";
import ScrollSnap from "scroll-snap";
export default {
  components: {"gif":Gif, "scroll-to-top":ScrollToTop, Project,splashScreen,contact,resume},


}

</script>
<style lang="sass">

</style>
