<template>
    <div class="lay-col-1 ff-lay">
      <div id="vueshowbutton" class="lay-row-4 ff-lock" style="width: 202px;">
        <h1>div 组件的LEFT</h1>
        <slot name="left"></slot>
        <div id="dy"></div>
        <div id="dyyl"></div>
      </div>
      <div id="vueshowdiv" class="lay-row-5 actived">
        <h1>div 组件的RIGHT</h1>
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
  export default{
    props: {
      options: {
        type: Object,
        default: {message: 'this is a message by default'}
      }
    }
  }
</script>

<style>
</style>
