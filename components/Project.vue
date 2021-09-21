<template>
  <div class="project-container" :class="{'reverse': reverse }">
    <img class='display' :src="image" />
    <div class="description">
      <div class="text-content">
        <h1 class="project-title"> {{ title }} </h1>
        <h4 class="project-date"> {{ date }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Project",
  props: {
    reverse:{
      default:false,
      type:Boolean
    },
    image: {
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    date:{
      type:String,
      required:true
    }
  }
}
</script>
<style lang="sass" scoped>
@import "assets/colors"

.project-container
  display: flex
  width: 100vw
  height: 100vh
  scroll-snap-align: start

.reverse
  flex-direction: row-reverse

.display
  flex-basis: 50%
  align-content: center
  object-fit: cover
  max-width: 60%

.text-content
  text-align: center

.project-title
  font-family: "Roboto Condensed"
  font-weight: bolder
  font-size: 3em

.project-date
  font-family: "Roboto Condensed"
  color: $grey

.description
  flex-basis: 50%
  display: flex
  align-items: center
  justify-content: center


@media (max-width: $mobile-width)
  .project-container
    flex-direction: column-reverse



  .description
    width: 100%
    justify-content: center
    flex-basis: 50%
    display: flex
    align-items: center

  .project-title
    font-size: 2em

  .display
    max-width: 100% !important
    height: 50%


</style>
