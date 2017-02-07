requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    module: '../modules',
    app: 'http://localhost:8080/app'
  },
  shim: {
    app: {
      deps: ['vue', 'manifest', 'vendor']
    },
    vendor: {
      deps: ['manifest']
    }
  }
})

requirejs(['module/route','jquery'], function (route,$) {

})
