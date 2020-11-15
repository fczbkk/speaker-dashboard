<template>
  <svg :width="outerCircleSize" :height="outerCircleSize" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="50" cy="50" :r="size/2" class="outerCircle"/>
    <circle cx="50" cy="50" :r="innerCircleRadius" class="innerCircle"/>
    <path
      v-if="value > 0 && value < 1"
      :d="arcPath"
      class="arc"
    />
    <path
      v-if="value === 1"
      d="M 30 40 L 50 60 L 80 30"
      class="checkmark"
    />
</svg>
</template>

<script>
function degToRad (value) {
  return value * (Math.PI / 180)
}

export default {
  name: 'ProgressClock',
  props: {
    value: {
      type: Number,
      default: 0.75
    },
    size: {
      type: Number,
      default: 100
    },
    borderSize: {
      type: Number,
      default: 1
    }
  },
  computed: {
    outerCircleSize () {
      return `${this.size}px`
    },
    innerCircleRadius () {
      return (this.size /  2) - this.borderSize
    },
    arcPath () {
      const isLargeArc = (this.value < 0.5) ? 0 : 1
      const angle = degToRad((360 * this.value) - 90)
      const xPoint = 50 + (Math.cos(angle) * 50)
      const yPoint = 50 + (Math.sin(angle) * 50)
      return [
        'M 50 50',
        'L 50 0',
        `A 50 50 0 ${isLargeArc} 1 ${xPoint} ${yPoint}`,
        'L 50 50'
      ].join(' ')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../variables';

  .outerCircle {
    fill: $colorLight;
  }
  .innerCircle {
    fill: $colorDark;
  }
  .arc {
    fill: $colorLight;
  }
  .checkmark {
    stroke: $colorLight;
    stroke-width: 10;
    fill: none;
  }
</style>
