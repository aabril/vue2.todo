<template>
  <div class="TasksList">
    tasks lists
  </div>
</template>

<script>
export default {
  name: 'taskslist',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

.set-border(@color: red) {
    border: 1px solid @color;
}

.set-dimensions(@w: auto, @h: auto) {
  width: @w;
  height: @h;
}

.TasksList {
  clear:both;
  margin: 30px 0;
  padding: 20px;


}
</style>
