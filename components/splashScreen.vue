<template>
  <div class="main-container scroll" id="home">
    <div class="text-container">
      <div class="text-content">
        <p class="main-name"> Samuel Nunoo</p>
        <h1 class="main-title"> Full-Stack <br/> Web Developer </h1>
        <p class="main-subscript"> Musician, Developer, Lifelong Learner.</p>
      </div>
      <div class="link-content">
        <a href="#Type.io">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <div class="main-image"/>
  </div>
</template>

<script>
export default {
  name: "splashScreen"
}
</script>

<style lang="sass" scoped>
@import "assets/colors"

.page-container
  width: 100%

.link-content > a
  color: black
  font-weight: bolder
  text-decoration: underline
  font-family: "Roboto Condensed"
  text-decoration-color: black

.link-content
  display: flex
  justify-content: space-around
  width: 100%
  padding: 0 80px 0 80px
  font-size: 1.25em
  font-family: "Roboto Condensed"

.main-name
  font-family: "Roboto Condensed"
  font-weight: bold
  margin-bottom: -10px
  margin-top: auto
  color: $grey

.text-content
  text-align: left


.main-title
  font-family: "Roboto Condensed"
  line-height: initial
  font-size: 3em

.main-subscript
  font-family: "Roboto Condensed"
  font-weight: 100
  color: $grey

.main-container
  height: 100vh
  margin-top: -50px
  display: flex


.text-container
  flex-basis: 50%
  height: 100%
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  text-align: center

.main-image
  height: 100%
  flex-basis: 60%
  background-image: url('/main/portrait.jpg')
  background-position: 20% 50%
  background-repeat: no-repeat
  background-size: cover
  overflow: hidden

img
  width: 100%
  height: 100%


@media (max-width: $mobile-width)
  .main-container
    flex-direction: column-reverse
    height: 100vh

  .link-content
    flex-direction: column
    flex-basis: 45%

  .text-content
    text-align: center !important
    width: 75%
    margin: 0 auto 0 auto

  .text-container
    align-items: start
    flex-basis: 60%
    width: 100%
    justify-content: initial
    padding-top: 20px

  .main-name
    font-size: 19px

  .main-subscript
    font-size: 1.2em

  .main-title
    font-size: 2em
</style>
