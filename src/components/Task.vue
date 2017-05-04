<template v-if="done">
  <div class="task">
    <div class="textDescription done">{{ description }}</div>
    <div class="buttonCheck done"></div>
  </div>
</template>
<template v-else>
  <div class="task">
    <div class="textDescription ">{{ description }}</div>
    <div class="buttonCheck"></div>
  </div>
</template>

<script>
export default {
  name: 'task',
  props: {
    description: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import "https://fonts.googleapis.com/css?family=Exo+2";
@font: 'Exo 2', sans-serif;

@height: 40px;

@descriptionColor: rgb(85, 88, 98);

@checkColorDisabled: rgb(234, 236, 242);
@checkColorEnabled: rgb(108, 229, 164);
@checkHeight: 20px;


.set-border() {
    border: 1px solid #ddd;
}

.task {
  height:@height;
  margin-bottom: 2px;
  line-height: @height;
  padding: 0 6px;

  color: @descriptionColor;
  font-weight: 440;

  .textDescription {
    width: 60%;
    float: left;
  }

  .textDescription.done {
    color: red;
  }

  .buttonCheck {
    float: right;
    width: @checkHeight;
    height: @checkHeight;
    margin-top: 6px;
    border: 3px solid @checkColorDisabled;
    border-radius: @height;
    cursor: pointer;

    &:hover {
      border: 3px solid @checkColorEnabled;
    }
  }


  .buttonCheck.done {
    border: 3px solid @checkColorEnabled;
  }


}

</style>
