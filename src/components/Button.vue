<template>
  <div>
    <button @click="options.funclick">{{options.btn}}</button>
  </div>
</template>

<script>
  export default{
    data () {
      return {btndom: {}}
    },
    props: {
      options: {
        type: Object,
        default: {
          btn: '按钮',
          funclick: function () {
            window.alert('按钮默认点击事件')
          }
        }
      }
    },
    method: {
      test: function () {
        window.alert('test')
      }
    }
  }
</script>
