<template>
  <div v-if="done" class="task">
    <div class="textDescription done">{{ description }}</div>
    <div class="buttonCheck done" @click="uncheckTask"></div>
  </div>
  <div v-else class="task">
    <div class="textDescription" v-model="description" @click="editDescription(description)">{{ description }}</div>
    <div class="buttonCheck" @click="checkTask"></div>
  </div>
</template>

<script>
export default {
  name: 'task',
  props: {
    index: {
      type: Number
    },
    description: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    editDescription (description) {
      alert(description)
      // this.newDescription = newDescription
      // this.$store.commit('editDescription', this.text)
    },
    checkTask () {
      this.$store.commit('switchCheck', this.index)
    },
    uncheckTask () {
      this.$store.commit('switchCheck', this.index)
    }
  },
  data () {
    return {
      editedDescription: this.description
    }
  }
}
</script>

<style lang="less" scoped>
@import "https://fonts.googleapis.com/css?family=Exo+2";
@font: 'Exo 2', sans-serif;

@height: 40px;

@descriptionColorUnchecked: rgb(85, 88, 98);
@descriptionColorChecked: rgb(205, 206, 215);

@checkColorUnchecked: rgb(234, 236, 242);
@checkColorChecked: rgb(108, 229, 164);
@checkHeight: 22px;


.set-border() {
    border: 1px solid #ddd;
}

.task {
  height:@height;
  margin-bottom: 2px;
  line-height: @height;
  padding: 0 6px;

  color: @descriptionColorUnchecked;
  font-weight: 440;

  .textDescription {
    width: 60%;
    float: left;
  }

  .textDescription.done {
    color: @descriptionColorChecked;
  }

  .buttonCheck {
    float: right;
    width: @checkHeight;
    height: @checkHeight;
    margin-top: 8px;
    border: 3px solid @checkColorUnchecked;
    border-radius: @height;
    cursor: pointer;
    &:hover {
      border: 3px solid darken(@checkColorUnchecked, 5%);
    }
  }


  .buttonCheck.done {
    border: 3px solid @checkColorChecked;
    &:after{
      content: '✓';
      color: @checkColorChecked;
    }
  }


}

</style>
