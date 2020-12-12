<template>
  <ProgressBlock :bgValue="progress">
    <div class="header">
      <TimeDisplay v-model="currentTime" />
      <TimeDisplay v-model="remainingTime" />
      <TimeDisplay v-model="targetTime" />
    </div>
  </ProgressBlock>
</template>

<script>
import ProgressBlock from '@/components/ProgressBlock.vue'
import TimeDisplay from '@/components/TimeDisplay.vue'

const TICKER_INTERVAL = 1000 * 5

function getNow () {
  return new Date()
}

export default {
  name: 'TheHeader',
  components: { ProgressBlock, TimeDisplay },
  data () {
    const now = getNow()
    return {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0),
      currentTime: now,
      targetTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0),
      ticker: setInterval(() => {
        this.currentTime = getNow()
      }, TICKER_INTERVAL)
    }
  },
  destroyed () {
    clearInterval(this.ticker)
  },
  computed: {
    remainingTime () {
      return new Date(
        this.targetTime.getTime() -
        this.currentTime.getTime()
        + (this.currentTime.getTimezoneOffset() * 60 * 1000))
    },
    progress () {
      const total = this.targetTime.getTime() - this.startTime.getTime()
      const remaining = this.remainingTime.getTime() - (this.currentTime.getTimezoneOffset() * 60 * 1000)
      return remaining / total
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: row;
  }

  .header > * {
    flex: 1;
  }
</style>
