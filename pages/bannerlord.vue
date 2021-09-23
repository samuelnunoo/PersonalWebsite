<template>
  <div>
    <projectInfo
      title="Bannerlord"
      github="https://github.com/samuelnunoo/Scene-Editor"
      :description="description"
      date="April 2020 - November 2020"
    />
    <Feature
      v-for="(feature,index) in features"
      :image="feature.image"
      :gif="feature.gif"
      :title="feature.title"
      :cover="feature.cover"
      :description="feature.description"
      :isDark="index % 2 != 0 "
      :isReverse="index % 2 != 0"
    />
  </div>
</template>

<script>
export default {
  name: "bannerlord",
  data() {
    return {
      description:`Bannerlord is a video game that was released in Q1 2020. As the game had just released, there was no documentation
      on how to properly mod the game. And I spent countless hours (400+) combing through their massive code base (500k+ lines of code)
      to figure out critical classes and methods.After learning about major components of the game, I made a mod that can allow you to
      place custom prefabs onto the world map.I also took the knowledge that I gained and wrote an array of tutorials that received over 2,000 views in total.

      `,
      features:[
        {
          title:"Item Preview",
          description:"The item preview allows you to preview any prefab in the game so that you can find what you need with ease.",
          gif:"/bannerlord/item_preview.mp4",
          cover:true
        },
        {
          title:"Item Placement",
          description:"Enjoy a custom camera that allows you to smoothly roam across the map and drop and drag prefabs as you please.",
          gif:"/bannerlord/placement.mp4",
          cover:true
        },
        {
          title:"Item Rotation",
          description:"Use keybindings to quickly rotate the selected prefab as you need and position it anyway you want.",
          gif:"/bannerlord/rotation.mp4",
          cover:true
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
