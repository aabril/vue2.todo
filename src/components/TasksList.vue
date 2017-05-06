<template>
  <div class="TasksList">
    <div v-for="(task, index) in tasks">
      <Task :description="task.description" :done="task.done" :index="index" />
    </div>
  </div>
</template>

<script>
import Task from './Task'
import { mapGetters } from 'vuex'

export default {
  name: 'taskslist',
  components: {
    Task
  },
  computed: {
    ...mapGetters([
      'tasks'
    ])
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
  max-height: 360px;
  clear:both;
  margin: 0;
  padding: 20px;
  overflow: scroll;
}
</style>
