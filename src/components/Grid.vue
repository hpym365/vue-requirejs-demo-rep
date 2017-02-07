<template>
  <table border="5">
    <tr>
      <td v-for="field in options.fields">
        {{field.name}}
      </td>
    </tr>
    <tr v-for="field in options.fields">
      <td v-for="iteam in options.datalist">
        <template v-if="options.test(field,iteam)!==null">
          <p v-demo="options" v-html="options.test(field,iteam)"></p>
        </template>
        <template v-else>
          {{iteam[field.col]}}
        </template>
      </td>
    </tr>
  </table>
</template>
<script>
  export default{
    directives: {
      demo: {
        acceptStatement: true,
        // 当绑定元素插入到 DOM 中。
        inserted: function (el, data) {
          // 聚焦元素
          console.log(el)
          debugger
          console.log(data.expression)
          el.addEventListener('click', data.value.clickevent)
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
