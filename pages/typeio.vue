<template>
  <div class="content-container">
    <projectInfo
      title="Type.io"
      :description="description"
      date="March 2020 - Present"
    />
    <Feature
      v-for="(feature,index) in features"
      :image="feature.image"
      :gif="feature.gif"
      :title="feature.title"
      :description="feature.description"
      :isDark="index % 2 != 0 "
      :isReverse="index % 2 != 0"
    />

  </div>
</template>

<script>
import projectInfo from "../components/projectInfo";
import Feature from "../components/feature";
export default {
  name: "typeio.vue",
  components: {
    Feature,
    projectInfo
  },
  data() {
    return {
      description: `Type.io (not yet hosted) is a document editor that was developed to maximize productivity by providing numerous features to make
      data more searchable. This was one of the most challenging projects I've worked on, with over 20,000 lines of code. `,
      features: [
        {
          title:"Type Creator",
          description:"Use the Type Creator to compose different blocks together into templates to maximize your workflow productivity.",
          gif:"/typeio/type_creator.mp4",
          image:"/typeio/type_creator.png"
        },
        {
          title:"Type Entry",
          description:"Insert templates created with the Type Creator using slash commands to quickly insert relevant content.",
          gif:"/typeio/type_entry.mp4",
          image:"/typeio/type_entry.png"
        },
        {
          title:"Type Table",
          description:"View all of your template data in one central table to quickly find what you're looking for.",
          gif:"/typeio/type_table.mp4",
          image:"/typeio/type_table.png"
        },
        {
          image:"/typeio/outliner.png",
          gif:"/typeio/outliner.mp4",
          title:"Outliner",
          description:"Outliners allow you to easily nest, expand, and collapse your content to keep you better organized."
        },
        {
          image:"/typeio/references.png",
          gif:"/typeio/references.mp4",
          title:"References",
          description: "References allows you to link blocks across any page to quickly access related content."
        },
        {
          image:"/typeio/full_text_search.png",
          gif:"/typeio/full_text_search.mp4",
          title:"Full-Text Search",
          description:"Type.io was designed from the ground up to feature an offline-first experience. Full-text search is available to search" +
            "for content across all pages offline."
        },
        {
          title:"Nested Pages",
          description:"Pages can be nested through drop-and-drag to easily organize your documents.",
          gif:"/typeio/nested_pages.mp4",
          image:"/typeio/nested_pages.png"
        },
        {
          title:"Emoji Picker",
          description:"Add style to your documents using the emoji picker with hundreds of emojis to choose from.",
          gif:"/typeio/emoji_picker.mp4",
          image:"/typeio/emoji_picker.png"
        },


      ]
    }
  }
}
</script>

<style scoped>

</style>
