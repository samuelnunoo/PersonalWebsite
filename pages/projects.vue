<template>
<div>
  <Project
    v-for="(project,index) in projects"
    :date="project.date"
    :title="project.title"
    :id="project.title"
    :gif="project.gif"
    :image="project.image"
    :cover="project.cover"
    :link="project.link"
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
          image:"/typeio/type_creator.png",
          link:'/typeio',
          cover:false,
        },
        {
          date:"April 2020 - November 2020",
          title:"Bannerlord Modding Project",
          gif:"/bannerlord/placement.mp4",
          link:"/bannerlord",
          cover:true,

        },
        { date:"September 2019 - March 2020",
          title:"CJMSJ",
          image:"/cjmsj/submission.png",
          gif:"/cjmsj/submission.mp4",
          link:"/cjmsj",
          cover:true
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
