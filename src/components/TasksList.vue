<template>
  <div class="TasksList">
    <Task description="Read an article" />
    <Task description="Write a novel" />
    <Task description="Sing like Kurt Cobain" />
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'taskslist',
  components: {
    Task
  },
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
