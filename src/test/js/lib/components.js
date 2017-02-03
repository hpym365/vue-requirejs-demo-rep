define(['app', 'vue'], function (app, Vue) {
  var options = {}

  function button(div, optionsdata) {

    var btncom = app.scom.Button
    debugger

    var target = Vue.extend({
      extends: btncom,
      methods: {
        setname: function (value) {
          res.$set(res.options,'btn',value)
        }
      }
    })


    div.append('<div id="targetdiv"></div>')
    var res = new target()
    res.$set(res,'options',optionsdata)
    res.$mount('#targetdiv')
    return res
  }

  function setData(optionsdata, optname) {
    //  var indexvue = instanceVue()
    Vue.set(options,optname,optionsdata)//options[optname] = optionsdata
    //indexvue.$set(indexvue.$data.options,optname,optionsdata)
    return options
  }

  function instanceVue() {

      var btncom = app.scom.Button

      window.IndexVue = new Vue({
        el: '#demo',
        components: {btncom}
      })


    return window.IndexVue
  }

  return {button, instanceVue}

})
