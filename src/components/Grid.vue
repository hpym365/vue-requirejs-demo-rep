<template>
  <table border="5">
    <tr>
      <td v-for="field in options.fields">
        {{field.name}}
      </td>
    </tr>
    <tr v-for="iteam in options.datalist">
      <td v-for="field in options.fields">
        <!--<template v-if="options.test(field,iteam)!==null">-->
        <!--<p v-demo="options" v-html="options.test(field,iteam)"></p>-->
        <!--</template>-->
        <!--<template v-else>-->
        <!--{{iteam[field.col]}}-->
        <!--</template>-->
        <p v-demo="{options:options,field:field,iteam:iteam}"></p>
      </td>
    </tr>
  </table>
</template>
<script>
  export default{
    directives: {
      demo: {
//        acceptStatement: true,
        // 当绑定元素插入到 DOM 中。
//        inserted: function (el, data) {
//          // 聚焦元素
//          console.log(el)
//          debugger
//          el.addEventListener('click', data.value.clickevent)
//          el = data.value.domfun(el)
//          console.log(el)
//        },
        bind: function (el, data) {
          // 聚焦元素
          console.log(data.value.field.col)
          console.log(data.value.iteam[data.value.field.col])
          el.innerHTML = 'undefind'
          el = data.value.options.domfun(el, data.value.field, data.value.iteam)
          if (el.innerHTML === 'undefind') {
            /**
             * 未处理设置默认
             */
            el.innerHTML = data.value.iteam[data.value.field.col]
          }
          console.log(el)
        }
      }
    },
    data () {
      return {test: '123456'}
    },
    props: ['options'],
    method: {}
  }
</script>
