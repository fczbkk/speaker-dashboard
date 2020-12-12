<template>
  <div class="timeDisplay">{{ displayTime }}</div>
</template>

<script>
function formatTimeFragment (input = 0) {
  return String(input).padStart(2, '0')
}

export default {
name: "TimeDisplay",
  props: {
    value: {
      type: Date,
      default: new Date(),
      required: false
    }
  },
  computed: {
    displayTime () {
      return [
        formatTimeFragment(this.value.getHours()),
        formatTimeFragment(this.value.getMinutes()),
        // formatTimeFragment(this.value.getSeconds())
      ].join(':')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../variables';

  .timeDisplay {
    font-weight: bold;
    font-size: $baseSize * 1.5;
    line-height: $baseSize * 3;
    text-align: center;
  }
</style>
