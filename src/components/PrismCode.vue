<template>
  <pre><slot/></pre>
</template>
<script>
import Prism from 'prismjs'

export default {
  mounted () {
    Prism.highlightAll()
  }
}
</script>
