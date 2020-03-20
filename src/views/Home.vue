<template>
  <div class="home">
    <head>
      <link rel="preconnect" href="https://piio.co" />
      <link rel="preconnect" href="//pcdn.piiojs.com" />
      <link rel="preconnect" href="//piio.co" />
      <link rel="preconnect" href="//www.googletagmanager.com" />
      <link rel="preload" as="script" href="//js.piio.co/piio/piio.min.js" />
    </head>
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
<script src="https://js.piio.co/piio/piio.min.js"></script>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PiioElement from '@/components/piio/piioElement.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PiioElement
  }
}
</script>
