<template>
  <button @click="options.onclick"
          @mouseover="options.mouseover"
          :type="button"
          :class="classes"
          :style="{display: options.isdisplay}">
    <span class="glyphicon glyphicon-star"></span>
    {{options.btn}}
  </button>
</template>

<script>
  import Base from './Base'

  export default{
    data () {
      return {btndom: {}}
    },
    props: {
      options: {
        type: Object,
        default: {
          btn: '按钮',
          onclick: function () {
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
    },
    computed: {
      classes: function () {
        return [Base.btnbaseClass,
          {}
        ]
      }
    }
  }
</script>
