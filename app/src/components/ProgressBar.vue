<template>
  <div class="progressBar">
    <div class="progressIndicator" :style="indicatorStyle">&nbsp;</div>
  </div>
</template>

<script>
export default {
name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    indicatorStyle () {
      return {
        width: `${100 * this.value}%`
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../variables';

  .progressBar {
    // border: 1px solid red;
  }
  .progressIndicator {
    background: $colorMedium;
    line-height: 1rem;
  }
</style>
