<template>
  <v-app>
    <nav-bar :isDark="false"/>
    <Nuxt/>
    <scroll-to-top/>
  </v-app>
</template>

<script>
import navBar from "../components/navBar";
import _ from "lodash"
export default {
  data () {
    return {
      clipped: false,
      components: {"nav-bar":navBar},
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      computed: {
        copyAlert() {
          return this.$store.state.alert
        }
      }
    }
  },
  mounted() {
    const buffer = 0.5
    let debounce = false
    const getClosestElement = (scrollElements) => {
      return Array.from(scrollElements)
        .map(node => ({node, top: node.getBoundingClientRect().top}))
        .reduce((prev, current) =>
          Math.abs(current.top) < Math.abs(prev.top) ? current : prev
        ).node
    }
    const getElementIndex = (element,nodeList) => {
      const length = nodeList.length
      for (let i = 0; i < length;i++){
        const foundItem = nodeList[i] === element
        if (foundItem) return i
      }
      return -1
    }
    const scrollEvent = (event) =>  {
        const isUpScroll = event.deltaY < 0
        const deltaIsAboveThreshold = Math.abs(event.deltaY) >= 0.3
        if (!deltaIsAboveThreshold) return

        const scrollElements = document.querySelectorAll(".scroll")
        const currentElement = getClosestElement(scrollElements)
        const elementIndex = getElementIndex(currentElement,scrollElements)

        if (isUpScroll) {
          const prevElement = scrollElements[elementIndex - 1]
          if (!prevElement) return
          prevElement.scrollIntoView()
        }

        else {
          const nextElement = scrollElements[elementIndex + 1]
          if (!nextElement) return
          nextElement.scrollIntoView()
        }
      }
    const scrollMethod = async function(event) {
        event.preventDefault()

        if (debounce)  {
          return
        }

        document.removeEventListener("scroll", scrollMethod)
        debounce = true
        scrollEvent(event)
        setTimeout(() => {
          debounce = false
          document.addEventListener("scroll",scrollMethod ,{passive: false })
        },800)

      }
    document.addEventListener("wheel",scrollMethod,{passive:false})
    document.addEventListener("wheel",event => event.preventDefault(),{passive:false})
  }
}
</script>
<style>

</style>
