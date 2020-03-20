# piio-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Para la instalacion es necesario hacer npm install piio

El componente abarca el uso de imagenes por tag img y el uso de imagenes como background

Lo primero es importar el componente
import PiioElement from '@/components/piio/piioElement.vue'

En la vista definir el componente
export default {
  name: 'Home',
  components: {
    PiioElement
  }
}

Luego usar los componentes, en caso de ser img la tag seria como por ejemplo
    <PiioElement path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" tag="img">
    </PiioElement>

Tambien se puede utilizar como background seleccionando la tag y entre tags el contenido que se desea poner
  <PiioElement path="https://www.publitas.com/blog/holiday-inspiration-great-examples-of-guides-and-christmas-catalogs/header.jpg" tag="a" href="www.google.com">
      <h1>Example</h1>
    </PiioElement>
