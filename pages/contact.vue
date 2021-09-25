<template>
<div class="contact-container scroll" id="contact">
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
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column


@media (max-width: $mobile-width)
  .contact-container
    justify-content: center
    padding-bottom: 20%

  .contact
    padding-top: 5vh
    font-size: 5vh




</style>
