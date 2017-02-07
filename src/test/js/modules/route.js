define(['jquery','module/demo','module/test','director','module/grid'], function ($,demo,test,d,grid) {

  $('#showdiv').append('<p>首页</p>')

  var routes = {
    '/demo': [demo.init,function() {
      console.log("demo.");
      router.setRoute('demo')
    }],
    '/test': test.init,
    '/grid': grid.init
  };

  var router = Router(routes).configure({html5history:false,convert_hash_in_init:false});

  router.init();

})
