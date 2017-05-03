<template>
  <div class="task">
    <div class="textDescription">{{ description }}</div>
    <div class="buttonCheck"></div>
  </div>
</template>

<script>
export default {
  name: 'task',
  props: ['description'],
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import "https://fonts.googleapis.com/css?family=Exo+2";
@font: 'Exo 2', sans-serif;
</style>
