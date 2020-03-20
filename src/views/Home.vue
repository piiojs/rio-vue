<template>
  <div class="home">
    <!--HelloWorld msg="Welcome to Your Vue.js App"/ -->
    <PiioElement path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" tag="a" href="www.google.com">
      <h1>Example</h1>
    </PiioElement>
    <PiioElement path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" tag="img">
    </PiioElement>
    <PiioElement path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" tag="IMG">
    </PiioElement>
  </div>
</template>
<script>
// @ is an alias to /src
import PiioElement from '@/components/piio/piioElement.vue'

export default {
  name: 'Home',
  components: {
    PiioElement
  }
}
</script>
