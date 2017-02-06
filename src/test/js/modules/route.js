define(['jquery','module/demo','module/test','director'], function ($,demo,test) {

  var routes = {
    '/demo': [demo.init,function() {
      console.log("demo.");
      router.setRoute('demo')
    }],
    '/test': test.init
  };

  var router = Router(routes).configure({html5history:true,convert_hash_in_init:false});

  router.init();
  debugger

})
