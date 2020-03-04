<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Piio data-piio="/assets/logo.png"/>
    <PiioBackground />
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
