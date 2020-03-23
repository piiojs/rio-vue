<template>
  <img v-if="isImage" :data-piio="path" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
  <component v-else :is="tag" :data-piio="path">
    <slot></slot>
  </component>
</template>

<script src="./piioElement.js"></script>
