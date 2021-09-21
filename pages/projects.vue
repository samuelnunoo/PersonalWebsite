<template>
<div>
  <Project
    v-for="(project,index) in projects"
    :date="project.date"
    :title="project.title"
    :id="project.title"
    :image="project.image"
    :reverse="index % 2 == 0 ? false: true"
  />
</div>
</template>

<script>
import Project from "../components/Project";

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
          image:"/type.io.png"
        },
        {
          date:"April 2020 - November 2020",
          title:"Bannerlord Modding Project",
          image:"/untitled.gif",

        },
        { date:"September 2019 - March 2020",
          title:"CJMSJ",
          image:"/cjmsj.png"
        },

      ]
    }
  }


}
</script>

<style scoped>

</style>
