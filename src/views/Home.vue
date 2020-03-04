<template>
  <div class="home">
    <Piio path="../../assets/logo.png" alt="Vue logo"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PiioBackground path="../../assets/logo.png" tag="a"/>
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
