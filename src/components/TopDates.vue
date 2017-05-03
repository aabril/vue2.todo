<template>
  <div class="topDates">
    <div class="date">
      <div class="left">
        <div class="day">12</div>
      </div>
      <div class="right">
        <div class="month">jan</div>
        <div class="year">2016</div>
      </div>
    </div>
    <div class="weekday">tuesday</div>
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

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Exo+2');

.topDates {
  width: 100%;
  display: flex;
  font-family: 'Exo 2', sans-serif;
  padding: 20px;
}

.date {
  display: flex;
  width: 30%;
}

.date .left .day {
  font-size: 44px;
  margin-right: 10px;
}

.date .right {
  font-size: 14px;
  margin-top: 13px;
}

.date .right .month {
  font-weight: 800;
  text-transform: uppercase;
}

.date .right .year {
}

.weekday {
  text-align: right;
  text-transform: uppercase;
  font-size: 14px;
  width: 70%;
  margin-top: 30px;
}

</style>
