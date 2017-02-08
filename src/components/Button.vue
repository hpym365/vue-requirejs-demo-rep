<template>
    <button @click="options.funclick" @mouseover="options.mouseover"
            :style="{display: options.isdisplay}">{{options.btn}}</button>
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
          },
          isdisplay: 'block'
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
