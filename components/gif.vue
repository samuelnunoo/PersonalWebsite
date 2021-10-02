<template>
  <video autoplay muted loop playsinline>
    <source :src="gif" />
    <source :v-if="image != ''" :src="image"/>
    Your Browser does not Support HTML5 Videos
  </video>
</template>

<script>
export default {
  name: "gif",
  props: {
    image: {
      type:String,
      required:true
    },
    gif: {
      type:String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
