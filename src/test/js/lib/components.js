define(['app', 'vue'], function (app, Vue) {
  var options = {}

  function grid(div, optionsdata) {

    var ygrid = app.scom.Grid

    var target = Vue.extend({
      extends: ygrid,
      methods: {}
    })


    div.append('<div id="targetdiv"></div>')
    var res = new target()
    res.$set(res, 'options', optionsdata)
    res.$mount('#targetdiv')
    return res
  }

  function button(div, optionsdata) {

    var ybutton = app.scom.Button

    var target = Vue.extend({
      extends: ybutton,
      methods: {
        setname: function (value) {
          res.$set(res.options, 'btn', value)
        },
        setdisplay: function (value) {
          res.$set(res.options, 'isdisplay', value)
        }
      }
    })


    div.append('<div id="targetdiv"></div>')
    var res = new target()
    res.$set(res, 'options', optionsdata)
    res.$mount('#targetdiv')
    return res
  }

  function div(div, optionsdata) {

    var ydiv = app.scom.Div

    var target = Vue.extend({
      extends: ydiv,
      methods: {
        setname: function (value) {
          res.$set(res.options, 'btn', value)
        }
      }
    })


    div.append('<div id="targetdiv"></div>')
    var res = new target()
    res.$set(res, 'options', optionsdata)
    res.$mount('#targetdiv')
    return res
  }

  function setData(optionsdata, optname) {
    //  var indexvue = instanceVue()
    Vue.set(options, optname, optionsdata)//options[optname] = optionsdata
    //indexvue.$set(indexvue.$data.options,optname,optionsdata)
    return options
  }

  function instanceVue() {

    var ybutton = app.scom.Button
    var ydiv = app.scom.Div

    window.IndexVue = new Vue({
      el: 'body',
      components: {ybutton, ydiv}
    })


    return window.IndexVue
  }

  return {button, instanceVue, div, grid}

})
