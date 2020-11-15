<template>
  <div class="progressBlock">
    <ProgressBar :value="bgValue" class="progressBlockBackground" />
    <div class="progressBlockForeground">
      <div class="foreground"><slot>foreground</slot></div>
      <div class="leftSlot"><slot name="left"></slot></div>
      <div class="rightSlot"><slot name="right"></slot></div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'
export default {
  name: 'ProgressBlock',
  components: { ProgressBar },
  props: {
    bgValue: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../variables';

  .progressBlock {
    position: relative;
  }
  .progressBlockBackground {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .progressBlockForeground {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
  }
  .foreground {
    line-height: 1.5 * $baseSize;
    order: 2;
    flex: 1;
    padding: 0 (0.5 * $baseSize);
  }
  .leftSlot, .rightSlot {
    width: 1.5 * $baseSize;
    height: 1.5 * $baseSize;
  }
  .leftSlot {
    order: 1;
  }
  .rightSlot {
    order: 3;
  }
</style>
