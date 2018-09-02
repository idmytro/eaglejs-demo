<template lang='pug'>
canvas(:id='id', :width='width', :height='height')
</template>

<script>
import Chart from 'chart.js'
export default {
  props: {
    id: {default: () => Math.random().toString(36).substr(2, 10), type: String},
    width: {default: 400, type: Number},
    height: {default: 400, type: Number},
    data: {default: () => ({}), type: Object},
    options: {default: () => ({}), type: Object},
    type: {default: 'bar', type: String}
  },
  data: function () {
    return {
      chart: null
    }
  },
  watch: {
    data: {
      deep: true,
      handler: function (val) {
        console.log('data', val)
        console.log('chartdata', this.chart.data)
        for (var i = 0; i < val.datasets.length; i++) {
          this.chart.data.datasets[i].data = val.datasets[i].data
        }
        this.chart.update()
      }
    }
  },
  mounted: function () {
    var canvas = document.getElementById(this.id)
    var ctx = canvas.getContext('2d')
    // Reduce the animation steps for demo clarity.
    this.chart = new Chart(ctx, {
      type: this.type,
      data: this.data,
      options: this.options
    })
  }
}
</script>
