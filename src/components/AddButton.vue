<template>
  <div class="addButtonContainer">
    <div class="addButton ripple">
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
.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #888 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .6s, opacity 1s;
}
.ripple:active:after {
  transform: scale(0, 0);
  opacity: .2;
  transition: 0s;
}

.addButtonContainer {
  position: absolute;
  bottom: -40px;
  text-align: middle;
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
  user-select: none;
}
</style>
