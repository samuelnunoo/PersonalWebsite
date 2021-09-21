<template>
  <div class="job-description">
    <img src="/bannerlord.png"/>
    <div class="description-container">
      <h1 class="job-title"> Web Developer</h1>
      <h4 class="job-employer"> Associated Students of Pomona College</h4>
      <ul>
        <li>
          Job highlight one
        </li>
        <li>
          Job highlight 2
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "job",
  props: {

  }
}
</script>

<style lang="sass" scoped>
.job-title
  font-size: 2em

.job-employer
  color: grey

.image-container
  display: flex
  padding: 10px

img
  height: 50%
  border-radius: 10px

.dark-mode
  background: black
  color: white

.job-description
  width: 100vw
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  background: white
  color: black




</style>
