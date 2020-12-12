<template>
  <div class="layout">
    <div class="layoutItem corner">corner</div>
    <div class="layoutItem header">
      <TheHeader />
    </div>
    <div class="layoutItem sidebar">
      <ProgressBlock :bgValue="0.5">Prva sekcia</ProgressBlock>
      <ProgressBlock :bgValue="0.2">Druha sekcia</ProgressBlock>
      <ProgressBlock :bgValue="0.1">
        Tretia sekcia
        <template slot="left">
          <ProgressClock :value="1" size="100%" />
        </template>
        <template slot="right">
          <ProgressClock :value="0.75" size="100%" />
        </template>
      </ProgressBlock>
    </div>
    <div class="layoutItem mainframe">
      <h1>Toto je nadpis aktualnej sekcie</h1>
      <MarkdownContent :content="sectionContent" />
    </div>
  </div>
</template>

<script>
import MarkdownContent from '@/components/MarkdownContent.vue'
import ProgressBlock from '@/components/ProgressBlock.vue'
import ProgressClock from '@/components/ProgressClock.vue'
import TheHeader from '@/components/TheHeader.vue'
export default {
  name: 'Home',
  components: { TheHeader, ProgressClock, ProgressBlock, MarkdownContent },
  data () {
    return {
      sectionContent: `
Toto je obsah sekcie.

Obsahuje *naformatovany* **text**.

- raz
- dva
- tri
      `
    }
  }
}
</script>

<style lang="scss">
  @import '../variables';

  .layout {
    display: grid;
    grid-template-columns: 30% auto;
    grid-template-rows: (3 * $baseSize) auto;
    width: 100vw;
    height: 100vh;
  }

  .mainframe {
    padding: 2 * $baseSize;
  }
</style>
