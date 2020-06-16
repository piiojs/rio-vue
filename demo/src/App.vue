<template>
  <div id="app">
    <Piio domain-key="piio"/>
    <router-view/>
  </div>
</template>
<style media="screen" src="vue-code-highlight/themes/prism.css"></style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
#app {
  font-family: 'Barlow',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  max-width:100%
}
div{height:auto;overflow:hidden}
.mb-20{
  margin-bottom:20px;
}
.home {
  width: 90%;
  margin: 0 auto;
}
.half-screen{width:46%;float:left;padding:2%;}
</style>
