<template>
  <div  @click='openUrl' class="project-container" :class="{'reverse': reverse }" >
    <gif  class='display'  :class='{"cover": cover}' :gif="gif" :image="image"/>
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
    cover: {
      default:false,
      type:Boolean
    },
    link: {
      type:String,
      required:true
    },
    gif: {
      type:String,
      required:true
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
  },
  methods: {
    openUrl(){
      window.open(this.link,"_self")
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

display
  width: 50vw
  flex-basis: 50%
  align-content: center
  max-width: 60%


.cover
  object-fit: cover

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
    width: 100vw
    height: 50%


</style>
