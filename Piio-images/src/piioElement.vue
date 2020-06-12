<template>
  <img v-if="cTag == 'img'" :data-piio="path" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  <source v-else-if="cTag == 'source'" :data-piio="path" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  <component v-else :is="cTag" :data-piio-bck="path">
    <slot></slot>
  </component>
</template>

<script src="./piioElement.js"></script>
