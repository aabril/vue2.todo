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

<style lang="less" scoped>

@buttonColor: #50E3A4;
@buttonColorHover: lightgreen;
@buttonSignColor: #47C18D;

.set-border(@color: red) {
    border: 1px solid @color;
}

.set-dimensions(@w: auto, @h: auto) {
  width: @w;
  height: @h;
}

.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:after {
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
  &:active {
    &:after {
      transform: scale(0, 0);
      opacity: .2;
      transition: 0s;
    }
  }
}

.addButtonContainer {
  margin: none;
  width: 100%;
  position: absolute;
  bottom: -40px;
  justify-content: center;
  .addButton {
      background: @buttonColor;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      .set-dimensions(80px, 80px);
      border: none;
      border-radius: 40px;
      box-shadow: 2px 7px 10px -6px rgba(0,0,0,0.25);
      cursor: pointer;

    &:hover {
      background: @buttonColorHover;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      .set-dimensions(80px, 80px);
      border: none;
      border-radius: 40px;
      box-shadow: 2px 7px 10px -6px rgba(0,0,0,0.25);
      cursor: pointer;
    }
    .plusSign {
      color: @buttonSignColor;
      font-size: 44px;
      line-height: 78px;
      user-select: none;
    }
  }
}
</style>
