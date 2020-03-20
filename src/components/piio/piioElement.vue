<template>
  <img v-if="computedTag === 'img'" :data-piio="path" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  <component v-else :is="computedTag" :data-piio="path">
    <slot></slot>
  </component>
</template>

<script src="./piioElement.js"></script>
