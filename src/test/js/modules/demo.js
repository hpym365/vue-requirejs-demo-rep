define(['components', 'jquery'], function (com, $) {
  console.log('demo js execute')

  var optionsdata1 = {
    btn: '这个按钮的值点另外一个会改变',
    funclick: function () {
      window.alert('动态创建了一个按钮!')
    }
  }
  var  btnvue1 = com.button($('#showdiv'),optionsdata1)

  var optionsdata2 = {
    btn: '这个按钮的值点另外一个会改变2',
    funclick: function () {
      window.alert('动态创建了一个按钮!')
    }
  }
  var  btnvue2 = com.button($('#showdiv'),optionsdata2)

  com.generateCom({'name':'zx'},'namea')
  var v = com.generateCom({'name':'ls'},'nameb')
  debugger
  var optionsdata3 = {
    btn: '点这个能改变那个',
    funclick: function () {
      window.alert('改变了')
      btnvue1.options.btn = '改变了！！'
      btnvue2.options.btn = '改变了！！'
    }
  }
  var changebtn = com.button($('#showdiv'),optionsdata3)

  // return {'demojs': 'demojs'}
})
