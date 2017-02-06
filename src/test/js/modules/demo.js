define(['components', 'jquery'], function (com, $) {
  console.log('demo js execute')
 // com.instanceVue()

  function init() {
    $('#showdiv').empty()
    var ydiv = com.div($('#showdiv'), {options:{message:'123'}})

    var btn3
    var optionsdata1 = {
      btn: '按钮1',
      funclick: function () {
        window.alert('我是按钮1')
        if(btn3!== undefined){
          $.ajax('test').then(function (json) {
            btn3.setname(json.data.btn)
          })

        }
      }
    }

    var btn1 = com.button($('#vueshowdiv'), optionsdata1)
    var optionsdata2 = {
      btn: '这个按钮的值点另外一个会改变2',
      funclick: function () {
        window.alert('动态创建了一个按钮!并且修改按钮1')
        btn1.setname('按钮123466')

      }
    }
    com.button($('#vueshowdiv'), optionsdata2)
  }

  return {init}
  //  $('#showdiv').append(jqhtml)
  //  var vue = com.instanceVue()

  // return {'demojs': 'demojs'}
})
