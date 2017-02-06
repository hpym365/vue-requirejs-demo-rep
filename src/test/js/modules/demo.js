define(['components', 'jquery', 'vue'], function (com, $, Vue) {
  console.log('demo js execute')
 // com.instanceVue()
  $('#showdiv').empty()
  var ydiv = com.div($('#showdiv'), {options:{message:'123'}})

  var btn3
  var optionsdata1 = {
    btn: '按钮1',
    funclick: function () {
      window.alert('我是按钮1')
      if(btn3!== undefined){
        btn3.setname('被按钮1修改了')
      }
    }
  }

  var btn1 = com.button($('#vueshowdiv'), optionsdata1)

  var optionsdata2 = {
    btn: '这个按钮的值点另外一个会改变2',
    funclick: function () {
      window.alert('动态创建了一个按钮!并且修改按钮1')
      var optionsdata3 = {
        btn: '动态创建按钮3',
        funclick: function () {
          window.alert('我是动态创建按钮3')
        }
      }
      btn3 = com.button($('#vueshowbutton'), optionsdata3)
      btn1.setname('被修改了')
    }
  }
  com.button($('#vueshowdiv'), optionsdata2)


  //  $('#showdiv').append(jqhtml)
  //  var vue = com.instanceVue()
  debugger


  // return {'demojs': 'demojs'}
})
