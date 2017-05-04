<template>
  <div class="TasksList">
    <div v-for="task in tasks">
      <Task :description="task.description" :done="task.done" />
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
  clear:both;
  margin: 30px 0;
  padding: 20px;


}
</style>
