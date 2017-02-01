define(['components', 'jquery'], function (com, $) {
  console.log('demo js execute')
  var  boj
  $.ajax('./template/default.html').then(function (html) {

    var jqhtml = $(html)
    debugger
    var optionsdata1 = {
      btn: '这个按钮的值点另外一个会改变1',
      funclick: function () {
        window.alert('动态创建了一个按钮!')
        debugger
        var optionsdata5 = {
          btn: '动态创建的5',
          funclick: function () {
            window.alert('动态创建了一个按钮!5'+this.btn)
          }
        }
        jqhtml = com.button(jqhtml,optionsdata5,'btn5')
      //  var vue = com.instanceVue()
      }
    }
    jqhtml = com.button(jqhtml,optionsdata1,'btn1')

    var optionsdata2 = {
      btn: '这个按钮的值点另外一个会改变2',
      funclick: function () {
        window.alert('动态创建了一个按钮!2'+this.btn)
      }
    }
    jqhtml = com.button(jqhtml,optionsdata2,'btn2')

    debugger
    var optionsdata3 = {
      btn: '点这个能改变那个',
      funclick: function () {
        window.alert('改变了')
        vue.options.btn1.btn = '改变了！！1'
        vue.options.btn2.btn = '改变了！！2'
      }
    }
    jqhtml = com.button(jqhtml,optionsdata3,'btn3')

  //  $('#showdiv').append(jqhtml)
  //  var vue = com.instanceVue()
    debugger
  })

  // return {'demojs': 'demojs'}
})
