<template>
  <div class="main-container" id="resume">
    <div class="resume-container">
      <div class="resume-data">
        <div class="portrait" src="/piano.jpg"/>
        <h1 class="college-text" > Pomona College</h1>
        <h2 class="degree-text"> B.A Computer Science '22</h2>
        <button class="resume-button"> Download Resume </button>
      </div>

    </div>
    <div class="cover" />
  </div>
</template>

<script>
import Job from "../components/job.vue"
import social from "../components/social";
export default {
  name: "resume",
  components: {Job,social}
}
</script>

<style lang="sass" scoped>
@import 'assets/colors'
.resume-data
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center


.portrait
    border-radius: 10px
    width: 200px
    height: 200px
    background-image: url('/portrait.jpg')
    background-size: cover
    background-position: 0px

.social
  font-family: "Roboto Condensed"
  font-weight: bolder
  font-size: 2.5em

.cover
  width: 50vw
  height: 100vh
  background-image: url('/ocean.jpg')
  background-size: cover

.resume-button
  background: black
  font-weight: bold
  border-radius: 10px
  font-family: "Roboto Condensed"
  color: white
  padding: 10px
  margin-top: 10px

.college-text
  font-family: "Roboto Condensed"
  font-weight: bolder
  text-align: center

.degree-text
  font-family: "Roboto Condensed"
  font-weight: 100



.resume-container
  width: 50vw
  height: 100vh
  display: flex
  justify-content: center

.social-container
  width: 50vw
  height: 100vh
  justify-content: center
  align-items: center
  display: flex
  flex-direction: column

.main-container
  width: 100vw
  height: 100vh
  display: flex
  scroll-snap-align: start



@media (max-width: $mobile-width)
  .main-container
    flex-direction: column
    width: 100%
    margin-top: 0px
    height: 95vh

  .resume-container
    width: 100%
    background: white

  .resume-data
    color: black

  .resume-button
    background: black
    color: white
    border-radius: 10px
    padding: 15px

  .cover
    display: none


  .social-container
    width: 100%
    justify-content: start





</style>
