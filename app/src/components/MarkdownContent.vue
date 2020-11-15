<template>
<div class="markdownContent" v-html="parsedContent" />
</template>

<script>
import remark from 'remark'
import html from 'remark-html'
import recommended from 'remark-preset-lint-recommended'

export default {
  name: 'MarkdownContent',
  data () {
    return {
      parsedContent: ''
    }
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateParsedContent () {
      remark()
      .use(recommended)
      .use(html)
      .process(this.content)
      .then((result) => this.parsedContent = result)
    }
  },
  created () {
    this.updateParsedContent()
  },
  watch: {
    content () {
      this.updateParsedContent()
    }
  }
}

/*
remark()
  .use(recommended)
  .use(html)
  .process('## Hello world!', function (err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })
 */
</script>

<style scoped lang="scss">
  .markdownContent {
  }
</style>
