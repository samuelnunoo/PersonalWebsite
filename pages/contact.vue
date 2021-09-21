<template>
<div class="contact-container">
  <h1 class="contact"> Contact and Social </h1>
  <social/>
</div>
</template>

<script>
import Social from "../components/social";
export default {
  name: "contact",
  components: {Social}
}
</script>

<style lang="sass" scoped>
@import 'assets/colors'

.contact
  font-size: 3em
  font-family: "Roboto Condensed"
  font-weight: bolder

.contact-container
  width: 100vw
  height: 95vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column


@media (max-width: $mobile-width)
  .contact-container
    justify-content: start
    padding-top: 20%

  .contact
    padding-top: 5vh
    font-size: 5vh




</style>
