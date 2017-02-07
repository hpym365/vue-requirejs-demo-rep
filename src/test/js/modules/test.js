define(['jquery', 'vue'], function ($, Vue) {

  function init() {
    console.log('init')
    $('#showdiv').empty()
    $('#showdiv').append('<p>jjjjj</p>')
  }

  return {
    init
  }


})
