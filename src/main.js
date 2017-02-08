// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Button from './components/Button'
import Div from './components/Div'
import Grid from 'components/Grid.vue'

require('./test/css/basic.css')
require('./test/css/button.css')
require('./test/css/democss.css')

export const scom = {
  Button, Div, Grid
}
export default {
  'name': 'zx'
}
exports.testexports = {
  'testexports': 'ls'
}
console.log('export finished')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
