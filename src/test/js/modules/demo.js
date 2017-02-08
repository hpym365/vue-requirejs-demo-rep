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

    var optionsdata3 = {
      btn: '点我执行showButtonDemoDynamic',
      funclick: function () {
        showButtonDemoDynamic()
      }
    }
    com.button($('#vueshowdiv'), optionsdata3)

    var optionsdata4 = {
      btn: '点我执行showButtonDisplay',
      funclick: function () {
        showButtonDisplay()
      }
    }
    com.button($('#vueshowdiv'), optionsdata4)
  }


  function showButtonDemoDynamic(){

    var dyyl
    var optionsdata1 = {
      btn: '打印按钮',
      funclick: function () {
        window.alert('点我可以打印了')
      }
    }

    var print = com.button($('#dy'), optionsdata1)

    var optionsdata2 = {
      btn: '↓',
      funclick: function () {
        window.alert('点我显示打印预览')
        if(dyyl===undefined || dyyl===null){
          var optionsdata3 = {
            btn: '打印预览',
            funclick: function () {
              window.alert('点我可以打印预览')
            }
          }
          dyyl=com.button($('#dyyl'), optionsdata3)
        }else{
          $('#dyyl').empty()
          dyyl=null
          //按钮对象销毁
        }
      }
    }
    var jt = com.button($('#dy'), optionsdata2)
  }


  function showButtonDisplay(){

    var optionsdata1 = {
      btn: '打印按钮',
      funclick: function () {
        window.alert('点我可以打印了')
      }
    }

    var print = com.button($('#dy'), optionsdata1)

    var optionsdata2 = {
      btn: '↓',
      funclick: function () {
        window.alert('点我显示打印预览')
        dyyl.setdisplay(dyyl.options.isdisplay==='none'?'block':'none')
        console.log(dyyl.options.isdisplay)
      }
    }
    var jt = com.button($('#dy'), optionsdata2)

    var optionsdata3 = {
      btn: '打印预览',
      funclick: function () {
        window.alert('点我可以打印预览')
      },
      isdisplay: 'none'
    }
    var dyyl=com.button($('#dyyl'), optionsdata3)
  }

  return {init}
  //  $('#showdiv').append(jqhtml)
  //  var vue = com.instanceVue()

  // return {'demojs': 'demojs'}
})
