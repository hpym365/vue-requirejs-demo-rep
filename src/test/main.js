requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    module: '../modules'
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

requirejs(['module/demo'], function () {
})
