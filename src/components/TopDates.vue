<template>
  <div class="topDates">
    <div class="datetime left">
      <div class="left">
        <div class="day">12</div>
      </div>
      <div class="right">
        <div class="month">jan</div>
        <div class="year">2016</div>
      </div>
    </div>
    <div class="weekday right">tuesday</div>
  </div>
</template>

<script>
export default {
  name: 'topdates',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

@import "https://fonts.googleapis.com/css?family=Exo+2";
@font: 'Exo 2', sans-serif;

.set-border(@color: red) {
    border: 1px solid @color;
}

.topDates {
  font-family: @font;
  padding: 20px;

  .datetime {
    width: 30%;
    float: left;
    .left {
      .day {
        float: left;
        font-size: 44px;
        margin-right: 10px;
      }
    }
    .right {
      font-size: 14px;
      margin-top: 13px;
      .month {
        font-weight: 800;
        text-transform: uppercase;
      }
    }
  }

  .weekday {
    float: right;
    text-align: right;
    text-transform: uppercase;
    font-size: 14px;
    width: 60%;
    margin-top: 12px;
    margin-right: 4px;
  }
}
</style>
