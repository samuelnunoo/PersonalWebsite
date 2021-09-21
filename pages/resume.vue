<template>
  <div class="main-container" id="resume">
    <div class="resume-container">
      <div class="resume-data">
        <h1 class="resume-heading"> Resume </h1>
        <button class="resume-button"> View Resume </button>
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

.resume-heading
  font-family: "Roboto Condensed"

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
    background: black
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
  background: black
  background-size: cover

.resume-button
  background: black
  font-weight: bold
  border-radius: 10px
  font-family: "Roboto Condensed"
  color: white
  padding: 15px
  margin-top: 10px

.college-text
  font-family: "Roboto Condensed"
  font-weight: bolder
  text-align: center

.degree-text
  font-family: "Roboto Condensed"
  color: $grey



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
