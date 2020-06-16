# Piio Images for Vuejs

Piio Images will allow you to easily optimize all your images based on your visitor's browser and screen-size. With thoughtful compression and new-generation formats, your images will have crisp quality and consume less data, including Lazy Loading, out of the box.

Piio Images will also improve your load time and reduce unnecessary network usage.

- Effortless integration
- Pixel-perfect responsive images
- Thoughtful image compression
- High DPI Support and Scalability
- WebP and other new-generation formats and compatible with legacy browsers
- Lazy loading integrated

Read more about <a href="https://piio.co/" target="_blank">Piio</a> and register at <a href="https://app.piio.co/register" target="_blank">https://app.piio.co/register</a>

## Getting started

#### NPM Installation
```
npm install piio-images-vue
```
#### Manual Installation

If you aren't using npm installation, you can install Piio manually by following these steps:

- Download the directory Piio-images containing `piio.js`, `piio.vue`, `piioElement.js` and `piioElement.vue`
- Load `piio.js` in your code

### Import component

Add the following line to import the component in your `main.js`:

```javascript
Vue.component('Piio',  require('./components/piio/piio.vue').default);
```

Initialize the component by adding it to the `App.vue`:
```html
  <Piio domain-key="DOMAIN-KEY"/>
```

Getting as result:

```html
<template>
  <div id="app">
    <Piio domain-key="DOMAIN-KEY"/>
    <router-view/>
  </div>
</template>
```

Replace `DOMAIN-KEY` with the Piio Domain Key you get from your dashboard at <a href="https://app.piio.co/" target="_blank">https://app.piio.co/</a>

### Usage


#### Image tag

Add the PiioElement with the `tag` attribute set as `img` and your image as `path`

```html
    <PiioElement path="https://piio.co/img/whypiio-hero@3x.png" tag="img" class="example-class">
    </PiioElement>
```

#### Background image

Add the PiioElement with the `tag` attribute set as the element you want to have the background applied. You can add any other attributes and content to the element as it will be added.

Here is an example using an anchor tag:
```html
  <PiioElement path="https://piio.co/img/whypiio-hero@3x.png" tag="a" href="https://www.piio.co">
      <h1>Example content</h1>
    </PiioElement>
```

#### Picture

Add a PiioElement for each `source` you need inside the `picture` tag. Set tag as `source` and add any other attributes you need, e.g `media` attribute.

This example follows the <a href="https://blog.piio.co/responsive/art-direction-showing-different-images-per-device/" target="_blank">Art Direction: Showing different images per device</a> idea.

```html
<picture>
  <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="source" media="(min-width:969px)">
  </PiioElement>
  <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg" tag="source" media="(max-width:969px)">
  </PiioElement>
  <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg" tag="img">
  </PiioElement>
</picture>
```
---
For more settings check our Docs at <a href="https://docs.piio.co/" target="_blank">https://docs.piio.co/</a>
