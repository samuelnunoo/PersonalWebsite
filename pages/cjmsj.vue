<template>
  <div>
    <projectInfo
      title="CJMSJ"
      :description="description"
      github="https://github.com/samuelnunoo/CJMSJ-Website"
      date="September 2019 - March 2020"
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
export default {
  name: "cjmsj",
  data() {
    return {
      description:`
      The Claremont Journal of Medicine and Social Justice (CJMSJ) is a student club where members write articles related
      to medicine and social justice. I created a website for them that allowed them to create, submit, and approve article submissions
      for anyone who wished to contribute.`,
      features: [
        {
          title:"Articles Page",
          description:"The articles page presented all approved articles on the main page and displayed the articles image, title, and description.",
          gif:"/cjmsj/articles.mp4",
          image:"/cjmsj/articles.jpg"
        },
        {
          title:"Article Submission Form",
          description:"The submission form allowed users to create articles using a WYSIWYG document editor.",
          gif:"/cjmsj/submission.mp4",
          image:"/cjmsj/submission.png"
        },

        {
          title:"Image Cropping",
          description:"Image cropping allowed using to upload images of various resolutions and crop them so that they can be displayed beautifully on the website.",
          gif:"/cjmsj/cropping.mp4",
          image:'/cjmsj/cropping.png'
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
