<template>
  <div class="form-container">
    <h1 class="form-title"> Contact Form</h1>
    <v-form id="form">
      <v-text-field solo required v-model="sender" label="Your Email"/>
      <v-text-field solo required v-model="subject" label="Subject"/>
      <v-textarea height="40vh" solo label="Message"/>
      <v-btn id="submit-button" x-large > Submit </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "email"
}
</script>

<style lang="sass" scoped>
#submit-button
  margin: auto
.form-title
  font-family: "Roboto Condensed"
  font-weight: bolder
  font-size: 3em
  text-align: center
  color: #292929

.form-container
  margin-top: -50px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  padding:  10vh
  width: 100vw
  height: 100vh
  background-size: cover


#form
  width: 50%
  max-width: 550px
  display: flex
  flex-direction: column


</style>
