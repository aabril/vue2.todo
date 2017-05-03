<template>
  <div class="container">
    <AddButton/>
  </div>
</template>

<script>

import AddButton from './addbutton'

export default {
  name: 'hello',
  components: {
    AddButton
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.container {
  width: 350px;
  height: 600px;
  border: 0px solid #ddd;
  font-family: sans-serif;
  background: #fff;
  margin:auto;

  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;

  -webkit-border-radius: 6px;
     -moz-border-radius: 6px;
      -ms-border-radius: 6px;
          border-radius: 6px;

  box-shadow: 2px 6px 10px -6px rgba(0,0,0,0.25);
}
</style>
