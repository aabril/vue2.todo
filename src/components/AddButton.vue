<template>
  <div class="addButtonContainer">
    <div class="addButton">
      <div class="plusSign">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addbutton',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.addButtonContainer {
  position: absolute;
  bottom: -40px;
  width: 100%;
}


.addButton {
  margin-right:auto;
  margin-left:auto;
  text-align: center;

  width: 80px;
  height: 80px;
  border: none;
  border-radius: 40px;
  background: #50E3A4;
  box-shadow: 2px 7px 10px -6px rgba(0,0,0,0.25);
  cursor: pointer;
}

.addButton :hover {
  background: lightgreen;
  margin-right:auto;
  margin-left:auto;
  text-align: center;

  width: 80px;
  height: 80px;
  border: none;
  border-radius: 40px;
  box-shadow: 2px 7px 10px -6px rgba(0,0,0,0.25);
  cursor: pointer;
}

.plusSign {
  color: #47C18D;
  font-size: 44px;
  line-height: 74px;
}





</style>
