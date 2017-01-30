define(['app', 'vue'], function (app, Vue) {
  function button(div, optionsdata) {

    div.append('<btncom :options="options"></btncom>')
    var btncom = app.scom.Button

    var btnvue = new Vue({
      data: {
        options: optionsdata
      },
      el: div[0],
      components: {btncom}
    })

    return btnvue
  }

  function generateCom(optionsdata, optname) {
    var indexvue = instanceVue()
    indexvue.$set(indexvue.$data,optname,optionsdata)
    return indexvue
  }

  function instanceVue() {
    if (window.IndexVue === undefined) {
      window.IndexVue = new Vue({
        el: '#demo',
        data: {
          options:{'df':'123'},
          df: '123'
        }
      })
    }
    return window.IndexVue
  }

  return {button, generateCom}

})
