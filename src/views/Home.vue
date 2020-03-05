<template>
  <div class="home">
    <head>
      <link rel="preconnect" href="https://piio.co" />
      <link rel="preconnect" href="//pcdn.piiojs.com" />
      <link rel="preconnect" href="//piio.co" />
      <link rel="preconnect" href="//www.googletagmanager.com" />
      <link rel="preload" as="script" href="//js.piio.co/piio/piio.min.js" />
    </head>
    <script src="//js.piio.co/piio/piio.min.js"></script>
    <Piio path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" alt="Vue logo"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PiioBackground path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" tag="span"/>
    <script src="/app.min.js" async></script>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Piio from '@/components/piio/piio.vue'
import PiioBackground from '@/components/background/background-piio.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Piio,
    PiioBackground
  }
}
</script>
