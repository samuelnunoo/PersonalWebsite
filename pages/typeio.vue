<template>
  <div>
    <projectInfo
      title="Type.io"
      :description="description"
      date="March 2020 - Present"
    />
  </div>
</template>

<script>
import projectInfo from "../components/projectInfo";
export default {
  name: "typeio.vue",
  components: {
    projectInfo
  },
  data() {
    return {
      description: `Type.io is a document editor that was developed to maximize productivity by providing numerous features to make
      data more searchable. This was one of the most challenging projects I've worked on, with over 20,000 lines of code. `
    }
  }
}
</script>

<style scoped>

</style>
