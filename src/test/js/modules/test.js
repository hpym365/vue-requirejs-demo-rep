define(['jquery','vue'],function ($,Vue) {

  function init() {
    var tmp = Vue.component('tmp',{
      template:'<p>sdfdf</p>'
    })
    console.log('init')
    $('#showdiv').empty()
    $('#showdiv').append('<p>jjjjj</p>')
    return {template:'<p>'+Math.random()+'</p>'}
  }



  return {
    init
  }
})
