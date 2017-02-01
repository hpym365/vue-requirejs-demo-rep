define(['app', 'vue'], function (app, Vue) {
  var options = {}

  function button(div, optionsdata, optname) {

    setData(optionsdata, optname)
    var btndiv = '<btncom :options="options.' + optname + '"></btncom>'
    console.log(btndiv)
    div.append(btndiv)
    $('#showdiv').empty()
    $('#showdiv').append(div)
    instanceVue()
    return div
  }

  function setData(optionsdata, optname) {
    //  var indexvue = instanceVue()
    Vue.set(options,optname,optionsdata)//options[optname] = optionsdata
    //indexvue.$set(indexvue.$data.options,optname,optionsdata)
    return options
  }

  function instanceVue() {
    debugger
    if(window.IndexVue==='weundefined'){
      debugger
      window.IndexVue._init(window.IndexVue.$options);
      window.IndexVue.$forceUpdate()
    }else{
      var btncom = app.scom.Button
      //  window.IndexVue.$destroy()
      //   window.IndexVue.$forceUpdate()
      //   console.log(window.IndexVue)
      if (window.IndexVue != undefined){
        window.IndexVue.$destroy()
      }
      window.IndexVue = new Vue({
        el: '#demo',
        data: {
          options: options
        },
        components: {btncom},
        destroyed () {
          console.log('destroyed')
        },
        beforeMount () {
          debugger
          console.log('before mounted')
        },
        mounted () {
          console.log('mounted')
        }
      })
    }

    return window.IndexVue
  }

  return {button, instanceVue}

})
