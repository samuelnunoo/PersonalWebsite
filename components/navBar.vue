<template>
  <div id="navbar">
    <siteLogo :is-inverted="isDark"/>
    <menuBar :isDark="darkMenu"/>
  </div>
</template>
<script>
import siteLogo from "./siteLogo.vue";
import menuBar from "./menuBar";
export default {
  name: "navBar",
  components: {"siteLogo":siteLogo,"menuBar":menuBar},
  data() {
    return {
      isDark:false,
      darkMenu:true
    }
  },
  methods: {
    nodeIsNavBarDescendant(navBar,element) {
      return navBar.contains(element) || navBar === element
    },
    isMainContentNode(vApp,navBar,element) {
      return !this.nodeIsNavBarDescendant(navBar,element) && vApp.contains(element) && element !== vApp
    },
    isWhite(element){
      const navBar = document.querySelector("#navbar")
      const style = getComputedStyle(element)
      const background = style.getPropertyValue("background-color")
      const isWhite =  background == "rgba(0, 0, 0, 0)" || background.toLowerCase() == ''
      const hasImage =  style.backgroundImage != 'none'
      return isWhite
    },
    handleColor(vApp,navBar) {
      const isMainContentNode = this.isMainContentNode
      const isWhite = this.isWhite
      const styleElement = this.styleElement

      return function (element,x,y) {
        const elements = document.elementsFromPoint(x,y)
        const refElement = elements.filter(el => isMainContentNode(vApp,navBar,el))[0]
        const elementIsWhite = isWhite(refElement)
        if (elementIsWhite) styleElement(element,"black")
        else styleElement(element,"white")
      }
    },
    styleElement(element,color) {
      const isMenuButton = element.classList.contains("v-btn")
      const colorValue = color == "white"

      if (isMenuButton) {
        console.log(colorValue)
        this.darkMenu = colorValue
      }

      else this.isDark = colorValue

    }
  },
  mounted() {
    const logoTitle = document.querySelector("#navbar .logo-title-container")
    const {left,top} = logoTitle.getBoundingClientRect()
    const vApp = document.querySelector(".v-application--wrap")
    const navBar = document.querySelector("#navbar")

    const menuButton = document.querySelector("#navbar .v-btn")
    const {width} = navBar.getBoundingClientRect()
    const handleColor = this.handleColor(vApp,navBar)
    handleColor(logoTitle,left,top)
    handleColor(menuButton,width - 100,0)

    document.addEventListener('scroll',function(event) {
       handleColor(logoTitle,left,top)
       handleColor(menuButton,width - 100,0)
    }.bind(this))
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/colors'

#navbar
  width: 100%
  height: $navbar-height
  display: flex
  justify-content: space-between
  top: 0
  position: sticky
  background: transparent
  z-index: 300




</style>
