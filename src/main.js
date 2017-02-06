// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Button from './components/Button'
import Div from './components/Div'
// import Hello from 'components/Hello.vue'

export const scom = {
  Button, Div
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
