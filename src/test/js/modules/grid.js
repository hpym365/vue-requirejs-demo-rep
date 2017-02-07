define(['jquery', 'components'], function ($, com) {

  function tt() {
    alert('tt')
  }

  function init() {

    console.log('gridinit')

    $('#showdiv').empty()
    $('#showdiv').append('<p>gridinit</p>')

    var optionsdata = {
      fields: [{name: '名字', col: 'name'}, {name: '年龄', col: 'age'}],
      datalist: [{name: '张三', age: '22'}, {name: '李四', age: '21'}],
      test: function (ziduan, shuju) {
        if (ziduan.col === 'name') {
          if (shuju[ziduan.col] === '张三') {
            return '<h1>这是张三啊</h1>'
          } else {
          //  var div = $('<button @click="options.clickevent">' + shuju[ziduan.col] + '</button>')
            return '<button>' + shuju[ziduan.col] + this + '</button>'
          }
        }
        return null
      },
      clickevent: function () {
        window.alert('else的点击事件')
      }

    }

    var grid1 = com.grid($('#showdiv'), optionsdata)

  }


  return {
    init
  }


})
