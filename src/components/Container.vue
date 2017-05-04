<template>
  <div class="container">
    <TopDates />
    <AddButton/>
    <TasksList/>
  </div>
</template>

<script>

import AddButton from './AddButton'
import TopDates from './TopDates'
import TasksList from './TasksList'

export default {
  name: 'container',
  components: {
    AddButton,
    TopDates,
    TasksList
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

@width: 330px;
@height: 560px;

.set-radius(@px: 6px) {
  -webkit-border-radius: @px;
     -moz-border-radius: @px;
      -ms-border-radius: @px;
          border-radius: @px;
}

.set-center-screen() {
  margin:auto;
  margin-top: 40px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}

.set-border() {
    border: 0px solid #ddd;
}

.set-dimensions(@w, @h) {
  width: @w;
  height: @h;
}

.set-box-shadow(){
  box-shadow: 2px 6px 10px -6px rgba(0,0,0,0.25);
}

.container {
  /* display: flex; */
  /* justify-content: center; */
  background: #fff;
  .set-dimensions(@width, @height);
  .set-center-screen;
  .set-radius(6px);
  .set-box-shadow();
}
</style>
