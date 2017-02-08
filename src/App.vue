<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <ybutton :options="optionsdata"></ybutton>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import ybutton from './components/Button.vue'

  export default {
    data () {
      var optionsdata = {
        btn: '123'
      }
      return {optionsdata}
    },
    name: 'app',
    components: {
      Hello, ybutton
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
