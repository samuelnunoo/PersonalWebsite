import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import 'fullpage.js/dist/fullpage.min.css'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage,{
  menu: "#menu"
});
