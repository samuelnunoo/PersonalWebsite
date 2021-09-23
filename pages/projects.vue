<template>
<div>
  <Project
    v-for="(project,index) in projects"
    :date="project.date"
    :title="project.title"
    :id="project.title"
    :gif="project.gif"
    :image="project.image"
    :reverse="index % 2 == 0 ? false: true"
  />
</div>
</template>

<script>
import Project from "../components/Project";
import VanillaTilt from "vanilla-tilt"
export default {
  name: "projects",
  components: {Project},
  data() {
    return {
      components: {Project},
      projects:[
        {
          date:"March 2020 - Present",
          title:"Type.io",
          gif:"/typeio/type_creator.mp4",
          image:"/typeio/type_creator.png"
        },
        {
          date:"April 2020 - November 2020",
          title:"Bannerlord Modding Project",
          gif:"/bannerlord/bannerlord.mp4",

        },
        { date:"September 2019 - March 2020",
          title:"CJMSJ",
          image:"/cjmsj/submission.png",
          gif:"/cjmsj/submission.mp4"
        },

      ]
    }
  },
  mounted() {


  }


}
</script>

<style scoped>

</style>
