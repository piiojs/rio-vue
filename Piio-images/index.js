import Vue from 'vue'
import HeaderPiio from './src/piio.vue'
import PiioElement from './src/piioElement.vue'


Vue.component('HeaderPiio', HeaderPiio)
Vue.component('PiioElement', PiioElement)


 export default {
   name: 'Piio',
   components: {
     HeaderPiio,
     PiioElement
  }
}
