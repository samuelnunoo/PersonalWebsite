<template>
  <div>
    <div class="github-container">
      <h1 class="project-title"> {{ title }}</h1>
      <h4 class="project-date"> {{ date }} </h4>
    </div>
    <div class="about-container">
      <div class="text-container">
        <h2 class="about-title"> Description </h2>
        <p class="about-text"> {{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectInfo",
  props: {
    title:{
      type:String,
      required:true
    },
    description: {
      type:String,
      required:true
    },
    date: {
      type: String,
      required:true
    }
  }
}
</script>

<style lang="sass" scoped>
  .project-title
    color: white
    text-align: center
    font-size: 4em

  .project-date
    color: grey
    text-align: center
    margin-bottom: 10px

  .about-title
    font-family: "Roboto Condensed"
    font-weight: bolder

  .about-text
    font-family: "Roboto Condensed"
    color: grey

  .github-container
    background: black
    width: 100vw
    height: 50vh
    margin-top: -50px
    display: flex
    justify-content: flex-end
    flex-direction: column
    align-items:  center

  .text-container
    margin-top: 40px
    width: 30%

  .about-container
    width: 100vw
    height: 50vh
    display: flex
    justify-content: center


</style>
