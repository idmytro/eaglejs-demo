<template>
  <div v-html="code">
  </div>
</template>
<script>
import Prism from 'prismjs'
export default {
  data () {
    return {
      code: ''
    }
  },
  created () {
    console.log('created', this.$slots.default[0].text)
  },
  mounted () {
    this.update()
  },
  methods: {
    update () {
      // var codeBlock = document.getElementById(this.id)
      // var commentsContent = document.getElementById(this.id2)
      // var codeContent = document.getElementById(this.id3)
      // codeContent.innerHTML = commentsContent.innerHTML
      // if (this.lang) {
      //   hljs.highlightBlock(codeBlock)
      // }
      this.code = Prism.highlight(this.$slots.default[0].text, Prism.languages.markup, 'markup')
    }
  }
}
</script>
